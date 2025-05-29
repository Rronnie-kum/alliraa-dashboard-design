
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Eye } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="Analytics" />
      
      <div className="ml-64">
        <DashboardHeader />
        
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <Select defaultValue="30">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
                <SelectItem value="365">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Revenue</p>
                        <p className="text-3xl font-bold">$124,592</p>
                        <p className="text-sm text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +12.5%
                        </p>
                      </div>
                      <div className="p-3 bg-green-100 rounded-lg">
                        <DollarSign className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Customers</p>
                        <p className="text-3xl font-bold">8,432</p>
                        <p className="text-sm text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +8.2%
                        </p>
                      </div>
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Orders</p>
                        <p className="text-3xl font-bold">2,543</p>
                        <p className="text-sm text-red-600 flex items-center mt-1">
                          <TrendingDown className="h-4 w-4 mr-1" />
                          -3.1%
                        </p>
                      </div>
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <ShoppingCart className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Page Views</p>
                        <p className="text-3xl font-bold">45,921</p>
                        <p className="text-sm text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +15.3%
                        </p>
                      </div>
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Eye className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Revenue Chart Placeholder</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Pie Chart Placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Conversion Rates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { source: 'Organic Search', rate: '3.2%', change: '+0.3%' },
                      { source: 'Social Media', rate: '2.8%', change: '+0.1%' },
                      { source: 'Email Campaign', rate: '5.1%', change: '+0.7%' },
                      { source: 'Direct Traffic', rate: '4.3%', change: '-0.2%' },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.source}</p>
                          <p className="text-sm text-gray-500">{item.rate}</p>
                        </div>
                        <span className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Yoga Leggings Pro', sales: '$12,540', units: '234 sold' },
                      { name: 'Sports Bra Elite', sales: '$8,920', units: '189 sold' },
                      { name: 'Running Shorts', sales: '$6,750', units: '156 sold' },
                      { name: 'Tank Top Classic', sales: '$4,320', units: '98 sold' },
                    ].map((product, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.units}</p>
                        </div>
                        <span className="font-semibold">{product.sales}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { country: 'United States', percentage: '45%', revenue: '$56,240' },
                      { country: 'Canada', percentage: '22%', revenue: '$27,410' },
                      { country: 'United Kingdom', percentage: '18%', revenue: '$22,380' },
                      { country: 'Australia', percentage: '15%', revenue: '$18,670' },
                    ].map((location, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{location.country}</p>
                          <p className="text-sm text-gray-500">{location.percentage} of total</p>
                        </div>
                        <span className="font-semibold">{location.revenue}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sales">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Sales Analytics Content</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gradient-to-br from-green-50 to-teal-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Customer Analytics Content</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Product Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Product Analytics Content</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
