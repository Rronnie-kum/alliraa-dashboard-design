
import React from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

interface LikedProductsStatsProps {
  wishlistItems: Product[];
}

const LikedProductsStats: React.FC<LikedProductsStatsProps> = ({ wishlistItems }) => {
  const totalValue = wishlistItems.reduce((total, product) => total + (product.originalPrice || product.price), 0);
  const potentialSavings = wishlistItems.reduce((total, product) => total + (product.originalPrice ? product.originalPrice - product.price : 0), 0);

  return (
    <section className="py-8 bg-white border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
            <div className="text-3xl font-bold text-amber-700 mb-2">{wishlistItems.length}</div>
            <div className="text-amber-600 font-medium">Liked Items</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="text-3xl font-bold text-green-700 mb-2">${totalValue}</div>
            <div className="text-green-600 font-medium">Total Value</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
            <div className="text-3xl font-bold text-orange-700 mb-2">${potentialSavings}</div>
            <div className="text-orange-600 font-medium">Potential Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LikedProductsStats;
