import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Casino {
  id: number;
  name: string;
  description: string;
  image_url: string;
  casino_url: string;
  average_rating: number;
  review_count: number;
  featured: boolean;
}

interface CasinoCardProps {
  casino: Casino;
}

export default function CasinoCard({ casino }: CasinoCardProps) {
  const handleVisitCasino = () => {
    window.open(casino.casino_url, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-slate-600 text-slate-600'
        }`}
      />
    ));
  };

  return (
    <Card className="bg-slate-800 border-slate-700 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <a 
          href={casino.casino_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          <img
            src={casino.image_url}
            alt={casino.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </a>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{casino.name}</h3>
          
          <div className="flex items-center gap-1 mb-3">
            {renderStars(casino.average_rating)}
            <span className="text-slate-400 text-sm ml-2">
              ({casino.review_count} reviews)
            </span>
          </div>
          
          <p className="text-slate-300 text-sm mb-4 line-clamp-2">
            {casino.description}
          </p>
          
          <div className="flex gap-2">
            <Button
              onClick={handleVisitCasino}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Visit Casino
            </Button>
            <Link to={`/casino/${casino.id}`} className="flex-1">
              <Button
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                Reviews
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}