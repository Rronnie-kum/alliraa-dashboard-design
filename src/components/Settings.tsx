
import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Eye, Globe, Moon, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings = ({ isOpen, onClose }: SettingsProps) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    orderUpdates: true,
    promotionalEmails: false,
    twoFactorAuth: false,
    profileVisibility: 'public',
    language: 'English',
    darkMode: false,
    currency: 'USD',
  });

  const handleToggle = (setting: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  const handleSelectChange = (setting: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-gray-100">
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-amber-600" />
            Settings
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Notification Settings */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
              <Bell className="h-4 w-4 text-amber-600" />
              Notifications
            </h3>
            <div className="space-y-2 pl-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Email Notifications</span>
                <button
                  onClick={() => handleToggle('emailNotifications')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.emailNotifications ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.emailNotifications ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Push Notifications</span>
                <button
                  onClick={() => handleToggle('pushNotifications')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.pushNotifications ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.pushNotifications ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Order Updates</span>
                <button
                  onClick={() => handleToggle('orderUpdates')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.orderUpdates ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.orderUpdates ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Promotional Emails</span>
                <button
                  onClick={() => handleToggle('promotionalEmails')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.promotionalEmails ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.promotionalEmails ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
              <Shield className="h-4 w-4 text-amber-600" />
              Security
            </h3>
            <div className="space-y-2 pl-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Two-Factor Authentication</span>
                <button
                  onClick={() => handleToggle('twoFactorAuth')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.twoFactorAuth ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.twoFactorAuth ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
              <Eye className="h-4 w-4 text-amber-600" />
              Privacy
            </h3>
            <div className="space-y-2 pl-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Profile Visibility</span>
                <select
                  value={settings.profileVisibility}
                  onChange={(e) => handleSelectChange('profileVisibility', e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="friends">Friends Only</option>
                </select>
              </div>
            </div>
          </div>

          {/* General Settings */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
              <Globe className="h-4 w-4 text-amber-600" />
              General
            </h3>
            <div className="space-y-2 pl-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Language</span>
                <select
                  value={settings.language}
                  onChange={(e) => handleSelectChange('language', e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Currency</span>
                <select
                  value={settings.currency}
                  onChange={(e) => handleSelectChange('currency', e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="INR">INR (₹)</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center gap-2">
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </span>
                <button
                  onClick={() => handleToggle('darkMode')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.darkMode ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.darkMode ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 pt-4 border-t border-gray-100">
          <Button onClick={handleSave} className="flex-1 bg-amber-600 hover:bg-amber-700">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
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

export default Settings;
