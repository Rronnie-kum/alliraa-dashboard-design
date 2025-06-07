
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    image: string;
    rating: number;
    review: string;
    product: string;
    verified: boolean;
  };
  isHighlighted?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, isHighlighted = false }) => {
  return (
    <div
      className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-100 ${
        isHighlighted ? 'transform scale-105 ring-2 ring-amber-300/50' : ''
      }`}
    >
      {/* Customer Info */}
      <div className="flex items-center mb-6">
        <div className="relative">
          <img
            src={review.image}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
          />
          {review.verified && (
            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-gray-900">{review.name}</h4>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <div className="mb-6">
        <Quote className="h-8 w-8 text-amber-300 mb-4" />
        <p className="text-gray-700 leading-relaxed text-lg">
          {review.review}
        </p>
      </div>

      {/* Product Info */}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm text-amber-600 font-medium">
          Purchased: {review.product}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
