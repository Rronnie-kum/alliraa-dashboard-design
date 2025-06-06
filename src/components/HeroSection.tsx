
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="text-white max-w-2xl">
          <p className="text-sm font-medium mb-4 tracking-wider">FOR A LIMITED TIME</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            40% Off Everything!
          </h1>
          <div className="space-x-4">
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
            >
              SHOP NEW IN
            </Button>
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-white text-amber-900 hover:bg-amber-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
            >
              SHOP ALL
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
