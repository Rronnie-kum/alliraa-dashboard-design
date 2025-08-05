import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Star
} from 'lucide-react';

interface Activity {
  id: number;
  type: 'order' | 'product' | 'customer' | 'payment' | 'review';
  title: string;
  description: string;
  time: string;
  status: 'success' | 'pending' | 'warning' | 'info';
  icon: React.ElementType;
}

const ActivityFeed = () => {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'order',
      title: 'New Order Received',
      description: 'Order #ORD-2024-156 placed by Priya Sharma for ₹3,450',
      time: '2 minutes ago',
      status: 'success',
      icon: ShoppingCart
    },
    {
      id: 2,
      type: 'product',
      title: 'Low Stock Alert',
      description: 'Cotton Kurti (Blue) has only 3 units remaining',
      time: '15 minutes ago',
      status: 'warning',
      icon: Package
    },
    {
      id: 3,
      type: 'customer',
      title: 'New Customer Registration',
      description: 'Rahul Gupta registered from Mumbai',
      time: '1 hour ago',
      status: 'info',
      icon: Users
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment Received',
      description: 'Payment of ₹2,180 received for Order #ORD-2024-154',
      time: '2 hours ago',
      status: 'success',
      icon: DollarSign
    },
    {
      id: 5,
      type: 'review',
      title: 'New Review',
      description: 'Anita Patel left a 5-star review for Silk Saree Collection',
      time: '3 hours ago',
      status: 'info',
      icon: Star
    },
    {
      id: 6,
      type: 'order',
      title: 'Order Shipped',
      description: 'Order #ORD-2024-153 shipped via BlueDart',
      time: '5 hours ago',
      status: 'success',
      icon: CheckCircle
    },
    {
      id: 7,
      type: 'product',
      title: 'Product Updated',
      description: 'Images updated for Lehenga Collection',
      time: '6 hours ago',
      status: 'info',
      icon: Package
    },
    {
      id: 8,
      type: 'order',
      title: 'Order Cancelled',
      description: 'Order #ORD-2024-151 cancelled by customer',
      time: '1 day ago',
      status: 'warning',
      icon: AlertCircle
    }
  ];

  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'success':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'warning':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'pending':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'info':
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getIconColor = (status: Activity['status']) => {
    switch (status) {
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'pending':
        return 'text-blue-600';
      case 'info':
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${getStatusColor(activity.status)}`}>
                <activity.icon className={`h-4 w-4 ${getIconColor(activity.status)}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;