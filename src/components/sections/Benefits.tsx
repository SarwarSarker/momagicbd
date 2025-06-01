import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const benefitsList = [
  'Trusted by telcos, fintechs, and media companies',
  'Full-service platform: billing, content, distribution',
  'Built for Bangladesh\'s real devices and networks',
  'Feature phone + smartphone focus',
  'Proven revenue generation and growth tools',
  'End-to-end technical support and implementation',
  'Regulatory compliance and security',
  'Telco-grade reliability and uptime',
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-64 top-0 w-96 h-96 rounded-full bg-indigo-200/30 dark:bg-indigo-900/10 blur-3xl" />
        <div className="absolute -left-64 bottom-0 w-96 h-96 rounded-full bg-purple-200/20 dark:bg-purple-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Why Choose MoMagic?
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Beyond services, we bring proven expertise to transform how you reach and monetize users
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-slate-700/50">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Our Advantages</h3>
              
              <div className="space-y-4">
                {benefitsList.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                      <FiCheckCircle className="h-6 w-6" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Our Commitments</h3>
              
              <div className="space-y-4">
                {benefitsList.slice(4).map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                      <FiCheckCircle className="h-6 w-6" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-700/50">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">7+</div>
                <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-300">Tech Experts</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100M+</div>
                <div className="text-slate-600 dark:text-slate-300">Transactions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ready to transform your digital strategy?</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s co-create solutions that drive revenue and user engagement across Bangladesh&apos;s diverse digital landscape.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;