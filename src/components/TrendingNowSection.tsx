
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TrendingHeader from './trending/TrendingHeader';
import TrendingProductCard from './trending/TrendingProductCard';
import TrendingStats from './trending/TrendingStats';
import { trendingProducts } from './trending/trendingData';

const TrendingNowSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrendingHeader />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          {trendingProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="group transform transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
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
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Trending Items
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNowSection;
