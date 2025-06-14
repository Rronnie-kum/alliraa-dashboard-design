
import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LikedProductsEmpty = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <div className="bg-amber-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <Heart className="h-16 w-16 text-amber-600" />
          </div>
          <h3 className="text-2xl font-bold text-amber-900 mb-4">
            No Liked Products Yet
          </h3>
          <p className="text-amber-700 mb-8 max-w-md mx-auto">
            Start browsing our collection and heart the items you love to see them here.
          </p>
          <Link to="/kurti">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 shadow-md">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LikedProductsEmpty;
