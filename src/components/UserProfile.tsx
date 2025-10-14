
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Settings, LogOut, Edit, Package, Star, CreditCard, Shield, Eye, EyeOff, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import EditProfile from './EditProfile';
import SettingsComponent from './Settings';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin');
  const { toast } = useToast();

  // Sign In State
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  // Sign Up State
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpMobile, setSignUpMobile] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [otpMethod, setOtpMethod] = useState<'email' | 'mobile'>('email');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Mock user data - in a real app, this would come from authentication context
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    joinedDate: "March 2023",
    avatar: "", // Empty for fallback
    membershipLevel: "Premium Member",
    totalOrders: 24,
    loyaltyPoints: 1250,
    favoriteCategory: "Ethnic Wear",
    lastOrderDate: "December 15, 2024",
    shippingAddress: "123 Fashion Street, NY 10001",
    paymentMethod: "Visa ending in 4532"
  });

  const profileDetails = [
    { icon: User, label: "Full Name", value: userData.name },
    { icon: Mail, label: "Email Address", value: userData.email },
    { icon: Phone, label: "Phone Number", value: userData.phone },
    { icon: MapPin, label: "Location", value: userData.location },
    { icon: Calendar, label: "Member Since", value: userData.joinedDate },
    { icon: Package, label: "Total Orders", value: `${userData.totalOrders} orders` },
    { icon: Star, label: "Loyalty Points", value: `${userData.loyaltyPoints} points` },
    { icon: Shield, label: "Membership Level", value: userData.membershipLevel },
    { icon: Calendar, label: "Last Order", value: userData.lastOrderDate },
    { icon: MapPin, label: "Shipping Address", value: userData.shippingAddress },
    { icon: CreditCard, label: "Payment Method", value: userData.paymentMethod }
  ];

  const quickStats = [
    { label: "Orders", value: userData.totalOrders, color: "text-blue-600" },
    { label: "Points", value: userData.loyaltyPoints, color: "text-amber-600" },
    { label: "Reviews", value: "12", color: "text-green-600" }
  ];

  const handleEditProfile = () => {
    setIsEditProfileOpen(true);
  };

  const handleSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleSaveProfile = (newData: any) => {
    setUserData(prev => ({ ...prev, ...newData }));
    console.log('Profile updated:', newData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthView('signin');
    // Reset all auth fields
    setSignInEmail('');
    setSignInPassword('');
    setSignUpName('');
    setSignUpEmail('');
    setSignUpMobile('');
    setSignUpPassword('');
    setShowOtpInput(false);
    setOtp('');
    setIsOtpVerified(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signInEmail || !signInPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoggedIn(true);
    toast({
      title: "Success",
      description: "Logged in successfully!",
    });
  };

  const handleGetOtp = () => {
    if (!signUpName || !signUpEmail || !signUpMobile || !signUpPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setShowOtpInput(true);
    toast({
      title: "OTP Sent",
      description: `OTP has been sent to your ${otpMethod === 'email' ? 'email' : 'mobile number'}.`,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isOtpVerified) {
      toast({
        title: "Error",
        description: "Please verify OTP first.",
        variant: "destructive",
      });
      return;
    }

    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoggedIn(true);
    toast({
      title: "Success",
      description: "Account created successfully!",
    });
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      // Simulate OTP verification
      setTimeout(() => {
        setIsOtpVerified(true);
        toast({
          title: "OTP Verified",
          description: "Your OTP has been verified successfully!",
        });
      }, 500);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-amber-50 hover:text-amber-800">
            <User className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto data-[state=open]:slide-in-from-right-1/2 data-[state=closed]:slide-out-to-right-1/2">
          <DialogHeader className="pb-4 border-b border-gray-100">
            <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <User className="h-5 w-5 text-amber-600" />
              {isLoggedIn ? 'User Profile' : 'Authentication'}
            </DialogTitle>
          </DialogHeader>
          
          {isLoggedIn ? (
            // Profile View (existing design)
            <div className="space-y-4 animate-fade-in">
              {/* Profile Header */}
              <div className="text-center py-4">
                <Avatar className="h-20 w-20 mx-auto mb-3">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="bg-amber-100 text-amber-800 text-lg font-semibold">
                    {userData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-gray-900">{userData.name}</h3>
                <p className="text-sm text-amber-600 font-medium">{userData.membershipLevel}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 py-3 bg-gray-50 rounded-lg">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Information List */}
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Profile Details
                </h4>
                {profileDetails.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <detail.icon className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{detail.label}</p>
                      <p className="text-sm text-gray-900 break-words">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  onClick={handleEditProfile}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={handleSettings}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Auth View (Sign In / Sign Up)
            <div className="space-y-4 animate-fade-in">
              {/* Tab Buttons */}
              <div className="flex space-x-2 bg-gray-50 p-1 rounded-lg">
                <Button
                  variant={authView === 'signin' ? 'default' : 'ghost'}
                  size="sm"
                  className={`flex-1 ${authView === 'signin' ? 'bg-amber-600 hover:bg-amber-700' : ''}`}
                  onClick={() => setAuthView('signin')}
                >
                  Sign In
                </Button>
                <Button
                  variant={authView === 'signup' ? 'default' : 'ghost'}
                  size="sm"
                  className={`flex-1 ${authView === 'signup' ? 'bg-amber-600 hover:bg-amber-700' : ''}`}
                  onClick={() => setAuthView('signup')}
                >
                  Sign Up
                </Button>
              </div>

              {authView === 'signin' ? (
                // Sign In Form
                <form onSubmit={handleSignIn} className="space-y-4 py-2 animate-fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Email Address
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-amber-600" />
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="Enter your email"
                        value={signInEmail}
                        onChange={(e) => setSignInEmail(e.target.value)}
                        className="flex-1 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Password
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-amber-600" />
                      <div className="relative flex-1">
                        <Input
                          id="signin-password"
                          type={showSignInPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={signInPassword}
                          onChange={(e) => setSignInPassword(e.target.value)}
                          className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowSignInPassword(!showSignInPassword)}
                        >
                          {showSignInPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="sm"
                      className="w-full bg-amber-600 hover:bg-amber-700"
                    >
                      Login
                    </Button>
                  </div>
                </form>
              ) : (
                // Sign Up Form
                <form onSubmit={handleRegister} className="space-y-4 py-2 animate-fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Full Name
                    </Label>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-amber-600" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Enter your full name"
                        value={signUpName}
                        onChange={(e) => setSignUpName(e.target.value)}
                        className="flex-1 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Email Address
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-amber-600" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        className="flex-1 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-mobile" className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Mobile Number
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-amber-600" />
                      <Input
                        id="signup-mobile"
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={signUpMobile}
                        onChange={(e) => setSignUpMobile(e.target.value)}
                        className="flex-1 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Password
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-amber-600" />
                      <div className="relative flex-1">
                        <Input
                          id="signup-password"
                          type={showSignUpPassword ? 'text' : 'password'}
                          placeholder="Create a password"
                          value={signUpPassword}
                          onChange={(e) => setSignUpPassword(e.target.value)}
                          className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                        >
                          {showSignUpPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Label className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Choose where to receive OTP:
                    </Label>
                    <RadioGroup value={otpMethod} onValueChange={(value: 'email' | 'mobile') => setOtpMethod(value)} className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="otp-email" />
                        <Label htmlFor="otp-email" className="text-sm text-gray-900 font-normal cursor-pointer">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="otp-mobile" />
                        <Label htmlFor="otp-mobile" className="text-sm text-gray-900 font-normal cursor-pointer">Mobile Number</Label>
                      </div>
                    </RadioGroup>

                    {!showOtpInput ? (
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={handleGetOtp}
                      >
                        Get OTP
                      </Button>
                    ) : (
                      <div className="space-y-3 animate-fade-in">
                        <Label className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                          Enter OTP
                        </Label>
                        <div className="flex justify-center">
                          <InputOTP maxLength={6} value={otp} onChange={handleOtpChange}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="sm"
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      disabled={!isOtpVerified}
                    >
                      Register
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Profile Modal */}
      <EditProfile
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        userData={userData}
        onSave={handleSaveProfile}
      />

      {/* Settings Modal */}
      <SettingsComponent
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
};

export default UserProfile;
