
import React from 'react';
import { Quote } from 'lucide-react';
import ReviewCarousel from './ReviewCarousel';
import ReviewStats from './ReviewStats';

const CustomerReviews = () => {
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
        <ReviewCarousel />

        {/* Stats Section */}
        <ReviewStats />
      </div>
    </section>
  );
};

export default CustomerReviews;
