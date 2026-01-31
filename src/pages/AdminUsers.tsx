import { useState, useEffect } from 'react';
import { createClient } from '@metagptx/web-sdk';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Users, Loader2 } from 'lucide-react';

const client = createClient();

interface User {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at?: string;
  role?: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await client.apiCall.invoke({
        url: '/api/v1/admin/users',
        method: 'GET',
      });
      setUsers(response.data.users || []);
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: `Failed to load users: ${detail}`,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUserId) return;

    try {
      setDeleting(true);
      await client.apiCall.invoke({
        url: '/api/v1/admin/users',
        method: 'DELETE',
        data: { user_id: deleteUserId },
      });

      toast({
        title: 'Success',
        description: 'User deleted successfully',
      });

      // Refresh user list
      await fetchUsers();
      setDeleteUserId(null);
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: `Failed to delete user: ${detail}`,
        variant: 'destructive',
      });
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="mb-4"
          >
            ← Back to Dashboard
          </Button>
          <h1 className="text-4xl font-bold text-white mb-2">User Management</h1>
          <p className="text-gray-400">Manage registered users and their accounts</p>
        </div>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5" />
              Registered Users
            </CardTitle>
            <CardDescription className="text-gray-400">
              Total users: {users.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-red-500" />
              </div>
            ) : users.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                No users found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700 hover:bg-gray-700/50">
                      <TableHead className="text-gray-300">User ID</TableHead>
                      <TableHead className="text-gray-300">Email</TableHead>
                      <TableHead className="text-gray-300">Registered</TableHead>
                      <TableHead className="text-gray-300">Last Login</TableHead>
                      <TableHead className="text-gray-300">Role</TableHead>
                      <TableHead className="text-gray-300 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow
                        key={user.id}
                        className="border-gray-700 hover:bg-gray-700/30"
                      >
                        <TableCell className="text-gray-300 font-mono text-sm">
                          {user.id.substring(0, 8)}...
                        </TableCell>
                        <TableCell className="text-gray-300">{user.email}</TableCell>
                        <TableCell className="text-gray-400">
                          {formatDate(user.created_at)}
                        </TableCell>
                        <TableCell className="text-gray-400">
                          {formatDate(user.last_sign_in_at || '')}
                        </TableCell>
                        <TableCell className="text-gray-400">
                          {user.role || 'User'}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeleteUserId(user.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        <AlertDialog open={!!deleteUserId} onOpenChange={() => setDeleteUserId(null)}>
          <AlertDialogContent className="bg-gray-800 border-gray-700">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">Delete User</AlertDialogTitle>
              <AlertDialogDescription className="text-gray-400">
                Are you sure you want to delete this user? This action cannot be undone.
                All user data including reviews and ratings will be permanently removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className="bg-gray-700 text-white hover:bg-gray-600"
                disabled={deleting}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteUser}
                disabled={deleting}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                {deleting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  'Delete User'
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}