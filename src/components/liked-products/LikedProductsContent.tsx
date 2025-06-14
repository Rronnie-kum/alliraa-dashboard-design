
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

interface LikedProductsContentProps {
  wishlistItems: Product[];
  viewMode: 'grid' | 'list';
}

const LikedProductsContent: React.FC<LikedProductsContentProps> = ({
  wishlistItems,
  viewMode
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-2">
            Your Liked Products ({wishlistItems.length})
          </h2>
          <p className="text-amber-700">
            Items you've marked as favorites
          </p>
        </div>
        
        <div className={`grid gap-8 ${viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {wishlistItems.map((product) => (
            <div key={product.id} className="group relative">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/kurti">
            <Button variant="outline" className="px-8 py-3 border-amber-300 text-amber-800 hover:bg-amber-50">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LikedProductsContent;
