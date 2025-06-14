
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="text-white max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg animate-pulse">
            FOR A LIMITED TIME
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block">40% Off</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Everything!
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Don't miss out on our biggest sale of the year. Premium fashion at unbeatable prices.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              SHOP NEW IN
            </Button>
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-medium rounded-full transition-all duration-300"
            >
              SHOP ALL
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-lg animate-bounce"></div>
    </section>
  );
};

export default HeroSection;
