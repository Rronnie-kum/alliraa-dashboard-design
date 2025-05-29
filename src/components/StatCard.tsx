
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, trend }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm mt-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </p>
        </div>
        <div className="p-3 bg-amber-50 rounded-lg">
          <Icon className="h-6 w-6 text-amber-800" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
