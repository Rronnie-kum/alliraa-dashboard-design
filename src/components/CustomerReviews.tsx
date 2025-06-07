
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const CustomerReviews = () => {
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
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-800 to-orange-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Quote className="h-4 w-4 mr-2" />
            Customer Reviews
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">They Said It,</span>
            <br />
            Not Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from our amazing customers who love their fashion choices
          </p>
        </div>

        {/* Reviews Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-100 ${
                  index === 1 ? 'transform scale-105 ring-2 ring-amber-300/50' : ''
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-amber-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
