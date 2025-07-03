import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  Bell,
  FileText,
  Truck,
  Tag
} from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: "Add New Product",
      description: "Create a new product listing",
      icon: Plus,
      color: "bg-amber-50 hover:bg-amber-100 border-amber-200",
      iconColor: "text-amber-600"
    },
    {
      title: "Manage Inventory",
      description: "Update stock and pricing",
      icon: Package,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      title: "Process Orders",
      description: "Handle pending orders",
      icon: ShoppingCart,
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      iconColor: "text-green-600"
    },
    {
      title: "View Analytics",
      description: "Check sales reports",
      icon: BarChart3,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      title: "Manage Customers",
      description: "View customer profiles",
      icon: Users,
      color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      title: "Create Promotion",
      description: "Setup discounts & offers",
      icon: Tag,
      color: "bg-pink-50 hover:bg-pink-100 border-pink-200",
      iconColor: "text-pink-600"
    },
    {
      title: "Shipping Settings",
      description: "Configure delivery options",
      icon: Truck,
      color: "bg-teal-50 hover:bg-teal-100 border-teal-200",
      iconColor: "text-teal-600"
    },
    {
      title: "Generate Report",
      description: "Export business data",
      icon: FileText,
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-auto p-4 justify-start border ${action.color} transition-colors`}
            >
              <action.icon className={`h-5 w-5 mr-3 ${action.iconColor}`} />
              <div className="text-left">
                <p className="font-medium text-gray-900">{action.title}</p>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;