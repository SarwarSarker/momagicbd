"use client";

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { FiSmartphone, FiZap } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';
import { GoServer } from 'react-icons/go';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <FiZap className="h-6 w-6" />,
    title: 'Direct Carrier Billing (DCB)',
    description: 'Instant airtime payments for games, subscriptions, and digital content.',
    category: 'Payments',
    features: ['Multiple carrier integration', 'Real-time processing', 'Automated reconciliation'],
  },
  {
    icon: <FaRegHeart className="h-6 w-6" />,
    title: 'Premium SMS (PSMS)',
    description: 'Telco-integrated monetization via shortcodes and bulk services.',
    category: 'Messaging',
    features: ['Shortcode management', 'Bulk SMS capabilities', 'Campaign tracking'],
  },
  {
    icon: <FiSmartphone className="h-6 w-6" />,
    title: 'OEM App Development',
    description: 'Custom Android apps preloaded on devices — optimized for growth and monetization.',
    category: 'Development',
    features: ['Native Android apps', 'Performance optimization', 'Analytics integration'],
  },
  {
    icon: <AiOutlineBarChart className="h-6 w-6" />,
    title: 'Advertising (DSP & Telco Traffic)',
    description: 'High-performance campaigns using operator-level targeting.',
    category: 'Marketing',
    features: ['Operator targeting', 'Real-time bidding', 'Campaign optimization'],
  },
  {
    icon: <GoServer className="h-6 w-6" />,
    title: 'Billing Infrastructure',
    description: 'Full-stack platforms for telco charging, reporting, and revenue sharing.',
    category: 'Infrastructure',
    features: ['Scalable architecture', 'Multi-tenant support', 'Real-time reporting'],
  },
];

const categories = Array.from(new Set(services.map(service => service.category)));

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0284c7] to-[#0369a1]">
            What We Do
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            End-to-end digital solutions that connect carriers, content providers, and consumers
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === 'all'
                ? 'bg-[#0284c7] text-white shadow-lg shadow-primary-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700'
              }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category
                  ? 'bg-[#0284c7] text-white shadow-lg shadow-primary-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Card 
              key={index}
              onClick={() => setSelectedService(service)}
              className={`cursor-pointer transform transition-all duration-300 hover:scale-105
                ${selectedService?.title === service.title ? 'ring-2 ring-primary-500' : ''}`}
              
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#0284c7] flex items-center justify-center text-white shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                <span className="inline-block px-3 py-1 bg-[#f0f9ff] text-[#0284c7] text-sm rounded-full">
                  {service.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;