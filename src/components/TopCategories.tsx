import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const TopCategories = () => {
  const categories = [
    {
      name: "Kurtis",
      sales: 245,
      revenue: "₹2,45,600",
      percentage: 85,
      color: "bg-amber-500"
    },
    {
      name: "Sarees",
      sales: 189,
      revenue: "₹1,89,300",
      percentage: 72,
      color: "bg-pink-500"
    },
    {
      name: "Lehengas",
      sales: 156,
      revenue: "₹3,12,800",
      percentage: 68,
      color: "bg-purple-500"
    },
    {
      name: "Suits",
      sales: 134,
      revenue: "₹1,67,500",
      percentage: 55,
      color: "bg-blue-500"
    },
    {
      name: "Indo-Western",
      sales: 98,
      revenue: "₹1,23,400",
      percentage: 42,
      color: "bg-green-500"
    },
    {
      name: "Accessories",
      sales: 87,
      revenue: "₹54,300",
      percentage: 38,
      color: "bg-orange-500"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{category.name}</h4>
                  <p className="text-sm text-gray-600">
                    {category.sales} sales • {category.revenue}
                  </p>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {category.percentage}%
                </span>
              </div>
              <div className="relative">
                <Progress value={category.percentage} className="h-2" />
                <div 
                  className={`absolute top-0 left-0 h-2 rounded-full ${category.color}`}
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCategories;