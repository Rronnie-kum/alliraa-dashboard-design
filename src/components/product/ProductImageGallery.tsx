
import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  originalPrice?: number;
  price: number;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productName,
  originalPrice,
  price
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden group">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white"
          onClick={() => setIsZoomed(true)}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        {originalPrice && (
          <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
            {discountPercentage}% OFF
          </Badge>
        )}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
              selectedImage === index ? 'border-amber-600 shadow-lg' : 'border-transparent hover:border-amber-300'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
