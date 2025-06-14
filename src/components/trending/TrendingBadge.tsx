
import React from 'react';
import { TrendingUp, Flame, Star, Heart } from 'lucide-react';

interface TrendingBadgeProps {
  badge: string;
}

const TrendingBadge: React.FC<TrendingBadgeProps> = ({ badge }) => {
  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'TRENDING':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'HOT':
        return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'VIRAL':
        return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'TRENDING':
        return <TrendingUp className="h-3 w-3" />;
      case 'HOT':
        return <Flame className="h-3 w-3" />;
      case 'VIRAL':
        return <Star className="h-3 w-3" />;
      default:
        return <Heart className="h-3 w-3" />;
    }
  };

  return (
    <div className={`absolute top-2 left-2 ${getBadgeStyle(badge)} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10`}>
      {getBadgeIcon(badge)}
      {badge}
    </div>
  );
};

export default TrendingBadge;
