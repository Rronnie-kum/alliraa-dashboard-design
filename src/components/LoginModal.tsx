import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Basic validation
      if (!email || !password) {
        toast({
          title: "Error",
          description: "Please fill in all fields.",
          variant: "destructive",
        });
        return;
      }

      // Simulate login process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "Login successful!",
      });
      
      onLoginSuccess();
      onClose();
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Login failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setShowPassword(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="pb-4 border-b border-gray-100">
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Mail className="h-5 w-5 text-amber-600" />
            Sign In
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-amber-600" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4 text-amber-600" />
              <div className="relative flex-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <button 
              type="button"
              className="text-sm text-amber-800 hover:text-amber-900 transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <div className="flex space-x-2 pt-4 border-t border-gray-100">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-amber-600 hover:bg-amber-700"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
            <Button 
              type="button"
              variant="outline" 
              onClick={handleClose} 
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;