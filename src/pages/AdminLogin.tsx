import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@metagptx/web-sdk';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const client = createClient();

export default function AdminLogin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const user = await client.auth.me();
      if (user.data) {
        navigate('/admin/dashboard');
      }
    } catch (error) {
      // Not logged in
    } finally {
      setChecking(false);
    }
  };

  const handleLogin = async () => {
    try {
      await client.auth.toLogin();
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: detail || 'Failed to login',
        variant: 'destructive'
      });
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Checking authentication...</div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url('https://mgx-backend-cdn.metadl.com/generate/images/857000/2026-01-22/a5b42e5e-91ca-46a3-91ff-b243c24a79de.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Card className="w-full max-w-md bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white text-center">Admin Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-300 text-center">
            Login to access the admin dashboard and manage casino listings
          </p>
          <Button
            onClick={handleLogin}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Login with Atoms
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}