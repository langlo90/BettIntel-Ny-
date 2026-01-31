import { useEffect, useState } from 'react';
import { createClient } from '@metagptx/web-sdk';
import CasinoCard from '@/components/CasinoCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useToast } from '@/hooks/use-toast';

const client = createClient();

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

export default function HomePage() {
  const [casinos, setCasinos] = useState<Casino[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadCasinos();
  }, []);

  const loadCasinos = async () => {
    try {
      setLoading(true);
      const response = await client.entities.casinos.query({
        query: {},
        sort: '-featured,-average_rating',
        limit: 50
      });
      setCasinos(response.data.items);
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: detail || 'Failed to load casinos',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url('https://mgx-backend-cdn.metadl.com/generate/images/857000/2026-01-22/6c23be85-6031-49f4-ae62-eabae595d935.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Find Your Perfect Casino
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover trusted online casinos with honest reviews and ratings from real players
          </p>
        </div>
      </section>

      {/* Casino Listings */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Top Rated Casinos</h2>
        
        {casinos.length === 0 ? (
          <div className="text-center text-slate-400 py-12">
            No casinos found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}