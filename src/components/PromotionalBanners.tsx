
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const promotions = [
  {
    title: 'High—Top Design',
    subtitle: 'SAVE 30%—50% CLOTHING',
    description: 'In-store! Limited time offer.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgColor: 'from-cyan-400 to-cyan-600',
    route: '/shop?category=tops'
  },
  {
    title: 'Colour Spotlight',
    subtitle: 'DESIGNED FOR YOUR ROUTINE',
    description: 'In-store! Limited time offer.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgColor: 'from-amber-800 to-amber-900',
    route: '/shop?category=colors'
  },
  {
    title: 'Comfort Redefined',
    subtitle: 'STRETCH, RELAX, REPEAT',
    description: 'Discover Now. Limited Offer!',
    image: 'https://images.unsplash.com/photo-1506629905587-4b47d3cb0ee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bgColor: 'from-gray-800 to-gray-900',
    route: '/shop?category=comfort'
  }
];

const PromotionalBanners = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {promotions.map((promo, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br ${promo.bgColor} group cursor-pointer`}
              onClick={() => navigate(promo.route)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${promo.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <p className="text-sm font-medium mb-2 tracking-wider">{promo.subtitle}</p>
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-sm mb-3 opacity-90">{promo.description}</p>
                <Button 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 w-fit rounded-full px-5 py-2 text-sm transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(promo.route);
                  }}
                >
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
