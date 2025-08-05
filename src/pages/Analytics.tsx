
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import PerformanceCharts from '@/components/PerformanceCharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Eye,
  Download,
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap,
  Award
} from 'lucide-react';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="Analytics" />
      
      <div className="ml-64">
        <DashboardHeader />
        
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-gray-600 mt-1">Comprehensive business insights and performance metrics</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Select defaultValue="30">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                  <SelectItem value="custom">Custom range</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="conversion">Conversion</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Revenue</p>
                        <p className="text-3xl font-bold">₹2,45,890</p>
                        <p className="text-sm text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +23.5%
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
                        <p className="text-3xl font-bold">2,847</p>
                        <p className="text-sm text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +18.2%
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
                        <p className="text-3xl font-bold">342</p>
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

              {/* Performance Charts */}
              <PerformanceCharts />

              {/* Additional Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Goal Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Monthly Revenue Target</span>
                        <span className="font-medium">₹2,45,890 / ₹3,00,000</span>
                      </div>
                      <Progress value={82} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">82% completed</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Customer Acquisition</span>
                        <span className="font-medium">2,847 / 3,500</span>
                      </div>
                      <Progress value={81} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">81% completed</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Order Fulfillment</span>
                        <span className="font-medium">342 / 400</span>
                      </div>
                      <Progress value={86} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">86% completed</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Quick Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="text-sm">
                        <p className="font-medium text-green-800">Peak Sales Day</p>
                        <p className="text-green-600">Fridays generate 28% more revenue</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm">
                        <p className="font-medium text-blue-800">Top Traffic Source</p>
                        <p className="text-blue-600">Social media drives 45% of visits</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <div className="text-sm">
                        <p className="font-medium text-amber-800">Best Category</p>
                        <p className="text-amber-600">Kurtis account for 35% of sales</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Top Performers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Embroidered Kurti', badge: 'Bestseller', sales: '₹45,230' },
                      { name: 'Designer Saree', badge: 'Trending', sales: '₹38,920' },
                      { name: 'Party Lehenga', badge: 'Premium', sales: '₹32,450' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {item.badge}
                          </Badge>
                        </div>
                        <span className="font-semibold text-green-600">{item.sales}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sales">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-16 w-16 mx-auto mb-4 text-green-500" />
                        <p className="text-lg font-medium text-gray-700">Daily Sales Analysis</p>
                        <p className="text-sm text-gray-500 mt-2">Revenue trends and patterns</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sales by Product Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <PieChart className="h-16 w-16 mx-auto mb-4 text-blue-500" />
                        <p className="text-lg font-medium text-gray-700">Category Breakdown</p>
                        <p className="text-sm text-gray-500 mt-2">Sales distribution by category</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Monthly Sales Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { month: 'January', sales: '₹2,45,890', orders: 342, growth: '+23.5%' },
                      { month: 'December', sales: '₹1,98,760', orders: 298, growth: '+15.2%' },
                      { month: 'November', sales: '₹1,72,340', orders: 267, growth: '+8.7%' }
                    ].map((month, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{month.month}</h4>
                          <p className="text-sm text-gray-600">{month.orders} orders</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{month.sales}</p>
                          <p className="text-sm text-green-600">{month.growth}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Users className="h-16 w-16 mx-auto mb-4 text-purple-500" />
                        <p className="text-lg font-medium text-gray-700">Customer Acquisition</p>
                        <p className="text-sm text-gray-500 mt-2">New vs returning customers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Segments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { segment: 'Premium Customers', count: 234, percentage: 35, color: 'bg-gold-500' },
                      { segment: 'Regular Customers', count: 567, percentage: 42, color: 'bg-blue-500' },
                      { segment: 'New Customers', count: 189, percentage: 23, color: 'bg-green-500' }
                    ].map((segment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{segment.segment}</span>
                          <span className="text-sm text-gray-600">{segment.count} customers</span>
                        </div>
                        <Progress value={segment.percentage} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Product Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="h-16 w-16 mx-auto mb-4 text-amber-500" />
                      <p className="text-lg font-medium text-gray-700">Product Analytics</p>
                      <p className="text-sm text-gray-500 mt-2">Detailed product performance metrics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="traffic">
              <Card>
                <CardHeader>
                  <CardTitle>Website Traffic Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="h-16 w-16 mx-auto mb-4 text-teal-500" />
                      <p className="text-lg font-medium text-gray-700">Traffic Analytics</p>
                      <p className="text-sm text-gray-500 mt-2">Visitor behavior and traffic sources</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conversion">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gradient-to-br from-rose-50 to-pink-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Target className="h-16 w-16 mx-auto mb-4 text-rose-500" />
                      <p className="text-lg font-medium text-gray-700">Conversion Analytics</p>
                      <p className="text-sm text-gray-500 mt-2">Funnel analysis and conversion rates</p>
                    </div>
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
