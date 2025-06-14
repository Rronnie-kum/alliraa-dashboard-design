
import React from 'react';
import ProductCard from '../ProductCard';
import TrendingBadge from './TrendingBadge';

interface TrendingProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
}

interface TrendingProductCardProps {
  product: TrendingProduct;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const TrendingProductCard: React.FC<TrendingProductCardProps> = ({
  product,
  isHovered,
  onHover
}) => {
  return (
    <div 
      className="group relative"
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`transform transition-all duration-500 ${
        isHovered 
          ? 'scale-105 rotate-1' 
          : 'scale-100 rotate-0'
      }`}>
        <div className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 relative overflow-hidden">
          <TrendingBadge badge={product.badge} />
          
          {/* Glow Effect */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-3xl"></div>
          )}
          
          <ProductCard {...product} />
          
          {/* Floating Stats */}
          {product.reviews && (
            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg">
              {product.reviews} reviews
            </div>
          )}
        </div>
      </div>

      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
        isHovered 
          ? 'bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 p-0.5' 
          : 'bg-transparent'
      }`}>
        {isHovered && (
          <div className="w-full h-full bg-white rounded-3xl"></div>
        )}
      </div>
    </div>
  );
};

export default TrendingProductCard;
