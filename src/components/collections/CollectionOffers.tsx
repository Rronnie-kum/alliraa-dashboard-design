
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const CollectionOffers: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-orange-900"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Heart className="h-4 w-4 mr-2" />
          Limited Time Collection Sale
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Exclusive Collections Sale
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Get up to 40% off on premium collections. Plus free shipping on all orders over $99!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-orange-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
            Browse Sale Collections
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
          >
            View Special Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionOffers;
