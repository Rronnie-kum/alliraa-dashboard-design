import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topSellingProducts = [
  {
    id: 1,
    name: 'Designer Silk Saree',
    price: 299,
    originalPrice: 399,
    discount: '25% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?w=400&h=600&fit=crop&crop=center',
    rating: 4.9,
    reviews: 234
  },
  {
    id: 2,
    name: 'Premium Cotton Kurti',
    price: 149,
    originalPrice: 199,
    discount: '25% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=600&fit=crop&crop=center',
    rating: 4.8,
    reviews: 189
  },
  {
    id: 3,
    name: 'Elegant Evening Dress',
    price: 349,
    originalPrice: 449,
    discount: '22% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&crop=center',
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: 'Traditional Lehenga',
    price: 499,
    originalPrice: 699,
    discount: '29% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=600&fit=crop&crop=center',
    rating: 4.7,
    reviews: 298
  },
  {
    id: 5,
    name: 'Fusion Palazzo Set',
    price: 199,
    originalPrice: 249,
    discount: '20% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=center',
    rating: 4.6,
    reviews: 167
  },
  {
    id: 6,
    name: 'Bridal Collection Gown',
    price: 599,
    originalPrice: 799,
    discount: '25% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1566479179817-34b8ac7c6cfe?w=400&h=600&fit=crop&crop=center',
    rating: 4.9,
    reviews: 134
  }
];

const TopSellingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topSellingProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % topSellingProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + topSellingProducts.length) % topSellingProducts.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalItems = topSellingProducts.length;
    
    // Handle wrap-around for infinite loop
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalItems / 2) {
      normalizedDiff = diff > 0 ? diff - totalItems : diff + totalItems;
    }

    const isActive = normalizedDiff === 0;
    const absOffset = Math.abs(normalizedDiff);

    if (absOffset > 2) {
      return {
        transform: 'translateX(0) scale(0) rotateY(0deg)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const
      };
    }

    const baseTranslateX = normalizedDiff * 280;
    const scale = isActive ? 1.2 : Math.max(0.7, 1 - absOffset * 0.15);
    const rotateY = isActive ? 0 : normalizedDiff * -25;
    const opacity = isActive ? 1 : Math.max(0.4, 1 - absOffset * 0.3);
    const zIndex = isActive ? 10 : Math.max(1, 5 - absOffset);

    return {
      transform: `translateX(${baseTranslateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      pointerEvents: 'auto' as const
    };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-amber-200/30 via-transparent to-rose-200/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            Top Selling
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved pieces that define contemporary fashion
          </p>
        </div>

        {/* 3D Coverflow Carousel */}
        <div 
          className="relative h-[600px] flex items-center justify-center"
          style={{ perspective: '1000px' }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {topSellingProducts.map((product, index) => (
              <div
                key={product.id}
                className="absolute transition-all duration-700 ease-out cursor-pointer group"
                style={{
                  ...getCardStyle(index),
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl bg-white">
                  {/* Product Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.discount}
                    </div>

                    {/* Brand Logo Overlay - Shows on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold mb-2">{product.brand}</div>
                        <div className="text-lg">{product.discount}</div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows with updated styling */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 hover:bg-white/90 transition-all duration-300 z-20 shadow-lg"
            variant="ghost"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 hover:bg-white/90 transition-all duration-300 z-20 shadow-lg"
            variant="ghost"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {topSellingProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-amber-600 w-8' 
                  : 'bg-gray-400/50 hover:bg-gray-500/70'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
            <Tag className="h-5 w-5 mr-2" />
            Shop All Bestsellers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
