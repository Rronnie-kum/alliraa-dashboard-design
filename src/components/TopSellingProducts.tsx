import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: '13',
    name: 'Silk Evening Gown',
    price: 249,
    originalPrice: 320,
    image: 'https://images.unsplash.com/photo-1543539308-915455197249?w=400&h=400&fit=crop',
    badge: 'Sale',
    rating: 5
  },
  {
    id: '14',
    name: 'Linen Summer Dress',
    price: 99,
    image: 'https://images.unsplash.com/photo-1585484074994-a9bb06e59b1a?w=400&h=400&fit=crop',
    rating: 4
  },
  {
    id: '15',
    name: 'Cashmere Sweater',
    price: 179,
    originalPrice: 220,
    image: 'https://images.unsplash.com/photo-1607345354914-5ca73522ca6a?w=400&h=400&fit=crop',
    badge: '25% Off',
    rating: 5
  },
  {
    id: '16',
    name: 'Leather Biker Jacket',
    price: 299,
    image: 'https://images.unsplash.com/photo-1588687345943-456a401703a6?w=400&h=400&fit=crop',
    rating: 4
  }
];

const TopSellingProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Selling Collections</h2>
            <p className="text-gray-600">Discover what's trending in our curated collections</p>
          </div>
          <Button 
            variant="outline" 
            className="hover:bg-amber-50 hover:border-amber-300"
            onClick={() => navigate('/collections')}
          >
            Explore Collections
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
