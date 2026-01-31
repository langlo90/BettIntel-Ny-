import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">About BettIntel</h1>
        
        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              BettIntel is dedicated to providing honest, transparent, and comprehensive reviews of online casinos. 
              We believe that every player deserves access to reliable information to make informed decisions about 
              where to play.
            </p>
            <p>
              Our team of experienced reviewers thoroughly evaluates each casino based on multiple criteria including 
              game selection, payment methods, customer support, security measures, and overall user experience.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">What We Do</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We provide detailed casino reviews, ratings, and comparisons to help you find the best online gambling 
              platforms. Our reviews cover:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Game variety and quality</li>
              <li>Bonus offers and promotions</li>
              <li>Payment methods and withdrawal speeds</li>
              <li>Customer support availability and quality</li>
              <li>Security and licensing information</li>
              <li>Mobile compatibility</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Transparency</h3>
              <p>We provide honest reviews based on real user experiences and thorough testing.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Integrity</h3>
              <p>Our reviews are unbiased and focused solely on providing value to our users.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Community</h3>
              <p>We encourage user reviews and feedback to create a comprehensive resource for all players.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p>
              Have questions or suggestions? We'd love to hear from you. Reach out to us at{' '}
              <a href="mailto:info@bettintel.com" className="text-emerald-400 hover:text-emerald-300">
                info@bettintel.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}