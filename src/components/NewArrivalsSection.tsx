
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const newArrivals = [
  {
    id: '101',
    name: 'Floral Summer Dress',
    price: 180,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '102',
    name: 'Vintage Denim Jacket',
    price: 160,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '103',
    name: 'Bohemian Maxi Skirt',
    price: 140,
    image: 'https://images.unsplash.com/photo-1566479179817-34b8ac7c6cfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '104',
    name: 'Casual Cotton Blouse',
    price: 90,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '105',
    name: 'Elegant Evening Gown',
    price: 320,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  }
];

const NewArrivalsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3 shadow-lg">
            <Sparkles className="h-4 w-4 mr-2" />
            Fresh Arrivals
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            New <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Arrivals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover the latest fashion trends that just landed in our collection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {newArrivals.map((product, index) => (
            <div 
              key={product.id} 
              className="group transform transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <ProductCard {...product} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/new-arrivals')}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All New Arrivals
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
