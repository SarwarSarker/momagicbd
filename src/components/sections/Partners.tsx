import React from 'react';

// Mock Partner Logos - In a real implementation, you'd use actual logos
const partnerLogos = [
  { name: 'Telco Partner 1', logo: '/gp_logo.png' },
  { name: 'Telco Partner 2', logo: '/gp_logo.png' },
  { name: 'Telco Partner 3', logo: '/gp_logo.png' },
  { name: 'MFS Partner 1', logo: '/gp_logo.png' },
  { name: 'MFS Partner 2', logo: '/gp_logo.png' },
  { name: 'OEM Partner', logo: '/gp_logo.png' },
];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0284c7] to-[#0369a1]">
            Partners & Reach
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            We&apos;re deeply integrated with Bangladesh&apos;s top mobile operators and financial platforms
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {partnerLogos.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800/50 shadow-lg rounded-xl p-6 flex items-center justify-center group hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 border border-primary-100 dark:border-slate-700/50"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ready to transform your digital strategy?</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s co-create solutions that drive revenue and user engagement across Bangladesh&apos;s diverse digital landscape.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-[#0284c7] to-[#0369a1] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;