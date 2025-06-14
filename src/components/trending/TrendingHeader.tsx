
import React from 'react';
import { Flame } from 'lucide-react';

const TrendingHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3 shadow-lg animate-pulse">
        <Flame className="h-4 w-4 mr-2" />
        What's Hot Right Now
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Now</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Don't miss out on the styles everyone's talking about
      </p>
    </div>
  );
};

export default TrendingHeader;
