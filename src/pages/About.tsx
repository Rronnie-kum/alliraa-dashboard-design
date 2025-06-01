
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Award, Users, Truck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every piece is crafted with passion and attention to detail'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest materials for our collections'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop'
    },
    {
      name: 'Emily Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Rivera',
      role: 'Quality Manager',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Story
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe fashion should be beautiful, sustainable, and accessible to everyone. 
            Our journey began with a simple mission: to create timeless pieces that empower 
            women to express their unique style.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, our fashion brand emerged from a passion for creating 
                  beautiful, high-quality clothing that celebrates individuality and style. 
                  What started as a small boutique has grown into a beloved brand trusted 
                  by thousands of customers worldwide.
                </p>
                <p>
                  We believe that great fashion doesn't have to come at the expense of 
                  ethical practices. That's why we work closely with skilled artisans 
                  and use sustainable materials whenever possible, ensuring that every 
                  piece tells a story of craftsmanship and care.
                </p>
                <p>
                  Today, we continue to push boundaries in design while staying true to 
                  our core values of quality, sustainability, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop"
                alt="Our story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-3">Sustainability</h3>
              <p className="opacity-90">
                We're committed to environmental responsibility and ethical manufacturing practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3">Quality</h3>
              <p className="opacity-90">
                Every piece is made to last, using premium materials and expert craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3">Inclusivity</h3>
              <p className="opacity-90">
                Fashion for everyone - we celebrate diversity and create for all body types.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
