import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Discover Your Style with Our New Arrivals
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Explore our latest collections of premium fashion, designed to elevate your wardrobe and express your unique personality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg"
            onClick={() => navigate('/collections')}
          >
            Shop New In
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 text-lg"
            onClick={() => navigate('/collections')}
          >
            Shop All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
