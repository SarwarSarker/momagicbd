import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-64 top-0 w-96 h-96 rounded-full bg-indigo-200/30 dark:bg-indigo-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Who We Are
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Elevating digital experiences through innovative technology solutions tailored for Bangladesh
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl relative group">
            <img 
              src="/images/about.jpg" 
              alt="MoMagic Bangladesh Team" 
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <p className="font-bold text-xl">Our Team</p>
                <p>A dedicated group of innovators and problem-solvers</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              MoMagic Bangladesh is a digital technology partner to telcos, banks, and service providers. We simplify mobile billing, enable direct carrier payments, and build smart platforms that reach every user — from smartphones to feature phones.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you&apos;re launching an app or scaling a digital ecosystem, we bring the billing, tech, and telco access to make it work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Key Strength 1 */}
              <div className="bg-white dark:bg-slate-800/50 p-5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-slate-100 dark:border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Telco Integration</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Deep partnerships with all major telcos in Bangladesh for seamless billing and connectivity.</p>
              </div>

              {/* Key Strength 2 */}
              <div className="bg-white dark:bg-slate-800/50 p-5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-slate-100 dark:border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Cross-Platform</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Solutions that work across smartphones, feature phones, and web platforms.</p>
              </div>

              {/* Key Strength 3 */}
              <div className="bg-white dark:bg-slate-800/50 p-5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-slate-100 dark:border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Growth Focus</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">ROI-driven solutions that contribute directly to business growth and revenue.</p>
              </div>

              {/* Key Strength 4 */}
              <div className="bg-white dark:bg-slate-800/50 p-5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-slate-100 dark:border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Secure & Compliant</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Enterprise-grade security with robust compliance to industry standards.</p>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors mt-4 group"
            >
              Learn more about our approach
              <MdArrowOutward className="ml-2 text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;