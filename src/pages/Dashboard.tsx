
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardMetrics from '@/components/DashboardMetrics';
import RecentOrders from '@/components/RecentOrders';
import TopCategories from '@/components/TopCategories';
import QuickActions from '@/components/QuickActions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar,
  Download,
  Filter,
  RefreshCw,
  Bell,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const alerts = [
    {
      type: 'warning',
      message: '8 products are running low on stock',
      icon: AlertCircle,
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      type: 'success',
      message: 'Monthly sales target achieved!',
      icon: CheckCircle,
      color: 'text-green-600 bg-green-50'
    },
    {
      type: 'info',
      message: '15 orders pending approval',
      icon: Clock,
      color: 'text-blue-600 bg-blue-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="Dashboard" />
      
      <div className="ml-64">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with ALLIRAA today.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Last 30 days
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Alert Bar */}
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${alert.color}`}>
                <alert.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{alert.message}</span>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Metrics Grid */}
          <DashboardMetrics />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders - Takes 2 columns */}
            <div className="lg:col-span-2">
              <RecentOrders />
            </div>
            
            {/* Top Categories - Takes 1 column */}
            <div>
              <TopCategories />
            </div>
          </div>

          {/* Sales Chart */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Sales Analytics</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center border border-amber-100">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-gray-600 font-medium">Sales Chart</p>
                  <p className="text-sm text-gray-500">Interactive analytics would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <QuickActions />

          {/* Performance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">New Orders</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue</span>
                  <span className="font-semibold">₹8,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">New Customers</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Returns</span>
                  <span className="font-semibold">2</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inventory Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Products</span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">In Stock</span>
                  <span className="font-semibold text-green-600">148</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Low Stock</span>
                  <span className="font-semibold text-yellow-600">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Out of Stock</span>
                  <span className="font-semibold text-red-600">0</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Customer Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Customers</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active This Month</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. Order Value</span>
                  <span className="font-semibold">₹1,850</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Repeat Customers</span>
                  <span className="font-semibold">68%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
