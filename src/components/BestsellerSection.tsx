import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const bestsellerProducts = [
  {
    id: '101',
    name: 'Cashmere Sweater',
    price: 175,
    image: 'https://images.unsplash.com/photo-1607346256330-dee79c7162e6?w=400&h=400&fit=crop',
    rating: 5
  },
  {
    id: '102',
    name: 'Leather Ankle Boots',
    price: 220,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    rating: 4
  },
  {
    id: '103',
    name: 'Silk Scarf',
    price: 85,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
    rating: 5
  },
  {
    id: '104',
    name: 'Wool Coat',
    price: 350,
    image: 'https://images.unsplash.com/photo-1547582337-498599979299?w=400&h=400&fit=crop',
    rating: 4
  },
];

const BestsellerSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Bestseller Collections</h2>
            <p className="text-gray-600">Our most loved pieces from premium collections</p>
          </div>
          <Button 
            variant="outline" 
            className="hover:bg-amber-50 hover:border-amber-300"
            onClick={() => navigate('/collections')}
          >
            Shop All Collections
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerSection;
