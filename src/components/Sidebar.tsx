
import React from 'react';
import { Home, BarChart3, CheckSquare, Users, Settings, FileText, Calendar, Mail } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeItem?: string;
}

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'Dashboard' }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-40">
      <div className="p-6 border-b border-gray-200">
        <Logo className="text-xl font-bold" />
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === activeItem;
          
          return (
            <a
              key={item.label}
              href={item.path}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber-50 text-amber-800 border-r-2 border-amber-800'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
