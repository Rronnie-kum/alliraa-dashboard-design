import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Lock, Shield, CreditCard, Smartphone, Building2, Wallet, Banknote, ChevronRight, Tag, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';

// Types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

interface FormErrors {
  [key: string]: string;
}

// Progress Steps Component
const CheckoutProgress = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { id: 1, name: 'Cart', icon: '🛒' },
    { id: 2, name: 'Address', icon: '📍' },
    { id: 3, name: 'Payment', icon: '💳' },
    { id: 4, name: 'Review', icon: '✓' }
  ];

  return (
    <div className="w-full py-4 px-4">
      <div className="flex items-center justify-center max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                  currentStep >= step.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{step.icon}</span>
                )}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium hidden sm:block",
                  currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-1 mx-2 sm:mx-4 rounded-full transition-all duration-300",
                  currentStep > step.id ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Trust Badges Component
const TrustBadges = () => (
  <div className="flex items-center justify-center gap-4 py-3 text-xs text-muted-foreground border-t border-border mt-4">
    <div className="flex items-center gap-1">
      <Lock className="w-3.5 h-3.5" />
      <span>SSL Secured</span>
    </div>
    <div className="flex items-center gap-1">
      <Shield className="w-3.5 h-3.5" />
      <span>100% Safe</span>
    </div>
    <div className="flex items-center gap-1">
      <CreditCard className="w-3.5 h-3.5" />
      <span>Secure Payment</span>
    </div>
  </div>
);

// Order Summary Component
const OrderSummary = ({ 
  items, 
  subtotal, 
  shipping, 
  discount, 
  total,
  promoCode,
  setPromoCode,
  applyPromoCode,
  promoApplied,
  updateQuantity,
  removeItem
}: {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  applyPromoCode: () => void;
  promoApplied: boolean;
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
}) => (
  <Card className="sticky top-4">
    <CardHeader className="pb-3">
      <CardTitle className="text-lg">Order Summary</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {/* Cart Items */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 pb-3 border-b border-border last:border-0">
            <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{item.name}</h4>
              <div className="text-xs text-muted-foreground">
                {item.size && <span>Size: {item.size}</span>}
                {item.color && <span className="ml-2">Color: {item.color}</span>}
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-1 border rounded">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <span className="font-semibold text-sm">₹{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-muted-foreground hover:text-destructive transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Promo Code */}
      <div className="space-y-2">
        <Label className="text-sm font-medium flex items-center gap-2">
          <Tag className="w-4 h-4" />
          Promo Code
        </Label>
        <div className="flex gap-2">
          <Input
            placeholder="Enter code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            className="flex-1"
            disabled={promoApplied}
          />
          <Button
            onClick={applyPromoCode}
            variant="outline"
            size="sm"
            disabled={promoApplied}
          >
            {promoApplied ? 'Applied' : 'Apply'}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">Try: SAVE10, WELCOME20</p>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 pt-3 border-t border-border">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
            {shipping === 0 ? 'FREE' : `₹${shipping}`}
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Discount</span>
            <span>-₹{discount.toLocaleString()}</span>
          </div>
        )}
        <div className="flex justify-between pt-2 border-t border-border">
          <span className="font-semibold text-lg">Total</span>
          <span className="font-bold text-xl text-primary">₹{total.toLocaleString()}</span>
        </div>
      </div>

      <TrustBadges />
    </CardContent>
  </Card>
);

