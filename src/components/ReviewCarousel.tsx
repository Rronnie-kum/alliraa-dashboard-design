
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReviewCard from './ReviewCard';

const customerReviews = [
  {
    id: 1,
    name: 'Simran Kaur',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=center',
    rating: 5,
    review: 'Got the most stylish co-ord from UptoFed and now wearing it and it looked perfect! Great fit, amazing quality, and definitely worth it!',
    product: 'Stylish Co-ord Set',
    verified: true
  },
  {
    id: 2,
    name: 'Tanvi',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=center',
    rating: 5,
    review: 'Got my dress just in time for my vacation! ✈️ Loved the fit, super stylish, and got so many compliments! ✨',
    product: 'Vacation Dress',
    verified: true
  },
  {
    id: 3,
    name: 'Kashish Rawat',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=center',
    rating: 5,
    review: 'I wore the Red Corset dress on my vacation to Bali and felt so comfy and so cute! So many people asked me where I got it! 🌺',
    product: 'Red Corset Dress',
    verified: true
  },
  {
    id: 4,
    name: 'Love Esha',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=center',
    rating: 5,
    review: 'Good quality outfits, well tailored, reasonably priced and very efficiently delivered! 💕',
    product: 'Designer Collection',
    verified: true
  },
  {
    id: 5,
    name: 'Aishwarya Singh',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=center',
    rating: 5,
    review: 'Love this heart shirt! 💝 The embroidered heart makes it super unique and the fabric is so soft. Plus, it arrived right on time! Perfect! ✨',
    product: 'Embroidered Heart Shirt',
    verified: true
  },
  {
    id: 6,
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=center',
    rating: 5,
    review: 'Absolutely stunning collection! The fabric quality exceeded my expectations and the fit is perfect. Will definitely order again! 🌟',
    product: 'Premium Kurti Set',
    verified: true
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + customerReviews.length) % customerReviews.length);
  };

  const getVisibleReviews = () => {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % customerReviews.length;
      reviews.push(customerReviews[index]);
    }
    return reviews;
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {getVisibleReviews().map((review, index) => (
          <ReviewCard
            key={`${review.id}-${currentIndex}-${index}`}
            review={review}
            isHighlighted={index === 1}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center space-x-4">
        <Button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white border-2 border-amber-300 text-amber-600 hover:bg-amber-50 shadow-lg"
          variant="ghost"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Dots */}
        <div className="flex space-x-2">
          {customerReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-amber-500 w-8' 
                  : 'bg-amber-200 hover:bg-amber-300 w-3'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white border-2 border-amber-300 text-amber-600 hover:bg-amber-50 shadow-lg"
          variant="ghost"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
