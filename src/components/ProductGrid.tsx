
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  category: string;
  rating: number;
}

interface ProductGridProps {
  products: Product[];
  viewMode: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  viewMode,
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <>
      <div className={`grid gap-8 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1 lg:grid-cols-2 gap-6'
      }`}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            {...product}
          />
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => onPageChange(currentPage - 1)}
                    className="cursor-pointer"
                  />
                </PaginationItem>
              )}
              
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index + 1}>
                  <PaginationLink
                    onClick={() => onPageChange(index + 1)}
                    isActive={currentPage === index + 1}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => onPageChange(currentPage + 1)}
                    className="cursor-pointer"
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
