
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg animate-pulse">
            FOR A LIMITED TIME
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block">40% Off</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Everything!
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-xl">
            Don't miss out on our biggest sale of the year. Premium fashion at unbeatable prices.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              SHOP NEW IN
            </Button>
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
            >
              SHOP ALL
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-lg animate-bounce"></div>
    </section>
  );
};

export default HeroSection;
