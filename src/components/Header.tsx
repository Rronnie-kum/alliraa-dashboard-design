
import React from 'react';
import { ShoppingBag, User, Menu, Search, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '@/contexts/WishlistContext';

const Header = () => {
  const navigate = useNavigate();
  const { wishlistCount } = useWishlist();

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Navigate to shop page with search query
    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  return (
    <>
      {/* Promo Bar */}
      <div className="bg-amber-800 text-white text-center py-2 text-sm">
        <span>New Collection—every friday 75% Off. </span>
        <Link to="/shop" className="font-semibold underline cursor-pointer hover:text-amber-200">
          Shop Sale
        </Link>
      </div>
      
      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <Link to="/">
              <Logo />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">HOME</Link>
              <Link to="/shop" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">COLLECTIONS</Link>
              <Link to="/product" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">PRODUCT</Link>
              <Link to="/kurti" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">KURTI</Link>
              <Link to="/about" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">ABOUT</Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <SearchBar onSearch={handleSearch} className="hidden sm:block" />
              <Link to="/login">
                <Button variant="ghost" size="sm" className="hover:bg-amber-50 hover:text-amber-800">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/liked-products">
                <Button variant="ghost" size="sm" className="relative hover:bg-amber-50 hover:text-amber-800">
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="sm" className="relative hover:bg-amber-50 hover:text-amber-800">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-amber-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
