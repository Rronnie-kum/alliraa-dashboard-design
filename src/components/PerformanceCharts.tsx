import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';

const PerformanceCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Sales Chart */}
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <LineChart className="h-5 w-5" />
            Sales Performance
          </CardTitle>
          <div className="flex items-center gap-2">
            <Select defaultValue="30">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="revenue" className="space-y-4">
            <TabsList>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="revenue">
              <div className="h-80 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-lg flex items-center justify-center border border-amber-100">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-amber-500" />
                  <p className="text-lg font-medium text-gray-700">Revenue Trend Chart</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive revenue analytics would be displayed here</p>
                  <div className="mt-4 flex justify-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-green-600">↗ +23.5%</p>
                      <p className="text-gray-500">vs last month</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-amber-600">₹2,45,890</p>
                      <p className="text-gray-500">total revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="orders">
              <div className="h-80 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg flex items-center justify-center border border-blue-100">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-blue-500" />
                  <p className="text-lg font-medium text-gray-700">Orders Analytics</p>
                  <p className="text-sm text-gray-500 mt-2">Order volume and trends would be shown here</p>
                  <div className="mt-4 flex justify-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-green-600">↗ +15.2%</p>
                      <p className="text-gray-500">order growth</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-blue-600">342</p>
                      <p className="text-gray-500">total orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="customers">
              <div className="h-80 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-lg flex items-center justify-center border border-green-100">
                <div className="text-center">
                  <PieChart className="h-16 w-16 mx-auto mb-4 text-green-500" />
                  <p className="text-lg font-medium text-gray-700">Customer Analytics</p>
                  <p className="text-sm text-gray-500 mt-2">Customer acquisition and retention metrics</p>
                  <div className="mt-4 flex justify-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-green-600">↗ +18.7%</p>
                      <p className="text-gray-500">new customers</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-green-600">68%</p>
                      <p className="text-gray-500">retention rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Category Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5" />
            Category Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-lg flex items-center justify-center border border-purple-100">
            <div className="text-center">
              <PieChart className="h-12 w-12 mx-auto mb-3 text-purple-500" />
              <p className="font-medium text-gray-700">Category Distribution</p>
              <p className="text-sm text-gray-500 mt-1">Category-wise sales breakdown</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { name: 'Kurtis', percentage: 35, color: 'bg-amber-500' },
              { name: 'Sarees', percentage: 28, color: 'bg-pink-500' },
              { name: 'Lehengas', percentage: 22, color: 'bg-purple-500' },
              { name: 'Suits', percentage: 15, color: 'bg-blue-500' }
            ].map((category, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded ${category.color}`}></div>
                  <span>{category.name}</span>
                </div>
                <span className="font-medium">{category.percentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Regional Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Regional Sales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-lg flex items-center justify-center border border-teal-100">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-3 text-teal-500" />
              <p className="font-medium text-gray-700">Geographic Distribution</p>
              <p className="text-sm text-gray-500 mt-1">Sales by region and state</p>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { region: 'Maharashtra', sales: '₹85,240', growth: '+12%' },
              { region: 'Karnataka', sales: '₹67,890', growth: '+8%' },
              { region: 'Gujarat', sales: '₹54,320', growth: '+15%' },
              { region: 'Tamil Nadu', sales: '₹38,450', growth: '+5%' }
            ].map((region, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium">{region.region}</p>
                  <p className="text-gray-500">{region.sales}</p>
                </div>
                <span className="text-green-600 font-medium">{region.growth}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceCharts;