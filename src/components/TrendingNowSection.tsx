
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Package, ArrowRight } from 'lucide-react';

const pouchBags = [
  {
    id: '13',
    name: 'Leather Travel Pouch',
    price: 89,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '17',
    name: 'Printed Makeup Pouch',
    price: 45,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '21',
    name: 'Premium Zip Organizer',
    price: 129,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '27',
    name: 'Handcrafted Pouch',
    price: 159,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '301',
    name: 'Canvas Travel Pouch',
    price: 65,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '302',
    name: 'Designer Cosmetic Pouch',
    price: 99,
    image: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  }
];

const TrendingNowSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3 shadow-lg">
            <Package className="h-4 w-4 mr-2" />
            Pouch Bags
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Pouch Bags <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Collection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Explore our premium collection of stylish and functional pouch bags
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          {pouchBags.map((product, index) => (
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

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-2xl font-bold text-amber-600 mb-1">1.2M+</div>
            <div className="text-gray-600 text-sm">Happy Customers</div>
          </div>
          <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-2xl font-bold text-orange-600 mb-1">95%</div>
            <div className="text-gray-600 text-sm">Quality Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-2xl font-bold text-amber-700 mb-1">#1</div>
            <div className="text-gray-600 text-sm">Premium Pouch Seller</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/pouch-bag')}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Pouch Bags
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNowSection;
