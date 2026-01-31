import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Introduction</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              At BettIntel, we take your privacy seriously. This privacy policy explains how we 
              collect, use, share, and protect your personal information when you visit our website.
            </p>
            <p>
              By using BettIntel, you consent to the collection and use of information in accordance 
              with this policy.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Personal Information</h3>
              <p className="mb-2">When you register or use our services, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name and email address</li>
                <li>Username and password</li>
                <li>Reviews and comments you submit</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Automatically Collected Information</h3>
              <p className="mb-2">We automatically collect certain information about your device, including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and click patterns</li>
                <li>Date and time of visit</li>
                <li>Referring website</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our services</li>
              <li>To process your reviews and comments</li>
              <li>To communicate with you about updates and offers</li>
              <li>To improve website functionality and user experience</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To protect against fraud and abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Cookies</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We use cookies and similar tracking technologies to track activity on our website and 
              store certain information.
            </p>
            <div>
              <h3 className="text-white font-semibold mb-2">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance cookies:</strong> Help us understand how visitors use the website</li>
                <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Targeting cookies:</strong> Used to deliver relevant content and advertisements</li>
              </ul>
            </div>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies may 
              affect the functionality of the website.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Information Sharing</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Affiliate partners:</strong> Casinos we partner with when you click on their links</li>
              <li><strong>Service providers:</strong> Third parties that help us operate the website (hosting, analytics, etc.)</li>
              <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
            </ul>
            <p>
              We never sell your personal information to third parties for their marketing purposes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Data Security</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              These measures include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>SSL encryption for data transmission</li>
              <li>Secure data storage</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
            </ul>
            <p>
              Note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Your Rights (GDPR)</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              If you are a resident of the EU/EEA, you have the following rights under GDPR:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Right to access:</strong> Request a copy of your personal information</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal information</li>
              <li><strong>Right to restriction:</strong> Request restriction of processing</li>
              <li><strong>Right to data portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to object:</strong> Object to processing of your data</li>
              <li><strong>Right to withdraw consent:</strong> At any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@bettintel.com" className="text-emerald-400 hover:text-emerald-300">
                privacy@bettintel.com
              </a>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We retain your personal information only as long as necessary for the purposes described 
              in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>
            <p>
              When we no longer need your personal information, we will either delete it or anonymize it.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              Our services are not directed to persons under 18 years of age. We do not knowingly 
              collect personal information from children.
            </p>
            <p>
              If you are a parent or guardian and are aware that your child has provided us with 
              personal information, please contact us so we can take necessary action.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes 
              by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>
            <p>
              We recommend that you review this privacy policy periodically for any changes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">
              If you have questions about this privacy policy, please contact us:
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