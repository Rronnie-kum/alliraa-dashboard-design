
import React from 'react';

const TrendingStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="text-3xl font-bold text-amber-600 mb-2">2.5M+</div>
        <div className="text-gray-600">Social Media Mentions</div>
      </div>
      <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="text-3xl font-bold text-orange-600 mb-2">89%</div>
        <div className="text-gray-600">Customer Satisfaction</div>
      </div>
      <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="text-3xl font-bold text-amber-700 mb-2">#1</div>
        <div className="text-gray-600">Fashion Trend Setter</div>
      </div>
    </div>
  );
};

export default TrendingStats;
