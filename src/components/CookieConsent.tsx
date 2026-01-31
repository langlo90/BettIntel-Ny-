import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom">
      <Card className="bg-slate-800 border-slate-700 max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">
                We Use Cookies
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                We use cookies to improve your experience on our website, analyze site traffic, 
                and understand where our visitors are coming from. By clicking "Accept All", 
                you consent to our use of cookies.
              </p>
              <Link 
                to="/cookie-policy" 
                className="text-emerald-400 hover:text-emerald-300 text-sm underline"
              >
                Read our Cookie Policy
              </Link>
            </div>
            <button
              onClick={handleDecline}
              className="text-slate-400 hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-3 mt-4">
            <Button
              onClick={handleAccept}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Accept All
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}