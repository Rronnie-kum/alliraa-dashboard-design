
import React from 'react';

const TrendingStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="text-2xl font-bold text-amber-600 mb-1">2.5M+</div>
        <div className="text-gray-600 text-sm">Social Media Mentions</div>
      </div>
      <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="text-2xl font-bold text-orange-600 mb-1">89%</div>
        <div className="text-gray-600 text-sm">Customer Satisfaction</div>
      </div>
      <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="text-2xl font-bold text-amber-700 mb-1">#1</div>
        <div className="text-gray-600 text-sm">Fashion Trend Setter</div>
      </div>
    </div>
  );
};

export default TrendingStats;
