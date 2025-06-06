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

export const filterAndSortProducts = (
  products: Product[],
  selectedCategory: string,
  priceRange: string,
  sortBy: string
): Product[] => {
  let filtered = products;

  // Filter by category
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }

  // Filter by price range
  if (priceRange !== 'all') {
    switch (priceRange) {
      case 'under-50':
        filtered = filtered.filter(product => product.price < 50);
        break;
      case '50-100':
        filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
        break;
      case '100-150':
        filtered = filtered.filter(product => product.price >= 100 && product.price <= 150);
        break;
      case 'above-150':
        filtered = filtered.filter(product => product.price > 150);
        break;
    }
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      break;
    case 'rating':
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    default:
      // Keep original order for 'popular'
      break;
  }

  return filtered;
};
