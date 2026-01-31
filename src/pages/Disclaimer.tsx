import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Affiliate Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              BettIntel is an affiliate website that earns commission from online casinos we review 
              and recommend. When you click on links to casinos on our website and register or make 
              a purchase, we may receive a commission from that casino.
            </p>
            <p>
              This commission does not affect the price you pay, and it does not influence our reviews 
              or rankings. We are committed to providing honest, unbiased reviews based on thorough 
              testing and real user experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">No Guarantees</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              The information on BettIntel is for informational purposes only. We provide no guarantees regarding:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Winnings or profits from gambling</li>
              <li>The accuracy of odds or payout percentages</li>
              <li>The availability of bonuses or promotions</li>
              <li>Casinos' continued operation or reliability</li>
            </ul>
            <p>
              Gambling involves risk of financial loss. You should never gamble with money you cannot 
              afford to lose.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Age Restrictions</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              Online gambling is for adults only. You must be at least 18 years old (or the legal 
              gambling age in your jurisdiction, which may be 21 years or higher) to use the services 
              advertised on this website.
            </p>
            <p>
              It is your responsibility to ensure that online gambling is legal in your jurisdiction 
              before registering with an online casino.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Information Accuracy</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We strive to keep all information on BettIntel accurate and up-to-date. However, 
              casinos may change their terms, bonuses, and services without notice.
            </p>
            <p>
              We recommend that you always verify information directly with the casino before 
              registering or making a deposit. We are not responsible for any discrepancies between 
              the information on our website and the casino's actual offerings.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">External Links</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              BettIntel contains links to third-party websites (online casinos). We have no control 
              over the content, privacy policies, or practices of these websites.
            </p>
            <p>
              By clicking on a link to an external website, you leave BettIntel and are subject to 
              the terms and conditions of that website. We recommend that you read the privacy policy 
              and terms of any website you visit.
            </p>
            <p>
              We are not responsible for any loss or damage arising from your use of third-party websites.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              To the extent permitted by law, BettIntel and its owners, employees, and partners 
              shall not be held liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Direct, indirect, incidental, or consequential damages arising from your use of the website</li>
              <li>Loss of money from gambling activities</li>
              <li>Technical problems or errors on the website</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Actions of third parties (casinos)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p>
              If you have questions about this disclaimer, please contact us at{' '}
              <a href="mailto:legal@bettintel.com" className="text-emerald-400 hover:text-emerald-300">
                legal@bettintel.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}