// Address Form Component
const AddressForm = ({ 
  formData, 
  errors, 
  onChange, 
  sameAsBilling, 
  setSameAsBilling 
}: {
  formData: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: string) => void;
  sameAsBilling: boolean;
  setSameAsBilling: (value: boolean) => void;
}) => {
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
          Billing & Shipping Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => onChange('fullName', e.target.value)}
              className={errors.fullName ? 'border-destructive' : ''}
            />
            {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Street Address *</Label>
          <Input
            id="address"
            placeholder="123 Main Street, Apartment 4B"
            value={formData.address}
            onChange={(e) => onChange('address', e.target.value)}
            className={errors.address ? 'border-destructive' : ''}
          />
          {errors.address && <p className="text-xs text-destructive">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              placeholder="Mumbai"
              value={formData.city}
              onChange={(e) => onChange('city', e.target.value)}
              className={errors.city ? 'border-destructive' : ''}
            />
            {errors.city && <p className="text-xs text-destructive">{errors.city}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State *</Label>
            <Select value={formData.state} onValueChange={(value) => onChange('state', value)}>
              <SelectTrigger className={errors.state ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.state && <p className="text-xs text-destructive">{errors.state}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode *</Label>
            <Input
              id="pincode"
              placeholder="400001"
              value={formData.pincode}
              onChange={(e) => onChange('pincode', e.target.value)}
              className={errors.pincode ? 'border-destructive' : ''}
            />
            {errors.pincode && <p className="text-xs text-destructive">{errors.pincode}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Select value={formData.country} onValueChange={(value) => onChange('country', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Checkbox
            id="sameAsBilling"
            checked={sameAsBilling}
            onCheckedChange={(checked) => setSameAsBilling(checked as boolean)}
          />
          <Label htmlFor="sameAsBilling" className="text-sm text-muted-foreground cursor-pointer">
            Shipping address is same as billing address
          </Label>
        </div>
      </CardContent>
    </Card>
  );
};

// Payment Methods Component
const PaymentMethods = ({ 
  selectedMethod, 
  setSelectedMethod 
}: {
  selectedMethod: string;
  setSelectedMethod: (method: string) => void;
}) => {
  const paymentOptions = [
    { id: 'upi', name: 'UPI', description: 'Google Pay, PhonePe, Paytm', icon: Smartphone },
    { id: 'card', name: 'Credit/Debit Card', description: 'Visa, Mastercard, RuPay', icon: CreditCard },
    { id: 'netbanking', name: 'Net Banking', description: 'All major banks supported', icon: Building2 },
    { id: 'wallet', name: 'Wallet', description: 'Paytm, Amazon Pay, Mobikwik', icon: Wallet },
    { id: 'cod', name: 'Cash on Delivery', description: 'Pay when you receive', icon: Banknote }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="space-y-3">
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className={cn(
                "flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all",
                selectedMethod === option.id
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-primary/50"
              )}
              onClick={() => setSelectedMethod(option.id)}
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <option.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <Label htmlFor={option.id} className="font-medium cursor-pointer">{option.name}</Label>
                <p className="text-xs text-muted-foreground">{option.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          ))}
        </RadioGroup>

        {selectedMethod === 'card' && (
          <div className="mt-4 p-4 bg-muted/30 rounded-lg space-y-4">
            <div className="space-y-2">
              <Label>Card Number</Label>
              <Input placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Expiry Date</Label>
                <Input placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label>CVV</Label>
                <Input placeholder="123" type="password" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Name on Card</Label>
              <Input placeholder="John Doe" />
            </div>
          </div>
        )}

        {selectedMethod === 'upi' && (
          <div className="mt-4 p-4 bg-muted/30 rounded-lg space-y-4">
            <div className="space-y-2">
              <Label>UPI ID</Label>
              <Input placeholder="yourname@upi" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Main Checkout Component
const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State
  const [currentStep, setCurrentStep] = useState(2);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Premium Cotton Kurti',
      price: 1299,
      quantity: 2,
      image: '/placeholder.svg',
      size: 'M',
      color: 'Navy Blue'
    },
    {
      id: '2',
      name: 'Designer Leather Handbag',
      price: 2499,
      quantity: 1,
      image: '/placeholder.svg',
      color: 'Brown'
    }
  ]);
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal - discount + shipping;

  // Handlers
  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[+]?[0-9]{10,13}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    else if (!/^[0-9]{6}$/.test(formData.pincode)) newErrors.pincode = 'Invalid pincode';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const applyPromoCode = () => {
    const codes: { [key: string]: number } = {
      'SAVE10': 10,
      'WELCOME20': 20,
      'FIRST15': 15
    };

    if (codes[promoCode]) {
      setDiscountPercent(codes[promoCode]);
      setPromoApplied(true);
      toast({
        title: "Promo Code Applied!",
        description: `${codes[promoCode]}% discount applied successfully.`
      });
    } else {
      toast({
        title: "Invalid Code",
        description: "Please enter a valid promo code.",
        variant: "destructive"
      });
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Product removed from cart."
    });
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      toast({
        title: "Please fill all required fields",
        description: "Check the form for errors.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setCurrentStep(4);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2500));

    toast({
      title: "🎉 Order Placed Successfully!",
      description: "Thank you for your order. Confirmation sent to your email."
    });

    setIsProcessing(false);
    navigate('/my-orders');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-12 h-12 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Add some products to proceed with checkout.</p>
          <Link to="/shop">
            <Button className="bg-primary hover:bg-primary/90">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span className="hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
        <CheckoutProgress currentStep={currentStep} />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Link 
          to="/cart" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            <AddressForm
              formData={formData}
              errors={errors}
              onChange={handleFormChange}
              sameAsBilling={sameAsBilling}
              setSameAsBilling={setSameAsBilling}
            />

            <PaymentMethods
              selectedMethod={paymentMethod}
              setSelectedMethod={setPaymentMethod}
            />

            {/* Place Order Button - Mobile */}
            <div className="lg:hidden">
              <Button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Place Order • ₹{total.toLocaleString()}
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              items={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              total={total}
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              applyPromoCode={applyPromoCode}
              promoApplied={promoApplied}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />

            {/* Place Order Button - Desktop */}
            <div className="hidden lg:block mt-4">
              <Button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg transition-all hover:shadow-xl"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Place Order Securely
                  </span>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                By placing your order, you agree to our Terms & Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
