
import React from 'react';
import { Flame } from 'lucide-react';

const TrendingHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg animate-pulse">
        <Flame className="h-4 w-4 mr-2" />
        What's Hot Right Now
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Now</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Don't miss out on the styles everyone's talking about
      </p>
    </div>
  );
};

export default TrendingHeader;
