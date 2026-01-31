import { useEffect, useState } from 'react';
import { createClient } from '@metagptx/web-sdk';
import { Plus, Edit, Trash2, LogOut, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const client = createClient();

interface Casino {
  id: number;
  name: string;
  description: string;
  image_url: string;
  casino_url: string;
  average_rating: number;
  review_count: number;
  featured: boolean;
}

export default function AdminDashboard() {
  const [casinos, setCasinos] = useState<Casino[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCasino, setEditingCasino] = useState<Casino | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: '',
    casino_url: '',
    featured: false
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    loadCasinos();
  }, []);

  const loadCasinos = async () => {
    try {
      setLoading(true);
      const response = await client.entities.casinos.query({
        query: {},
        sort: '-created_at',
        limit: 100
      });
      setCasinos(response.data.items);
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: detail || 'Failed to load casinos',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await client.auth.logout();
    window.location.href = '/';
  };

  const openAddDialog = () => {
    setEditingCasino(null);
    setFormData({
      name: '',
      description: '',
      image_url: '',
      casino_url: '',
      featured: false
    });
    setDialogOpen(true);
  };

  const openEditDialog = (casino: Casino) => {
    setEditingCasino(casino);
    setFormData({
      name: casino.name,
      description: casino.description,
      image_url: casino.image_url,
      casino_url: casino.casino_url,
      featured: casino.featured
    });
    setDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.casino_url) {
      toast({
        title: 'Validation Error',
        description: 'Name and Casino URL are required',
        variant: 'destructive'
      });
      return;
    }

    try {
      if (editingCasino) {
        await client.entities.casinos.update({
          id: editingCasino.id.toString(),
          data: formData
        });
        toast({
          title: 'Success',
          description: 'Casino updated successfully'
        });
      } else {
        await client.entities.casinos.create({
          data: {
            ...formData,
            average_rating: 0,
            review_count: 0
          }
        });
        toast({
          title: 'Success',
          description: 'Casino added successfully'
        });
      }
      
      setDialogOpen(false);
      loadCasinos();
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: detail || 'Failed to save casino',
        variant: 'destructive'
      });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this casino?')) {
      return;
    }

    try {
      await client.entities.casinos.delete({ id: id.toString() });
      toast({
        title: 'Success',
        description: 'Casino deleted successfully'
      });
      loadCasinos();
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: detail || 'Failed to delete casino',
        variant: 'destructive'
      });
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Button
              onClick={() => navigate('/admin/users')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              Manage Users
            </Button>
            <Button
              onClick={openAddDialog}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Casino
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Casino Listings ({casinos.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {casinos.map((casino) => (
                <div
                  key={casino.id}
                  className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg"
                >
                  <img
                    src={casino.image_url}
                    alt={casino.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">{casino.name}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2">{casino.description}</p>
                    <div className="flex gap-4 mt-2 text-sm text-slate-400">
                      <span>Rating: {casino.average_rating.toFixed(1)}</span>
                      <span>Reviews: {casino.review_count}</span>
                      {casino.featured && (
                        <span className="text-emerald-400">Featured</span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => openEditDialog(casino)}
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-slate-600"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(casino.id)}
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingCasino ? 'Edit Casino' : 'Add New Casino'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-slate-300">Casino Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-slate-300">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="image_url" className="text-slate-300">Image URL</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="/images/photo1769097993.jpg"
                />
              </div>

              <div>
                <Label htmlFor="casino_url" className="text-slate-300">Casino URL *</Label>
                <Input
                  id="casino_url"
                  value={formData.casino_url}
                  onChange={(e) => setFormData({ ...formData, casino_url: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="https://example.com"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                />
                <Label htmlFor="featured" className="text-slate-300">Featured Casino</Label>
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  onClick={() => setDialogOpen(false)}
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  {editingCasino ? 'Update' : 'Add'} Casino
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}