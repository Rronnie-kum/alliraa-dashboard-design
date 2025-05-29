
import React from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
      {/* Promo Bar */}
      <div className="bg-amber-800 text-white text-center py-2 text-sm">
        <span>New Collection—every friday 75% Off. </span>
        <span className="font-semibold underline cursor-pointer">Shop Sale</span>
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
            <Logo />

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">HOME</a>
              <a href="#" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">SHOP</a>
              <a href="#" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">PRODUCT</a>
              <a href="#" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">PAGES</a>
              <a href="#" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">BLOGS</a>
              <a href="/dashboard" className="text-gray-900 hover:text-amber-800 font-medium transition-colors">DASHBOARD</a>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-amber-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
