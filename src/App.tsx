import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ResponsibleGaming from './pages/ResponsibleGaming';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import CasinoReviewPage from './pages/CasinoReviewPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AuthCallback from './pages/AuthCallback';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <Routes>
          {/* Auth callback route - no layout */}
          <Route path="/auth/callback" element={<AuthCallback />} />
          
          {/* Admin login route - no layout */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* All other routes with Header/Footer layout */}
          <Route path="/*" element={
            <>
              <Header />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/casino/:id" element={<CasinoReviewPage />} />
                  <Route path="/admin/dashboard" element={
                    <ProtectedAdminRoute>
                      <AdminDashboard />
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/users" element={
                    <ProtectedAdminRoute>
                      <AdminUsers />
                    </ProtectedAdminRoute>
                  } />
                </Routes>
              </div>
              <Footer />
              <CookieConsent />
            </>
          } />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;