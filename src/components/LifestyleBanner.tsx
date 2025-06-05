
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LifestyleBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen bg-gradient-to-br from-amber-100 to-orange-200 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Everyday<br />
            For Your Healthy
          </h1>
          <p className="text-xl mb-8 opacity-90">
            We'll choose the perfect gift box for your present and completely free.
          </p>
          <Button 
            onClick={() => navigate('/shop')}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg font-medium rounded-full"
          >
            EXPLORE NOW
          </Button>
        </div>
      </div>
      
      {/* Scrolling text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-white py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="mx-8 text-2xl font-bold">SHOP THE TREND! • CHIC STYLES AWAIT! • ELEVATE YOUR WARDROBE! • STYLE REDEFINED. • </span>
          <span className="mx-8 text-2xl font-bold">SHOP THE TREND! • CHIC STYLES AWAIT! • ELEVATE YOUR WARDROBE! • STYLE REDEFINED. • </span>
        </div>
      </div>
    </section>
  );
};

export default LifestyleBanner;
