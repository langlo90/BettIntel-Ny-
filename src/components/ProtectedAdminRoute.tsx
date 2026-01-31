import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { createClient } from '@metagptx/web-sdk';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, User, LogIn } from 'lucide-react';

const client = createClient();

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

export default function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const userData = await client.auth.me();
      setUser(userData.data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      await client.auth.toLogin();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-300">Verifying permissions...</p>
        </div>
      </div>
    );
  }

  // If the user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // All logged-in users can access admin dashboard
  // (You can add role checking here if needed in the future)
  return <>{children}</>;
}