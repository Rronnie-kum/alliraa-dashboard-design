
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectionHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-amber-100"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-amber-800 mb-6">
          <Star className="h-4 w-4 mr-2 text-yellow-500" />
          Premium Collections
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Collections</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Explore our handpicked collections of premium fashion items, 
          carefully curated for style, quality, and modern elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Browse Collections
          </Button>
          <Link to="/about">
            <Button 
              variant="outline" 
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg rounded-full"
            >
              View Lookbook
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionHero;
