import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://mgx-backend-cdn.metadl.com/generate/images/857000/2026-01-22/d408f737-53b4-439c-b7c3-363fe5547478.png" 
                alt="BettIntel Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">BettIntel</span>
            </div>
            <p className="text-slate-400 text-sm">
              Your trusted source for honest casino reviews and ratings.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 text-sm transition">
                  About BettIntel
                </Link>
              </li>
              <li>
                <Link to="/responsible-gaming" className="text-slate-400 hover:text-emerald-400 text-sm transition">
                  Responsible Gaming
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/disclaimer" className="text-slate-400 hover:text-emerald-400 text-sm transition">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-emerald-400 text-sm transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-emerald-400 text-sm transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-slate-400 hover:text-emerald-400 text-sm transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Important Information</h3>
            <p className="text-slate-400 text-sm mb-2">
              18+ Gamble Responsibly
            </p>
            <p className="text-slate-400 text-sm">
              Gambling can be addictive. Please play responsibly.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} BettIntel. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            BettIntel is an affiliate website. We earn commission from casinos we recommend.
          </p>
        </div>
      </div>
    </footer>
  );
}