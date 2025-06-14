
import React from 'react';
import { Heart, ShoppingBag, Gift, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductActionsProps {
  inStock: boolean;
  isWishlisted: boolean;
  onAddToCart: () => void;
  onBuyNow: () => void;
  onAddToWishlist: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  inStock,
  isWishlisted,
  onAddToCart,
  onBuyNow,
  onAddToWishlist
}) => {
  return (
    <div className="space-y-4 pt-6">
      <div className="flex gap-4">
        <Button 
          onClick={onBuyNow}
          className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          disabled={!inStock}
        >
          <ShoppingBag className="h-5 w-5 mr-2" />
          Buy Now
        </Button>
        <Button 
          variant="outline"
          onClick={onAddToCart}
          className="flex-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-50 py-4 text-lg font-semibold rounded-xl"
          disabled={!inStock}
        >
          Add to Cart
        </Button>
      </div>
      
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={onAddToWishlist}
          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
            isWishlisted 
              ? 'bg-pink-50 border-pink-300 text-pink-700 hover:bg-pink-100' 
              : 'hover:bg-gray-50'
          }`}
        >
          <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
          {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
        </Button>
        <Button 
          variant="outline"
          className="flex-1 py-3 rounded-xl font-medium hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700"
        >
          <Gift className="h-4 w-4 mr-2" />
          Gift This Item
        </Button>
      </div>

      {/* Service Info */}
      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
        <div className="text-center space-y-2">
          <Truck className="h-8 w-8 text-amber-600 mx-auto" />
          <p className="text-sm font-semibold">Free Shipping</p>
          <p className="text-xs text-gray-600">On orders over $100</p>
        </div>
        <div className="text-center space-y-2">
          <RotateCcw className="h-8 w-8 text-amber-600 mx-auto" />
          <p className="text-sm font-semibold">Easy Returns</p>
          <p className="text-xs text-gray-600">30-day return policy</p>
        </div>
        <div className="text-center space-y-2">
          <Shield className="h-8 w-8 text-amber-600 mx-auto" />
          <p className="text-sm font-semibold">Secure Payment</p>
          <p className="text-xs text-gray-600">SSL protected</p>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
