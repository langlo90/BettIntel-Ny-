import { useEffect } from 'react';
import { createClient } from '@metagptx/web-sdk';
import LoadingSpinner from '@/components/LoadingSpinner';

const client = createClient();

export default function AuthCallback() {
  useEffect(() => {
    handleAuth();
  }, []);

  const handleAuth = async () => {
    try {
      await client.auth.login();
      window.location.href = '/admin/dashboard';
    } catch (error) {
      console.error('Auth error:', error);
      window.location.href = '/admin/login';
    }
  };

  return <LoadingSpinner />;
}