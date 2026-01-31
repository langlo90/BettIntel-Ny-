import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">1. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              By accessing and using BettIntel ("the Website"), you agree to be bound by these Terms 
              of Service. If you do not agree to these terms, you must not use the Website.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the 
              Website after such changes constitutes your acceptance of the new terms.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">2. Eligibility and Age Restrictions</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              You must be at least 18 years old (or the legal gambling age in your jurisdiction) to 
              use this Website. By using the Website, you confirm that you meet this age requirement.
            </p>
            <p>
              It is your responsibility to ensure that online gambling is legal in your jurisdiction 
              before using the services advertised on this Website.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">3. Use of the Website</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>You agree to use the Website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Infringe the rights of others</li>
              <li>Is illegal, threatening, abusive, harassing, or defamatory</li>
              <li>Contains viruses or other harmful code</li>
              <li>Is used to send spam or unwanted advertising</li>
              <li>Attempts to gain unauthorized access to the Website or related systems</li>
              <li>Disrupts or interferes with the Website's functionality</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">4. User Accounts and Reviews</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              When you create an account on the Website, you are responsible for maintaining the 
              confidentiality of your account information and for all activity that occurs under 
              your account.
            </p>
            <p>
              By submitting reviews or comments, you agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The content is based on your genuine experience</li>
              <li>You will not submit false or misleading reviews</li>
              <li>You will not use offensive or inappropriate language</li>
              <li>You grant us a non-exclusive, royalty-free license to use your content</li>
            </ul>
            <p>
              We reserve the right to remove or edit content that violates these terms.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">5. Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              All content on the Website, including but not limited to text, graphics, logos, images, 
              and software, is the property of BettIntel or its content suppliers and is protected by 
              copyright and other intellectual property rights.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to access and use 
              the Website for personal, non-commercial purposes. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reproduce, distribute, or modify the content without permission</li>
              <li>Use the content for commercial purposes</li>
              <li>Remove copyright notices or other proprietary markings</li>
              <li>Reverse-engineer or decompile software</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">6. Affiliate Links and Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              The Website contains affiliate links to third-party websites (online casinos). We earn 
              commission when you click on these links and register or make a purchase.
            </p>
            <p>
              We have no control over the content or practices of third-party websites and are not 
              responsible for their actions. Your use of third-party websites is at your own risk and 
              subject to their terms and conditions.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">7. Disclaimer of Warranties</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              The Website and all content are provided "as is" and "as available" without warranties 
              of any kind, either express or implied.
            </p>
            <p>
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The Website will be error-free or uninterrupted</li>
              <li>Errors will be corrected</li>
              <li>The Website or server is free from viruses or harmful code</li>
              <li>Results from using the Website will be accurate or reliable</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">8. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              To the extent permitted by law, BettIntel and its owners, directors, employees, and 
              partners shall not be held liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Direct, indirect, incidental, special, or consequential damages</li>
              <li>Loss of profit, revenue, data, or business</li>
              <li>Damages arising from your use of or inability to use the Website</li>
              <li>Damages arising from gambling activities</li>
              <li>Actions or omissions of third parties</li>
            </ul>
            <p>
              Some jurisdictions do not allow limitation of liability, so these limitations may not 
              apply to you.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">9. Indemnification</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              You agree to defend, indemnify, and hold harmless BettIntel and its affiliates, 
              officers, directors, employees, and agents from and against all claims, damages, 
              obligations, losses, liabilities, costs or debt, and expenses (including attorney fees) 
              arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your use of the Website</li>
              <li>Your breach of these terms</li>
              <li>Your violation of others' rights</li>
              <li>Content you submit to the Website</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">10. Termination</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We may suspend or terminate your access to the Website immediately, without notice or 
              liability, for any reason, including but not limited to breach of these terms.
            </p>
            <p>
              Upon termination, your right to use the Website will cease immediately. All provisions 
              of these terms that by their nature should survive termination shall survive, including 
              ownership, warranty disclaimers, and limitations of liability.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">11. Governing Law and Jurisdiction</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              These terms shall be governed by and construed in accordance with the laws of Norway, 
              without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising from or in connection with these terms shall be resolved in the 
              courts of Norway.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">12. Miscellaneous Provisions</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              <strong>Entire Agreement:</strong> These terms constitute the entire agreement between 
              you and BettIntel regarding your use of the Website.
            </p>
            <p>
              <strong>Severability:</strong> If any provision of these terms is deemed invalid or 
              unenforceable, the remaining provisions shall continue to be valid.
            </p>
            <p>
              <strong>Waiver:</strong> Our failure to enforce any right or provision in these terms 
              shall not be deemed a waiver of such rights.
            </p>
            <p>
              <strong>Assignment:</strong> You may not assign or transfer these terms without our 
              written consent. We may assign our rights and obligations under these terms without 
              limitation.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:legal@bettintel.com" className="text-emerald-400 hover:text-emerald-300">legal@bettintel.com</a></li>
              <li>Website: <a href="https://bettintel.com" className="text-emerald-400 hover:text-emerald-300">https://bettintel.com</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}