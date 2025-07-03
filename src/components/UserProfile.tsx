
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Settings, LogOut, Edit, Package, Star, CreditCard, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import EditProfile from './EditProfile';
import SettingsComponent from './Settings';
import LoginModal from './LoginModal';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
    console.log('User logged out');
    setIsLoggedIn(false);
    setIsOpen(false);
    setIsLoginOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    console.log('User logged in successfully');
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
              User Profile
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
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

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default UserProfile;
