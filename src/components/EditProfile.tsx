
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface EditProfileProps {
  isOpen: boolean;
  onClose: () => void;
  userData: {
    name: string;
    email: string;
    phone: string;
    location: string;
    shippingAddress: string;
  };
  onSave: (data: any) => void;
}

const EditProfile = ({ isOpen, onClose, userData, onSave }: EditProfileProps) => {
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    location: userData.location,
    shippingAddress: userData.shippingAddress,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="pb-4 border-b border-gray-100">
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <User className="h-5 w-5 text-amber-600" />
            Edit Profile
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-amber-600" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-amber-600" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-amber-600" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-amber-600" />
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Shipping Address</label>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-amber-600" />
              <textarea
                value={formData.shippingAddress}
                onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                rows={3}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-2 pt-4 border-t border-gray-100">
          <Button onClick={handleSave} className="flex-1 bg-amber-600 hover:bg-amber-700">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
          <Button variant="outline" onClick={onClose} className="flex-1">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
