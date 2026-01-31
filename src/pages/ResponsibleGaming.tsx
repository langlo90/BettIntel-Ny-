import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Shield, Clock, Phone } from 'lucide-react';

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Responsible Gaming</h1>
          <p className="text-xl text-slate-300">
            Gambling should be fun and entertaining. Please play responsibly.
          </p>
        </div>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-emerald-400" />
              Our Commitment
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              At BettIntel, we are committed to promoting responsible gambling practices. We believe that 
              gambling should be an enjoyable form of entertainment, not a way to make money or solve financial problems.
            </p>
            <p>
              We encourage all players to gamble responsibly and within their means. If you feel that your 
              gambling is becoming a problem, please seek help immediately.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center gap-2">
              <Clock className="w-6 h-6 text-emerald-400" />
              Signs of Problem Gambling
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">Watch out for these warning signs:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Spending more money or time gambling than you can afford</li>
              <li>Chasing losses or trying to win back money you've lost</li>
              <li>Neglecting work, family, or other responsibilities</li>
              <li>Borrowing money to gamble</li>
              <li>Feeling anxious, depressed, or irritable when not gambling</li>
              <li>Lying to friends or family about your gambling activities</li>
              <li>Gambling to escape problems or relieve stress</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Tips for Responsible Gambling</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-3">
            <div>
              <h3 className="text-white font-semibold mb-1">Set Limits</h3>
              <p>Decide how much money and time you can afford to spend before you start playing.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Never Chase Losses</h3>
              <p>Accept losses as part of the game and never try to win back money you've lost.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Take Breaks</h3>
              <p>Regular breaks help you maintain perspective and avoid impulsive decisions.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Don't Gamble Under Influence</h3>
              <p>Avoid gambling when you're under the influence of alcohol or drugs.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Keep It Fun</h3>
              <p>Remember that gambling is entertainment, not a way to make money.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center gap-2">
              <Phone className="w-6 h-6 text-emerald-400" />
              Get Help
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              If you or someone you know has a gambling problem, help is available. Contact these organizations:
            </p>
            <div className="space-y-3">
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-1">Gamblers Anonymous</h3>
                <p className="text-sm">Website: <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">www.gamblersanonymous.org</a></p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-1">National Council on Problem Gambling</h3>
                <p className="text-sm">Hotline: 1-800-522-4700</p>
                <p className="text-sm">Website: <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">www.ncpgambling.org</a></p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-1">GamCare</h3>
                <p className="text-sm">Hotline: 0808 8020 133</p>
                <p className="text-sm">Website: <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">www.gamcare.org.uk</a></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}