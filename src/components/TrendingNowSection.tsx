
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Flame } from 'lucide-react';
import TrendingHeader from './trending/TrendingHeader';
import TrendingProductCard from './trending/TrendingProductCard';
import TrendingStats from './trending/TrendingStats';
import { trendingProducts } from './trending/trendingData';

const TrendingNowSection = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <TrendingHeader />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {trendingProducts.map((product) => (
            <TrendingProductCard
              key={product.id}
              product={product}
              isHovered={hoveredCard === product.id}
              onHover={setHoveredCard}
            />
          ))}
        </div>

        <TrendingStats />

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/shop?category=trending')}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Flame className="h-5 w-5 mr-2" />
            Shop All Trending Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNowSection;
