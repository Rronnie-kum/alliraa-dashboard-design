
import React from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

interface LookCard {
  id: string;
  title: string;
  images: ProductImage[];
  price?: string;
  route: string;
}

const ShopTheLookSection = () => {
  const navigate = useNavigate();

  const lookCards: LookCard[] = [
    {
      id: '1',
      title: 'Summer Essentials',
      price: 'From $29',
      route: '/summer-essentials',
      images: [
        { id: '1a', url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop', alt: 'Summer top' },
        { id: '1b', url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=200&fit=crop', alt: 'Summer bottoms' },
        { id: '1c', url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=250&fit=crop', alt: 'Summer accessories' },
      ]
    },
    {
      id: '2',
      title: 'Casual Comfort',
      price: 'From $45',
      route: '/casual-comfort',
      images: [
        { id: '2a', url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=280&fit=crop', alt: 'Casual shirt' },
        { id: '2b', url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=180&fit=crop', alt: 'Casual pants' },
        { id: '2c', url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=200&fit=crop', alt: 'Casual shoes' },
        { id: '2d', url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=160&fit=crop', alt: 'Casual bag' },
      ]
    },
    {
      id: '3',
      title: 'Evening Elegance',
      price: 'From $89',
      route: '/evening-elegance',
      images: [
        { id: '3a', url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=320&fit=crop', alt: 'Evening dress' },
        { id: '3b', url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=180&fit=crop', alt: 'Evening heels' },
        { id: '3c', url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=220&fit=crop', alt: 'Evening clutch' },
      ]
    },
    {
      id: '4',
      title: 'Urban Street',
      price: 'From $35',
      route: '/urban-street',
      images: [
        { id: '4a', url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=260&fit=crop', alt: 'Street jacket' },
        { id: '4b', url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=200&fit=crop', alt: 'Street jeans' },
        { id: '4c', url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=180&fit=crop', alt: 'Street sneakers' },
      ]
    },
    {
      id: '5',
      title: 'Boho Chic',
      price: 'From $52',
      route: '/boho-chic',
      images: [
        { id: '5a', url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop', alt: 'Boho dress' },
        { id: '5b', url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=160&fit=crop', alt: 'Boho sandals' },
        { id: '5c', url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=240&fit=crop', alt: 'Boho jewelry' },
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shop The Look
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover curated style collections featuring perfectly matched pieces for every occasion
          </p>
        </div>

        {/* Carousel */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {lookCards.map((look) => (
              <CarouselItem key={look.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Image Collage */}
                  <div className="relative h-96 sm:h-[28rem] p-3">
                    <div className="grid grid-cols-2 gap-2 h-full">
                      {/* Main image - spans full height on left */}
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={look.images[0]?.url}
                          alt={look.images[0]?.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Secondary images - stacked on right */}
                      <div className="flex flex-col gap-2">
                        {look.images.slice(1).map((image, index) => (
                          <div 
                            key={image.id} 
                            className="relative overflow-hidden rounded-lg flex-1"
                          >
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-amber-800 transition-colors">
                          {look.title}
                        </h3>
                        {look.price && (
                          <p className="text-amber-800 font-medium">
                            {look.price}
                          </p>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-amber-800 hover:bg-amber-900 text-white shadow-md hover:shadow-lg transition-all duration-200"
                        onClick={() => navigate(look.route)}
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Shop All
                      </Button>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{look.images.length} pieces</span>
                      <span className="mx-2">•</span>
                      <span>Complete the look</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious className="hidden sm:flex -left-6 bg-white hover:bg-gray-50 border-gray-200 shadow-md" />
          <CarouselNext className="hidden sm:flex -right-6 bg-white hover:bg-gray-50 border-gray-200 shadow-md" />
        </Carousel>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-6 sm:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(lookCards.length / 1) }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheLookSection;
