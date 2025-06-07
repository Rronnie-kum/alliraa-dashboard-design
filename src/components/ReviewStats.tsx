
import React from 'react';

const ReviewStats = () => {
  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '4.9', label: 'Average Rating' },
    { value: '100+', label: 'Products' },
    { value: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-amber-200">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewStats;
