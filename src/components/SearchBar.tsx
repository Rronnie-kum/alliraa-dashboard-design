
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search products, collections...",
  className = ""
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      onSearch?.(searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsExpanded(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 cursor-pointer" 
          onClick={() => setIsExpanded(true)}
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsExpanded(true)}
          className={`pl-10 pr-10 transition-all duration-200 ${
            isExpanded ? 'w-80' : 'w-64'
          } focus:ring-2 focus:ring-amber-500 focus:border-amber-500`}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>
      
      {/* Search Suggestions (when expanded and has query) */}
      {isExpanded && searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-auto">
          <div className="p-2">
            <div className="text-sm text-gray-500 mb-2">Quick suggestions:</div>
            {[
              'Athletic wear',
              'Yoga pants',
              'Sports bras',
              'Running shoes',
              'Workout tops'
            ].filter(item => 
              item.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((suggestion, index) => (
              <div
                key={index}
                className="px-3 py-2 hover:bg-gray-50 cursor-pointer rounded text-sm"
                onClick={() => {
                  setSearchQuery(suggestion);
                  handleSearch();
                  setIsExpanded(false);
                }}
              >
                <Search className="inline h-3 w-3 mr-2 text-gray-400" />
                {suggestion}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Backdrop to close search when clicking outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;
