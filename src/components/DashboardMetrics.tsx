import React from 'react';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  AlertTriangle,
  Star,
  Truck,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuickMetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  trend?: {
    value: string;
    direction: 'up' | 'down';
  };
}

const QuickMetricCard = ({ title, value, subtitle, icon: Icon, color, trend }: QuickMetricCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-xs text-gray-500">{subtitle}</p>
            {trend && (
              <div className={`flex items-center mt-2 text-xs ${
                trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className={`h-3 w-3 mr-1 ${
                  trend.direction === 'down' ? 'rotate-180' : ''
                }`} />
                {trend.value}
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "₹2,45,890",
      subtitle: "This month",
      icon: DollarSign,
      color: "bg-green-500",
      trend: { value: "+23.5%", direction: "up" as const }
    },
    {
      title: "Active Products",
      value: "156",
      subtitle: "In inventory",
      icon: Package,
      color: "bg-blue-500",
      trend: { value: "+12", direction: "up" as const }
    },
    {
      title: "Total Customers",
      value: "2,847",
      subtitle: "Registered users",
      icon: Users,
      color: "bg-purple-500",
      trend: { value: "+18.2%", direction: "up" as const }
    },
    {
      title: "Pending Orders",
      value: "23",
      subtitle: "Need attention",
      icon: ShoppingCart,
      color: "bg-orange-500",
      trend: { value: "-5", direction: "down" as const }
    },
    {
      title: "Page Views",
      value: "45,234",
      subtitle: "This week",
      icon: Eye,
      color: "bg-indigo-500",
      trend: { value: "+8.1%", direction: "up" as const }
    },
    {
      title: "Low Stock Items",
      value: "8",
      subtitle: "Need restock",
      icon: AlertTriangle,
      color: "bg-red-500"
    },
    {
      title: "Average Rating",
      value: "4.8",
      subtitle: "Customer satisfaction",
      icon: Star,
      color: "bg-yellow-500"
    },
    {
      title: "Shipped Orders",
      value: "142",
      subtitle: "This week",
      icon: Truck,
      color: "bg-teal-500",
      trend: { value: "+15.3%", direction: "up" as const }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <QuickMetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default DashboardMetrics;