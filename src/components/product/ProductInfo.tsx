
import React from 'react';
import { Star, Share2, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProductInfoProps {
  brand: string;
  name: string;
  sku: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  stockCount: number;
  onShare: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  brand,
  name,
  sku,
  rating,
  reviews,
  price,
  originalPrice,
  inStock,
  stockCount,
  onShare
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <Badge variant="outline" className="text-amber-800 border-amber-800">
            {brand}
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {name}
          </h1>
          <p className="text-gray-600">SKU: {sku}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onShare}
          className="hover:bg-amber-50 text-amber-800"
        >
          <Share2 className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="text-lg font-semibold ml-2">{rating}</span>
        </div>
        <span className="text-gray-600">({reviews} reviews)</span>
        <Button variant="link" className="text-amber-800 p-0 h-auto">
          <MessageCircle className="h-4 w-4 mr-1" />
          Write a review
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        {originalPrice && (
          <>
            <span className="text-2xl text-gray-500 line-through">${originalPrice}</span>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              Save ${originalPrice - price}
            </Badge>
          </>
        )}
      </div>

      <div className="flex items-center gap-2">
        {inStock ? (
          <>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-700 font-medium">In Stock ({stockCount} available)</span>
          </>
        ) : (
          <>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-red-700 font-medium">Out of Stock</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
