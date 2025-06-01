import React from 'react';
import Button from '../ui/Button';
import { FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-700/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/10 to-cyan-700/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            {/* Hero Heading with Animated Elements */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium animate-fade-in">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                Transforming Digital Payments in Bangladesh
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 animate-fade-in-up">
                Powering Digital Payments & Mobile Services
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 animate-fade-in-up animation-delay-100">
                Connecting Telcos, MFS, and Enterprises with scalable solutions for mobile billing, digital payments, and content monetization.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<FaArrowRight className="text-xl" />}
              >
                Partner With Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Explore Our Products
              </Button>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4 animate-fade-in-up animation-delay-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">10M+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Users Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Telco Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Digital Products</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block animate-fade-in">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
              <img 
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital payments in Bangladesh" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Element 1 */}
            <div className="absolute top-20 -left-10 z-20 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg font-bold">$</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Instant Payments</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Secure & Fast</div>
                </div>
              </div>
            </div>
            
            {/* Floating Element 2 */}
            <div className="absolute bottom-20 -right-5 z-20 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg animate-float animation-delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-lg font-bold">5G</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Telco Integration</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Nationwide Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;