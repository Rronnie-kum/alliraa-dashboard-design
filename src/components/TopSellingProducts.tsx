
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
  },
  {
    id: 7,
    name: 'Embroidered Anarkali',
    price: 279,
    originalPrice: 349,
    discount: '20% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop&crop=center',
    rating: 4.8,
    reviews: 215
  },
  {
    id: 8,
    name: 'Casual Maxi Dress',
    price: 129,
    originalPrice: 179,
    discount: '28% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop&crop=center',
    rating: 4.5,
    reviews: 142
  },
  {
    id: 9,
    name: 'Formal Blazer Set',
    price: 389,
    originalPrice: 499,
    discount: '22% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?w=400&h=600&fit=crop&crop=center',
    rating: 4.7,
    reviews: 178
  },
  {
    id: 10,
    name: 'Bohemian Long Skirt',
    price: 169,
    originalPrice: 219,
    discount: '23% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&crop=center',
    rating: 4.6,
    reviews: 193
  },
  {
    id: 11,
    name: 'Vintage Crop Top',
    price: 89,
    originalPrice: 119,
    discount: '25% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=600&fit=crop&crop=center',
    rating: 4.4,
    reviews: 156
  },
  {
    id: 12,
    name: 'Designer Jumpsuit',
    price: 259,
    originalPrice: 329,
    discount: '21% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=600&fit=crop&crop=center',
    rating: 4.8,
    reviews: 208
  },
  {
    id: 13,
    name: 'Party Wear Gown',
    price: 449,
    originalPrice: 599,
    discount: '25% OFF',
    brand: 'ALLIRAA',
    image: 'https://images.unsplash.com/photo-1566479179817-34b8ac7c6cfe?w=400&h=600&fit=crop&crop=center',
    rating: 4.9,
    reviews: 267
  }
];

const TopSellingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topSellingProducts.length);
    }, 10000);

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

    if (absOffset > 1) {
      return {
        transform: 'translateX(0) scale(0) rotateY(0deg)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const
      };
    }

    const baseTranslateX = normalizedDiff * 350;
    const scale = isActive ? 1.1 : 0.85;
    const rotateY = isActive ? 0 : normalizedDiff * -25;
    const opacity = isActive ? 1 : 0.7;
    const zIndex = isActive ? 10 : 5;

    return {
      transform: `translateX(${baseTranslateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      pointerEvents: 'auto' as const
    };
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#B8653F' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full bg-gradient-to-r from-orange-300/30 via-transparent to-amber-300/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-200/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-800 to-red-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star className="h-4 w-4 mr-2" />
            Top Selling
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-200">Collection</span>
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Discover our most loved pieces that define contemporary fashion
          </p>
        </div>

        {/* 3D Coverflow Carousel */}
        <div 
          className="relative h-[650px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
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
                <div className="relative w-80 h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white/20">
                  {/* Product Image Container */}
                  <div className="relative h-80 overflow-hidden rounded-t-3xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {product.discount}
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      {product.rating}
                    </div>

                    {/* Brand Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="text-center text-white">
                        <div className="text-xl font-bold">{product.brand}</div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details Container */}
                  <div className="p-6 bg-white rounded-b-3xl">
                    <div className="space-y-3">
                      {/* Product Name */}
                      <h3 className="font-bold text-lg text-gray-900 leading-tight line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* Brand */}
                      <p className="text-sm text-gray-600 font-medium">{product.brand}</p>
                      
                      {/* Price Section */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      
                      {/* Rating and Reviews */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
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
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md border-2 border-orange-200/50 hover:bg-white hover:border-orange-300 transition-all duration-300 z-20 shadow-xl"
            variant="ghost"
          >
            <ChevronLeft className="h-7 w-7 text-orange-800" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md border-2 border-orange-200/50 hover:bg-white hover:border-orange-300 transition-all duration-300 z-20 shadow-xl"
            variant="ghost"
          >
            <ChevronRight className="h-7 w-7 text-orange-800" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {topSellingProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-orange-200 w-10 shadow-lg' 
                  : 'bg-orange-800/60 hover:bg-orange-700/80 w-3'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-orange-800 to-red-800 hover:from-orange-900 hover:to-red-900 text-white px-10 py-5 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all border-2 border-orange-700/30 font-semibold">
            <Tag className="h-6 w-6 mr-3" />
            Shop All Bestsellers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
