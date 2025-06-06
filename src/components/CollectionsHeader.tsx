
import React from 'react';

interface CollectionsHeaderProps {
  filteredProductsCount: number;
}

const CollectionsHeader: React.FC<CollectionsHeaderProps> = ({ filteredProductsCount }) => {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Collections</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our carefully curated collections of premium fashion pieces, 
          each selected for quality, style, and timeless appeal
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
            {filteredProductsCount} Items Found
          </span>
          <span className="bg-amber-100 px-4 py-2 rounded-full text-sm font-medium text-amber-800">
            Free Shipping Over $100
          </span>
        </div>
      </div>
    </section>
  );
};

export default CollectionsHeader;
