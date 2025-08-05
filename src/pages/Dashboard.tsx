import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardMetrics from '@/components/DashboardMetrics';
import RecentOrders from '@/components/RecentOrders';
import TopCategories from '@/components/TopCategories';
import QuickActions from '@/components/QuickActions';
import ActivityFeed from '@/components/ActivityFeed';
import PerformanceCharts from '@/components/PerformanceCharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar,
  Download,
  Filter,
  RefreshCw,
  Bell,
  AlertCircle,
  CheckCircle,
  Clock,
  X
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning',
      message: '8 products are running low on stock',
      icon: AlertCircle,
      color: 'text-yellow-600 bg-yellow-50 border-yellow-200'
    },
    {
      id: 2,
      type: 'success',
      message: 'Monthly sales target achieved!',
      icon: CheckCircle,
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      id: 3,
      type: 'info',
      message: '15 orders pending approval',
      icon: Clock,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    }
  ]);

  const handleExport = () => {
    toast({
      title: "Exporting Data",
      description: "Your dashboard report is being generated...",
    });
  };

  const handleRefresh = () => {
    toast({
      title: "Dashboard Refreshed",
      description: "All data has been updated successfully.",
    });
  };

  const handleDateFilter = () => {
    toast({
      title: "Date Filter",
      description: "Opening date range selector...",
    });
  };

  const handleFilterChange = () => {
    toast({
      title: "Filters Applied",
      description: "Dashboard data filtered successfully.",
    });
  };

  const dismissAlert = (alertId: number) => {
    setAlerts(alerts.filter(alert => alert.id !== alertId));
    toast({
      title: "Alert Dismissed",
      description: "Alert has been removed from your dashboard.",
    });
  };

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
              <Button variant="outline" size="sm" onClick={handleDateFilter}>
                <Calendar className="h-4 w-4 mr-2" />
                Last 30 days
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" onClick={handleRefresh}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Alert Bar */}
          <div className="space-y-2">
            {alerts.map((alert) => (
              <div key={alert.id} className={`flex items-center gap-3 p-3 rounded-lg border ${alert.color}`}>
                <alert.icon className="h-5 w-5" />
                <span className="text-sm font-medium flex-1">{alert.message}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => dismissAlert(alert.id)}
                  className="hover:bg-transparent"
                >
                  <X className="h-4 w-4" />
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

          {/* Performance Charts */}
          <PerformanceCharts />

          {/* Quick Actions */}
          <QuickActions />

          {/* Activity Feed and Performance Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activity Feed - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            
            {/* Performance Summary - Takes 1 column */}
            <div className="space-y-6">
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;