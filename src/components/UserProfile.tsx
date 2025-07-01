
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Settings, LogOut, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock user data - in a real app, this would come from authentication context
  const userData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    joinedDate: "March 2023",
    avatar: "", // Empty for fallback
    membershipLevel: "Premium Member",
    totalOrders: 24,
    loyaltyPoints: 1,250
  };

  const keyPoints = [
    { icon: Mail, label: "Email", value: userData.email },
    { icon: Phone, label: "Phone", value: userData.phone },
    { icon: MapPin, label: "Location", value: userData.location },
    { icon: Calendar, label: "Member Since", value: userData.joinedDate }
  ];

  const stats = [
    { label: "Total Orders", value: userData.totalOrders },
    { label: "Loyalty Points", value: userData.loyaltyPoints },
    { label: "Status", value: userData.membershipLevel }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="hover:bg-amber-50 hover:text-amber-800">
          <User className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-900">
            User Profile
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Profile Header */}
          <div className="text-center">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback className="bg-amber-100 text-amber-800 text-lg font-semibold">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold text-gray-900">{userData.name}</h3>
            <p className="text-sm text-amber-600 font-medium">{userData.membershipLevel}</p>
          </div>

          {/* Key Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Contact Information
            </h4>
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <point.icon className="h-4 w-4 text-amber-600" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{point.label}</p>
                  <p className="text-sm text-gray-900 truncate">{point.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-bold text-amber-600">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2 pt-4">
            <Button variant="outline" size="sm" className="flex-1">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;
