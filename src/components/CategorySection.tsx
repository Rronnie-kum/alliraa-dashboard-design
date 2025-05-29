
import React from 'react';

const categories = [
  { name: 'Shorts', image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { name: 'Leggings', image: 'https://images.unsplash.com/photo-1506629905587-4b47d3cb0ee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { name: 'Tops', image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { name: 'Sports Bras', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { name: 'Onesies', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { name: 'Swim', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="text-center group cursor-pointer">
              <div className="relative overflow-hidden rounded-full mb-4 aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="font-medium text-gray-900 group-hover:text-amber-800 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
