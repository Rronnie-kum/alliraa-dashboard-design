
import React from 'react';
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-stone-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand Column */}
          <div className="space-y-3">
            <Logo className="text-2xl font-bold" />
            <p className="text-sm leading-relaxed">
              Experience the Perfect Fusion of Style and Luxury. Where Elegance Meets
              Sophistication in Every Design.
            </p>
            <div className="space-y-1 text-sm">
              <p><strong>Phone:</strong> +222-1800-2628</p>
              <p><strong>Address:</strong> 502 New Design Str, Melbourne, Australia</p>
              <p><strong>Email:</strong> alliraa@domain.com</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="font-bold text-base mb-3">Our Company</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-amber-800 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Our Stores</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Timeline</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-base mb-3">Customer Service</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-amber-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Theme FAQs</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Advanced Search</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Store Locations</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Term & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-base mb-3">Sign Up To Newsletter</h3>
            <p className="text-sm mb-3">
              Sign up for exclusive updates, new arrivals & insider only discounts
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="rounded-full text-sm"
              />
              <Button className="w-full bg-gray-900 hover:bg-gray-800 rounded-full text-sm py-2">
                SUBSCRIBE
              </Button>
            </div>
            <p className="text-xs mt-2">
              ***By entering the e-mail you accept the <a href="#" className="underline">terms and conditions</a> and the <a href="#" className="underline">privacy policy</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
