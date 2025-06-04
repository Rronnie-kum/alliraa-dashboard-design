
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Fashion Brand 1',
    image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?w=400&h=600&fit=crop&crop=center',
    price: 299,
    originalPrice: 399,
    discount: '25% OFF'
  },
  {
    id: 2,
    name: 'Fashion Brand 2',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=600&fit=crop&crop=center',
    price: 149,
    originalPrice: 199,
    discount: '25% OFF'
  },
  {
    id: 3,
    name: 'Fashion Brand 3',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&crop=center',
    price: 349,
    originalPrice: 449,
    discount: '22% OFF'
  },
  {
    id: 4,
    name: 'Fashion Brand 4',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=600&fit=crop&crop=center',
    price: 499,
    originalPrice: 699,
    discount: '29% OFF'
  },
  {
    id: 5,
    name: 'Fashion Brand 5',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=center',
    price: 199,
    originalPrice: 249,
    discount: '20% OFF'
  }
];

const SlidingShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      cards.push({ ...products[index], position: i });
    }
    return cards;
  };

  const getCardStyle = (position: number) => {
    const isCenter = position === 0;
    const absPosition = Math.abs(position);
    
    if (absPosition > 2) {
      return {
        transform: 'translateX(0) scale(0)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const
      };
    }

    const translateX = position * 280;
    const scale = isCenter ? 1 : 0.8 - (absPosition - 1) * 0.1;
    const opacity = isCenter ? 1 : 0.6 - (absPosition - 1) * 0.2;
    const zIndex = isCenter ? 10 : 5 - absPosition;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: 'auto' as const
    };
  };

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star className="h-4 w-4 mr-2" />
            Top Selling
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Top Selling Products
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our most loved pieces that define contemporary fashion
          </p>
        </div>

        {/* Sliding Carousel */}
        <div 
          className="relative h-[500px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleCards().map((product) => (
              <div
                key={`${product.id}-${product.position}`}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={getCardStyle(product.position)}
                onClick={() => {
                  if (product.position !== 0) {
                    const newIndex = (currentIndex + product.position + products.length) % products.length;
                    setCurrentIndex(newIndex);
                  }
                }}
              >
                <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl bg-white">
                  {/* Product Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {product.discount}
                      </div>
                    )}

                    {/* Brand Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 z-20"
            variant="ghost"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 z-20"
            variant="ghost"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingShow;
