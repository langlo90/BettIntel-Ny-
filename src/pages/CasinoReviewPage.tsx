import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { createClient } from '@metagptx/web-sdk';
import { Star, ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
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
}

interface Review {
  id: number;
  casino_id: number;
  user_id: string;
  rating: number;
  comment: string;
  username: string;
  created_at: string;
}

export default function CasinoReviewPage() {
  const { id } = useParams<{ id: string }>();
  const [casino, setCasino] = useState<Casino | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState<number | null>(null);
  const [deleting, setDeleting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    loadCasinoAndReviews();
  }, [id]);

  const checkAuth = async () => {
    try {
      const userData = await client.auth.me();
      setUser(userData.data);
    } catch (error) {
      setUser(null);
    }
  };

  const loadCasinoAndReviews = async () => {
    try {
      setLoading(true);
      const [casinoResponse, reviewsResponse] = await Promise.all([
        client.entities.casinos.get({ id: id! }),
        client.entities.reviews.queryAll({
          query: { casino_id: parseInt(id!) },
          sort: '-created_at',
          limit: 100
        })
      ]);
      
      setCasino(casinoResponse.data);
      setReviews(reviewsResponse.data.items);
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: detail || 'Failed to load casino details',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async () => {
    if (!user) {
      toast({
        title: 'Login Required',
        description: 'Please login to submit a review',
        variant: 'destructive'
      });
      return;
    }

    if (rating === 0) {
      toast({
        title: 'Rating Required',
        description: 'Please select a star rating',
        variant: 'destructive'
      });
      return;
    }

    try {
      setSubmitting(true);
      await client.entities.reviews.create({
        data: {
          casino_id: parseInt(id!),
          rating,
          comment: comment.trim(),
          username: user.email?.split('@')[0] || 'Anonymous'
        }
      });

      toast({
        title: 'Success',
        description: 'Your review has been submitted'
      });

      setRating(0);
      setComment('');
      loadCasinoAndReviews();
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: detail || 'Failed to submit review',
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteClick = (reviewId: number) => {
    setReviewToDelete(reviewId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!reviewToDelete) return;

    try {
      setDeleting(true);
      await client.entities.reviews.delete({ id: reviewToDelete });

      toast({
        title: 'Success',
        description: 'Review deleted successfully'
      });

      setDeleteDialogOpen(false);
      setReviewToDelete(null);
      loadCasinoAndReviews();
    } catch (error: any) {
      const detail = error?.data?.detail || error?.response?.data?.detail || error.message;
      toast({
        title: 'Error',
        description: detail || 'Failed to delete review',
        variant: 'destructive'
      });
    } finally {
      setDeleting(false);
    }
  };

  const canDeleteReview = (review: Review) => {
    return user && review.user_id === user.id;
  };

  const renderStars = (currentRating: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 ${interactive ? 'cursor-pointer' : ''} ${
          i < currentRating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-slate-600 text-slate-600'
        }`}
        onClick={() => interactive && setRating(i + 1)}
      />
    ));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!casino) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-slate-400">Casino not found</p>
        <Link to="/">
          <Button className="mt-4">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-slate-300 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Casinos
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-0">
                <img
                  src={casino.image_url}
                  alt={casino.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-white mb-3">{casino.name}</h1>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(Math.floor(casino.average_rating))}
                    <span className="text-slate-400 text-sm ml-2">
                      {casino.average_rating.toFixed(1)} ({casino.review_count} reviews)
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-6">{casino.description}</p>
                  
                  <Button
                    onClick={() => window.open(casino.casino_url, '_blank')}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    Visit Casino
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Write a Review</CardTitle>
              </CardHeader>
              <CardContent>
                {!user ? (
                  <div className="text-center py-8">
                    <p className="text-slate-400 mb-4">Please login to write a review</p>
                    <Button onClick={() => client.auth.toLogin()}>
                      Login
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-300 mb-2">Your Rating</label>
                      <div className="flex gap-1">
                        {renderStars(rating, true)}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-slate-300 mb-2">Your Review</label>
                      <Textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Share your experience with this casino..."
                        className="bg-slate-700 border-slate-600 text-white min-h-32"
                      />
                      <p className="text-slate-400 text-xs mt-2">
                        Note: Names and phone numbers will be automatically censored for privacy
                      </p>
                    </div>
                    
                    <Button
                      onClick={handleSubmitReview}
                      disabled={submitting || rating === 0}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      {submitting ? 'Submitting...' : 'Submit Review'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">User Reviews ({reviews.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {reviews.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">No reviews yet. Be the first to review!</p>
                ) : (
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-slate-700 pb-4 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-white font-semibold">{review.username}</span>
                            <span className="text-slate-400 text-sm">
                              {new Date(review.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          {canDeleteReview(review) && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteClick(review.id)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-950"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        <div className="flex gap-1 mb-2">
                          {renderStars(review.rating)}
                        </div>
                        {review.comment && (
                          <p className="text-slate-300">{review.comment}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-slate-800 border-slate-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Delete Review</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              Are you sure you want to delete this review? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-slate-700 text-white hover:bg-slate-600">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={deleting}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {deleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}