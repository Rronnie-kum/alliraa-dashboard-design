
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import StatCard from '@/components/StatCard';
import { Users, ShoppingBag, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="Dashboard" />
      
      <div className="ml-64">
        <DashboardHeader />
        
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Users"
              value="24,532"
              change="+12% from last month"
              icon={Users}
              trend="up"
            />
            <StatCard
              title="Total Orders"
              value="1,429"
              change="+8% from last month"
              icon={ShoppingBag}
              trend="up"
            />
            <StatCard
              title="Revenue"
              value="$89,432"
              change="+23% from last month"
              icon={DollarSign}
              trend="up"
            />
            <StatCard
              title="Growth Rate"
              value="12.5%"
              change="-2% from last month"
              icon={TrendingUp}
              trend="down"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sales Overview */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Sales Chart Placeholder</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { user: 'John Doe', action: 'placed an order', time: '2 mins ago' },
                  { user: 'Jane Smith', action: 'updated profile', time: '5 mins ago' },
                  { user: 'Mike Johnson', action: 'left a review', time: '10 mins ago' },
                  { user: 'Sarah Wilson', action: 'signed up', time: '15 mins ago' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <Activity className="h-4 w-4 text-amber-800" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.user}</p>
                      <p className="text-xs text-gray-500">{activity.action}</p>
                    </div>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Goal Completion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Monthly Sales</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Customer Growth</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Revenue Target</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Yoga Leggings', sales: '2,430' },
                  { name: 'Sports Bra', sales: '1,820' },
                  { name: 'Running Shorts', sales: '1,290' },
                ].map((product, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{product.name}</span>
                    <span className="text-sm text-gray-500">{product.sales} sold</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <button className="w-full p-3 text-left bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors">
                  <p className="font-medium text-amber-800">Add New Product</p>
                  <p className="text-sm text-amber-600">Create a new product listing</p>
                </button>
                <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <p className="font-medium text-blue-800">View Reports</p>
                  <p className="text-sm text-blue-600">Generate detailed analytics</p>
                </button>
                <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <p className="font-medium text-green-800">Manage Orders</p>
                  <p className="text-sm text-green-600">Process pending orders</p>
                </button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
