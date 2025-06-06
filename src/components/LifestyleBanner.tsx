import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LifestyleBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Elevate Your Everyday Style
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Discover curated collections that blend comfort, quality, and timeless design.
          From casual wear to sophisticated ensembles, find pieces that reflect your unique lifestyle.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          onClick={() => navigate('/collections')}
        >
          Explore Collections Now
        </Button>
      </div>
    </section>
  );
};

export default LifestyleBanner;

