import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@metagptx/web-sdk';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const client = createClient();

export default function Header() {
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
    }
  };

  const handleLogin = async () => {
    await client.auth.toLogin();
  };

  const handleLogout = async () => {
    await client.auth.logout();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://mgx-backend-cdn.metadl.com/generate/images/857000/2026-01-22/d408f737-53b4-439c-b7c3-363fe5547478.png" 
              alt="BettIntel Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-white">BettIntel</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-slate-300 hover:text-white font-semibold transition">
              Home
            </Link>
            
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-slate-300">
                  <User className="w-5 h-5" />
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleLogin}
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Login
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}