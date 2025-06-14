
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Heart } from 'lucide-react';

interface KurtiHeroProps {
  onShopNow: () => void;
  onViewLookbook: () => void;
}

const KurtiHero: React.FC<KurtiHeroProps> = ({ onShopNow, onViewLookbook }) => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-200/50 to-orange-200/50 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-orange-200/50 to-yellow-200/50 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Beautiful Kurti Collection"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-amber-800 mb-6 shadow-lg">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            Handpicked Collection
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Exquisite <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Kurti
            </span><br />
            Collection
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            Discover our curated selection of traditional and contemporary kurtis, 
            crafted with premium fabrics and timeless designs for the modern woman
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={onShopNow}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              onClick={onViewLookbook}
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg rounded-full"
            >
              <Heart className="h-5 w-5 mr-2" />
              View Lookbook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KurtiHero;
