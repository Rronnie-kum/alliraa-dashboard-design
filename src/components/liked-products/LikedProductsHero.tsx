
import React from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LikedProductsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-amber-200 to-orange-200"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <Link to="/kurti">
            <Button variant="outline" className="mr-4 border-amber-300 text-amber-800 hover:bg-amber-100">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Kurtis
            </Button>
          </Link>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-amber-800 mb-6 shadow-sm border border-amber-200">
            <Heart className="h-5 w-5 mr-2 text-amber-600 fill-amber-600" />
            Your Favorites Collection
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">
            Liked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Products</span>
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            All your favorite kurtis in one place. Shop your wishlisted items and never miss out on the styles you love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LikedProductsHero;
