import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Package, Truck, CheckCircle2, XCircle, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  orderNumber: string;
  productImage: string;
  productName: string;
  quantity: number;
  price: number;
  orderDate: string;
  status: 'pending' | 'packed' | 'shipped' | 'out-for-delivery' | 'delivered' | 'cancelled';
  tracking: {
    orderPlaced: string;
    packed: string | null;
    shipped: string | null;
    outForDelivery: string | null;
    delivered: string | null;
  };
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2024-001',
    productImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
    productName: 'Elegant Travel Pouch Bag',
    quantity: 2,
    price: 2999,
    orderDate: '2024-01-15',
    status: 'out-for-delivery',
    tracking: {
      orderPlaced: '2024-01-15 10:30 AM',
      packed: '2024-01-15 02:45 PM',
      shipped: '2024-01-16 09:00 AM',
      outForDelivery: '2024-01-17 08:30 AM',
      delivered: null,
    },
  },
  {
    id: '2',
    orderNumber: 'ORD-2024-002',
    productImage: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400',
    productName: 'Premium Leather Makeup Pouch',
    quantity: 1,
    price: 1899,
    orderDate: '2024-01-10',
    status: 'delivered',
    tracking: {
      orderPlaced: '2024-01-10 11:20 AM',
      packed: '2024-01-10 03:30 PM',
      shipped: '2024-01-11 10:00 AM',
      outForDelivery: '2024-01-12 09:15 AM',
      delivered: '2024-01-12 05:45 PM',
    },
  },
  {
    id: '3',
    orderNumber: 'ORD-2024-003',
    productImage: 'https://images.unsplash.com/photo-1591561954555-607968c989ab?w=400',
    productName: 'Printed Designer Pouch',
    quantity: 3,
    price: 3599,
    orderDate: '2024-01-18',
    status: 'shipped',
    tracking: {
      orderPlaced: '2024-01-18 09:15 AM',
      packed: '2024-01-18 01:00 PM',
      shipped: '2024-01-19 10:30 AM',
      outForDelivery: null,
      delivered: null,
    },
  },
];

const MyOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const { toast } = useToast();

  const getStatusColor = (status: Order['status']) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      packed: 'bg-blue-100 text-blue-800 border-blue-300',
      shipped: 'bg-purple-100 text-purple-800 border-purple-300',
      'out-for-delivery': 'bg-orange-100 text-orange-800 border-orange-300',
      delivered: 'bg-green-100 text-green-800 border-green-300',
      cancelled: 'bg-red-100 text-red-800 border-red-300',
    };
    return colors[status];
  };

  const getStatusIcon = (status: Order['status']) => {
    const icons = {
      pending: Package,
      packed: Package,
      shipped: Truck,
      'out-for-delivery': MapPin,
      delivered: CheckCircle2,
      cancelled: XCircle,
    };
    const Icon = icons[status];
    return <Icon className="h-4 w-4" />;
  };

  const getProgressPercentage = (status: Order['status']) => {
    const progress = {
      pending: 20,
      packed: 40,
      shipped: 60,
      'out-for-delivery': 80,
      delivered: 100,
      cancelled: 0,
    };
    return progress[status];
  };

  const handleCancelOrder = (orderId: string) => {
    const order = orders.find(o => o.id === orderId);
    if (order && order.status !== 'delivered' && order.status !== 'cancelled') {
      setOrders(orders.map(o => 
        o.id === orderId ? { ...o, status: 'cancelled' as const } : o
      ));
      toast({
        title: 'Order Cancelled',
        description: `Order ${order.orderNumber} has been cancelled successfully.`,
      });
    } else {
      toast({
        title: 'Cannot Cancel',
        description: 'This order cannot be cancelled.',
        variant: 'destructive',
      });
    }
  };

  const TrackingTimeline = ({ order }: { order: Order }) => {
    const steps = [
      { key: 'orderPlaced', label: 'Order Placed', date: order.tracking.orderPlaced },
      { key: 'packed', label: 'Packed', date: order.tracking.packed },
      { key: 'shipped', label: 'Shipped', date: order.tracking.shipped },
      { key: 'outForDelivery', label: 'Out for Delivery', date: order.tracking.outForDelivery },
      { key: 'delivered', label: 'Delivered', date: order.tracking.delivered },
    ];

    return (
      <div className="space-y-4 py-4">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.date ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {step.date ? <CheckCircle2 className="h-5 w-5" /> : <div className="w-3 h-3 rounded-full bg-gray-400" />}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-0.5 h-16 ${step.date ? 'bg-amber-800' : 'bg-gray-200'}`} />
              )}
            </div>
            <div className="flex-1 pb-8">
              <h4 className={`font-semibold ${step.date ? 'text-gray-900' : 'text-gray-400'}`}>
                {step.label}
              </h4>
              {step.date && (
                <p className="text-sm text-gray-600 mt-1">{step.date}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-white border-b">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      Order #{order.orderNumber}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                      Placed on {new Date(order.orderDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <Badge className={`w-fit border ${getStatusColor(order.status)}`}>
                    <span className="flex items-center gap-1">
                      {getStatusIcon(order.status)}
                      {order.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex gap-4 flex-1">
                    <img
                      src={order.productImage}
                      alt={order.productName}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{order.productName}</h3>
                      <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
                      <p className="text-lg font-bold text-amber-800 mt-2">₹{order.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700 mb-2">Delivery Progress</p>
                    <Progress value={getProgressPercentage(order.status)} className="h-2 mb-2" />
                    <p className="text-xs text-gray-600">
                      {order.status === 'delivered' ? 'Delivered' : 
                       order.status === 'cancelled' ? 'Cancelled' :
                       `${getProgressPercentage(order.status)}% Complete`}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
                  <Button
                    onClick={() => setSelectedOrder(order)}
                    variant="outline"
                    className="flex-1 sm:flex-none border-amber-800 text-amber-800 hover:bg-amber-50"
                  >
                    View Details
                  </Button>
                  <Button
                    onClick={() => setSelectedOrder(order)}
                    className="flex-1 sm:flex-none bg-amber-800 hover:bg-amber-900 text-white"
                  >
                    Track Order
                  </Button>
                  {order.status !== 'delivered' && order.status !== 'cancelled' && (
                    <Button
                      onClick={() => handleCancelOrder(order.id)}
                      variant="outline"
                      className="flex-1 sm:flex-none border-red-600 text-red-600 hover:bg-red-50"
                    >
                      Cancel Order
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {orders.length === 0 && (
          <Card className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Orders Yet</h3>
            <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">
              Browse Products
            </Button>
          </Card>
        )}
      </main>

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Order Tracking
            </DialogTitle>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="space-y-6">
              <div className="flex gap-4 pb-6 border-b">
                <img
                  src={selectedOrder.productImage}
                  alt={selectedOrder.productName}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {selectedOrder.productName}
                  </h3>
                  <p className="text-sm text-gray-600">Order #{selectedOrder.orderNumber}</p>
                  <p className="text-sm text-gray-600">Quantity: {selectedOrder.quantity}</p>
                  <p className="text-xl font-bold text-amber-800 mt-2">
                    ₹{selectedOrder.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-4">Delivery Timeline</h4>
                <TrackingTimeline order={selectedOrder} />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default MyOrders;