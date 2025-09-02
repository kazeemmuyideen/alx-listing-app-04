import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  comment: string;
  rating: number;
  user: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 py-3">
          <p className="text-gray-800">{review.comment}</p>
          <p className="text-sm text-gray-500">
            ⭐ {review.rating} — by {review.user}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
