
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Fire, Star, Heart } from 'lucide-react';

const trendingProducts = [
  {
    id: '201',
    name: 'Oversized Blazer',
    price: 240,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    reviews: 89,
    badge: 'TRENDING'
  },
  {
    id: '202',
    name: 'Silk Camisole Top',
    price: 120,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    reviews: 156,
    badge: 'HOT'
  },
  {
    id: '203',
    name: 'Wide Leg Trousers',
    price: 160,
    originalPrice: 200,
    image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    reviews: 203,
    badge: 'VIRAL'
  },
  {
    id: '204',
    name: 'Cropped Cardigan',
    price: 95,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    reviews: 78,
    badge: 'TRENDING'
  },
  {
    id: '205',
    name: 'Statement Earrings',
    price: 45,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    reviews: 134,
    badge: 'VIRAL'
  },
  {
    id: '206',
    name: 'Platform Sandals',
    price: 180,
    image: 'https://images.unsplash.com/photo-1566479179817-34b8ac7c6cfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    reviews: 92,
    badge: 'HOT'
  }
];

const TrendingNowSection = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'TRENDING':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'HOT':
        return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'VIRAL':
        return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'TRENDING':
        return <TrendingUp className="h-3 w-3" />;
      case 'HOT':
        return <Fire className="h-3 w-3" />;
      case 'VIRAL':
        return <Star className="h-3 w-3" />;
      default:
        return <Heart className="h-3 w-3" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg animate-pulse">
            <Fire className="h-4 w-4 mr-2" />
            What's Hot Right Now
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Now</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss out on the styles everyone's talking about
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {trendingProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`transform transition-all duration-500 ${
                hoveredCard === product.id 
                  ? 'scale-105 rotate-1' 
                  : 'scale-100 rotate-0'
              }`}>
                <div className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 relative overflow-hidden">
                  {/* Trending Badge */}
                  <div className={`absolute top-2 left-2 ${getBadgeStyle(product.badge)} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10`}>
                    {getBadgeIcon(product.badge)}
                    {product.badge}
                  </div>
                  
                  {/* Glow Effect */}
                  {hoveredCard === product.id && (
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
                hoveredCard === product.id 
                  ? 'bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 p-0.5' 
                  : 'bg-transparent'
              }`}>
                {hoveredCard === product.id && (
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">2.5M+</div>
            <div className="text-gray-600">Social Media Mentions</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">89%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">#1</div>
            <div className="text-gray-600">Fashion Trend Setter</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/shop?category=trending')}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Fire className="h-5 w-5 mr-2" />
            Shop All Trending Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNowSection;
