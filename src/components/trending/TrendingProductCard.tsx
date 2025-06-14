
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
    <div className="relative">
      <TrendingBadge badge={product.badge} />
      <ProductCard {...product} />
      
      {/* Floating Stats */}
      {product.reviews && (
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg">
          {product.reviews} reviews
        </div>
      )}
    </div>
  );
};

export default TrendingProductCard;
