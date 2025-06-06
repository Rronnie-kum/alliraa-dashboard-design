
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const bestsellers = [
  {
    id: '1',
    name: 'Jadeite Spaghetti Strap',
    price: 150,
    image: 'https://images.unsplash.com/photo-1506629905587-4b47d3cb0ee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'Sassy Shoulder Bra',
    price: 120,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Sierra Square Neck Top',
    price: 200,
    originalPrice: 250,
    image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: '-20%',
    rating: 5
  },
  {
    id: '4',
    name: 'Egrimma Top',
    price: 220,
    image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: '5',
    name: 'Mariah Pocket Short',
    price: 185,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  }
];

const BestsellerSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Bestsellers</h2>
          <Button 
            onClick={() => navigate('/shop')}
            variant="outline" 
            className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white"
          >
            View All →
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerSection;
