
import React from 'react';
import { Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

interface ProductTabsProps {
  longDescription: string;
  features: string[];
  specifications: Record<string, string>;
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  longDescription,
  features,
  specifications
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white rounded-xl p-1 shadow-sm">
            <TabsTrigger value="description" className="rounded-lg">Description</TabsTrigger>
            <TabsTrigger value="specifications" className="rounded-lg">Specifications</TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-lg">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {longDescription}
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
              <div className="text-center py-12">
                <Eye className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Reviews will be displayed here</p>
                <Button className="mt-4 bg-amber-600 hover:bg-amber-700">
                  Write First Review
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductTabs;
