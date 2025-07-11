
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  badge,
  rating = 5,
  reviews
}) => {
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const inWishlist = isInWishlist(id);

  const handleProductClick = () => {
    navigate(`/product-details/${id}`);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const product = {
      id,
      name,
      price,
      originalPrice,
      image,
      badge,
      rating,
      reviews
    };

    if (inWishlist) {
      removeFromWishlist(id);
      toast({
        title: "Removed from Wishlist",
        description: `${name} has been removed from your wishlist`
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to Wishlist",
        description: `${name} has been added to your wishlist`
      });
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleProductClick}>
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-square bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {badge}
          </span>
        )}
        <Button 
          variant="ghost" 
          size="sm" 
          className={`absolute top-3 right-3 transition-all duration-200 ${
            inWishlist 
              ? 'bg-red-50 hover:bg-red-100 border border-red-200' 
              : 'bg-white/80 hover:bg-white'
          }`}
          onClick={handleWishlistClick}
        >
          <Heart className={`h-4 w-4 ${inWishlist ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
        </Button>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium text-gray-900 group-hover:text-amber-800 transition-colors">
          {name}
        </h3>
        
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-xs ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
              ★
            </span>
          ))}
          {reviews && <span className="text-xs text-gray-500 ml-1">({reviews})</span>}
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="font-bold text-gray-900">${price}.00</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">${originalPrice}.00</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
