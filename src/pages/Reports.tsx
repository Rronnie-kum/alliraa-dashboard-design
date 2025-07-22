import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Calendar as CalendarIcon, Download, TrendingUp, TrendingDown, BarChart3, FileText, Users, ShoppingCart, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { format, addDays, subDays } from 'date-fns';

interface ReportData {
  period: string;
  sales: number;
  orders: number;
  customers: number;
  avgOrderValue: number;
  topProduct: string;
  topCategory: string;
}

const mockReportData: ReportData = {
  period: 'Last 7 Days',
  sales: 12450.75,
  orders: 89,
  customers: 67,
  avgOrderValue: 139.90,
  topProduct: 'Traditional Embroidered Kurti',
  topCategory: 'Kurti Collections'
};

const mockTopProducts = [
  { name: 'Traditional Embroidered Kurti', sales: 1250, percentage: 85 },
  { name: 'Designer Silk Kurti', sales: 980, percentage: 67 },
  { name: 'Party Cocktail Dress', sales: 845, percentage: 58 },
  { name: 'Designer Handbag', sales: 720, percentage: 49 },
  { name: 'Summer Maxi Dress', sales: 690, percentage: 47 }
];

const mockSalesData = [
  { date: '2024-01-15', orders: 12, sales: 1450.00, customers: 8 },
  { date: '2024-01-14', orders: 8, sales: 980.50, customers: 6 },
  { date: '2024-01-13', orders: 15, sales: 2100.75, customers: 12 },
  { date: '2024-01-12', orders: 6, sales: 720.25, customers: 5 },
  { date: '2024-01-11', orders: 10, sales: 1200.00, customers: 7 },
  { date: '2024-01-10', orders: 18, sales: 2350.50, customers: 14 },
  { date: '2024-01-09', orders: 9, sales: 1080.75, customers: 6 }
];

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [dateRange, setDateRange] = useState('7days');
  const [startDate, setStartDate] = useState<Date>(subDays(new Date(), 7));
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [reportType, setReportType] = useState('sales');

  const handleDateRangeChange = (range: string) => {
    setDateRange(range);
    const now = new Date();
    
    switch (range) {
      case '7days':
        setStartDate(subDays(now, 7));
        setEndDate(now);
        break;
      case '30days':
        setStartDate(subDays(now, 30));
        setEndDate(now);
        break;
      case '90days':
        setStartDate(subDays(now, 90));
        setEndDate(now);
        break;
      case 'custom':
        // Keep current dates for custom range
        break;
      default:
        break;
    }
  };

  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: `${reportType.charAt(0).toUpperCase() + reportType.slice(1)} report for ${format(startDate, 'MMM d')} - ${format(endDate, 'MMM d')} has been generated`,
    });
  };

  const handleExportReport = (format: 'csv' | 'pdf' | 'xlsx') => {
    toast({
      title: "Export Started",
      description: `Exporting report as ${format.toUpperCase()}...`,
    });
  };

  const reportTypes = [
    { value: 'sales', label: 'Sales Report', icon: DollarSign },
    { value: 'products', label: 'Product Performance', icon: BarChart3 },
    { value: 'customers', label: 'Customer Analysis', icon: Users },
    { value: 'orders', label: 'Order Summary', icon: ShoppingCart }
  ];

  const totalSales = mockSalesData.reduce((sum, day) => sum + day.sales, 0);
  const totalOrders = mockSalesData.reduce((sum, day) => sum + day.orders, 0);
  const totalCustomers = mockSalesData.reduce((sum, day) => sum + day.customers, 0);
  const avgOrderValue = totalSales / totalOrders;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Business Reports</h1>
              <p className="text-muted-foreground mt-2">Generate comprehensive business analytics and reports</p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleExportReport('csv')}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="outline" onClick={() => handleExportReport('pdf')}>
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button onClick={handleGenerateReport}>
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>

          {/* Report Configuration */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Report Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium">Report Type</label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Date Range</label>
                  <Select value={dateRange} onValueChange={handleDateRangeChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 Days</SelectItem>
                      <SelectItem value="30days">Last 30 Days</SelectItem>
                      <SelectItem value="90days">Last 90 Days</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Start Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(startDate, "MMM d, yyyy")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => date && setStartDate(date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="text-sm font-medium">End Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(endDate, "MMM d, yyyy")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={(date) => date && setEndDate(date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                  <p className="text-2xl font-bold">${totalSales.toLocaleString()}</p>
                  <div className="flex items-center mt-2 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +12.5% vs last period
                  </div>
                </div>
                <DollarSign className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{totalOrders}</p>
                  <div className="flex items-center mt-2 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +8.2% vs last period
                  </div>
                </div>
                <ShoppingCart className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">New Customers</p>
                  <p className="text-2xl font-bold">{totalCustomers}</p>
                  <div className="flex items-center mt-2 text-sm text-red-600">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -3.1% vs last period
                  </div>
                </div>
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Order Value</p>
                  <p className="text-2xl font-bold">${avgOrderValue.toFixed(2)}</p>
                  <div className="flex items-center mt-2 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +4.7% vs last period
                  </div>
                </div>
                <BarChart3 className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Sales Report */}
          <Card>
            <CardHeader>
              <CardTitle>Daily Sales Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Sales</TableHead>
                      <TableHead>Customers</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockSalesData.map((day) => (
                      <TableRow key={day.date}>
                        <TableCell>{format(new Date(day.date), 'MMM d')}</TableCell>
                        <TableCell>{day.orders}</TableCell>
                        <TableCell className="font-medium">${day.sales.toFixed(2)}</TableCell>
                        <TableCell>{day.customers}</TableCell>
                      </TableRow>
                    ))}</TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockTopProducts.map((product, index) => (
                <div key={product.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <span className="font-medium">{product.name}</span>
                    </div>
                    <span className="font-semibold">${product.sales}</span>
                  </div>
                  <Progress value={product.percentage} className="h-2" />
                  <p className="text-sm text-muted-foreground text-right">
                    {product.percentage}% of top performer
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Report Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Report Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold mb-4">Sales Performance Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Total revenue increased by 12.5% compared to previous period</li>
                    <li>Average order value improved by $15.20</li>
                    <li>Customer retention rate at 78%</li>
                    <li>Top category: {mockReportData.topCategory}</li>
                    <li>Best performing product: {mockReportData.topProduct}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recommendations:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Focus marketing efforts on top-performing categories</li>
                    <li>Optimize inventory for best-selling products</li>
                    <li>Implement customer retention strategies</li>
                    <li>Consider promotional campaigns for slow-moving items</li>
                    <li>Analyze customer feedback for product improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
