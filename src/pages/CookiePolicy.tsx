import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Cookie className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">What Are Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              Cookies are small text files that are stored on your device when you visit a website. 
              They are used to make websites more efficient and to provide information to the owners 
              of the website.
            </p>
            <p>
              BettIntel uses cookies to improve your experience on our website, analyze site traffic, 
              and understand where our visitors are coming from.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-2">1. Essential Cookies</h3>
              <p className="mb-2">
                These cookies are essential for the website to function properly. They enable you to 
                navigate the website and use its features.
              </p>
              <p className="text-sm text-slate-400">
                Examples: Authentication, security, cookie preferences
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">2. Performance Cookies</h3>
              <p className="mb-2">
                These cookies collect information about how visitors use the website, such as which 
                pages are visited most often. This information is used to improve the website's 
                performance.
              </p>
              <p className="text-sm text-slate-400">
                Examples: Google Analytics, visitor statistics, error reporting
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">3. Functional Cookies</h3>
              <p className="mb-2">
                These cookies allow the website to remember choices you make (such as username, 
                language, or region) and provide enhanced, more personalized features.
              </p>
              <p className="text-sm text-slate-400">
                Examples: Language preferences, user settings, login status
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">4. Targeting Cookies</h3>
              <p className="mb-2">
                These cookies are used to deliver advertisements that are more relevant to you and 
                your interests. They are also used to limit the number of times you see an 
                advertisement and to measure the effectiveness of advertising campaigns.
              </p>
              <p className="text-sm text-slate-400">
                Examples: Affiliate tracking, ad preferences, conversion tracking
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Specific Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-2 text-white">Name</th>
                    <th className="text-left py-3 px-2 text-white">Type</th>
                    <th className="text-left py-3 px-2 text-white">Purpose</th>
                    <th className="text-left py-3 px-2 text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2">cookieConsent</td>
                    <td className="py-3 px-2">Essential</td>
                    <td className="py-3 px-2">Stores your cookie preference</td>
                    <td className="py-3 px-2">1 year</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2">auth_token</td>
                    <td className="py-3 px-2">Essential</td>
                    <td className="py-3 px-2">Authentication and login status</td>
                    <td className="py-3 px-2">Session</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2">_ga</td>
                    <td className="py-3 px-2">Performance</td>
                    <td className="py-3 px-2">Google Analytics - tracks visitors</td>
                    <td className="py-3 px-2">2 years</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2">_gid</td>
                    <td className="py-3 px-2">Performance</td>
                    <td className="py-3 px-2">Google Analytics - distinguishes users</td>
                    <td className="py-3 px-2">24 hours</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2">affiliate_ref</td>
                    <td className="py-3 px-2">Targeting</td>
                    <td className="py-3 px-2">Tracks affiliate referrals</td>
                    <td className="py-3 px-2">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              In addition to our own cookies, we also use cookies from third parties to report usage 
              statistics of the website and deliver advertisements on and through the website.
            </p>
            <div>
              <h3 className="text-white font-semibold mb-2">Third-Party Services We Use:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Affiliate networks:</strong> To track referrals and commissions</li>
                <li><strong>Social media:</strong> For sharing buttons and social features</li>
              </ul>
            </div>
            <p>
              These third parties have their own privacy policies, and we have no control over their 
              cookies.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">How to Manage Cookies</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              You have the right to choose whether to accept cookies or not. When you visit our 
              website for the first time, you will see a cookie banner where you can accept or 
              decline cookies.
            </p>
            
            <div>
              <h3 className="text-white font-semibold mb-2">Browser Settings</h3>
              <p className="mb-2">
                Most browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Block all cookies</li>
                <li>Allow only first-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Have a list of allowed and blocked websites</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Browser-Specific Instructions:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
            </div>

            <p className="text-amber-400 text-sm">
              <strong>Note:</strong> If you block cookies, some parts of the website may not function 
              properly.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              Under the EU's General Data Protection Regulation (GDPR) and ePrivacy Directive, you 
              have the following rights regarding cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right to be informed about cookies being used</li>
              <li>Right to accept or decline non-essential cookies</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to access data collected through cookies</li>
              <li>Right to request deletion of data</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We may update our Cookie Policy from time to time to reflect changes in technology, 
              legislation, or our business practices.
            </p>
            <p>
              We will notify you of any material changes by posting the new policy on this page and 
              updating the "Last updated" date.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:privacy@bettintel.com" className="text-emerald-400 hover:text-emerald-300">privacy@bettintel.com</a></li>
              <li>Website: <a href="https://bettintel.com" className="text-emerald-400 hover:text-emerald-300">https://bettintel.com</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}