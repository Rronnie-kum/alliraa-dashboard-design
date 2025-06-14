
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Flame, ArrowRight } from 'lucide-react';
import TrendingHeader from './trending/TrendingHeader';
import TrendingProductCard from './trending/TrendingProductCard';
import TrendingStats from './trending/TrendingStats';
import { trendingProducts } from './trending/trendingData';

const TrendingNowSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrendingHeader />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          {trendingProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="group transform transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <TrendingProductCard
                  product={product}
                  isHovered={false}
                  onHover={() => {}}
                />
              </div>
            </div>
          ))}
        </div>

        <TrendingStats />

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/shop?category=trending')}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Trending Items
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-10 animate-bounce"></div>
      </div>
    </section>
  );
};

export default TrendingNowSection;
