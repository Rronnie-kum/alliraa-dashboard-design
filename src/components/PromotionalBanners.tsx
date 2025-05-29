
import React from 'react';
import { Button } from '@/components/ui/button';

const promotions = [
  {
    title: 'High—Top Design',
    subtitle: 'SAVE 30%—50% CLOTHING',
    description: 'In-store! Limited time offer.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgColor: 'from-cyan-400 to-cyan-600'
  },
  {
    title: 'Colour Spotlight',
    subtitle: 'DESIGNED FOR YOUR ROUTINE',
    description: 'In-store! Limited time offer.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgColor: 'from-amber-800 to-amber-900'
  },
  {
    title: 'Comfort Redefined',
    subtitle: 'STRETCH, RELAX, REPEAT',
    description: 'Discover Now. Limited Offer!',
    image: 'https://images.unsplash.com/photo-1506629905587-4b47d3cb0ee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgColor: 'from-gray-800 to-gray-900'
  }
];

const PromotionalBanners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden h-96 bg-gradient-to-br ${promo.bgColor}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${promo.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <p className="text-sm font-medium mb-2 tracking-wider">{promo.subtitle}</p>
                <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                <p className="text-sm mb-4 opacity-90">{promo.description}</p>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 w-fit rounded-full px-6">
                  Discover Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
