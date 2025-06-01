import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import { MdMailOutline } from 'react-icons/md';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* { logo } */}
              <span className="font-bold text-xl">MoMagic</span>
            </div>
            <p className="text-slate-300 mb-4">
              Powering digital payments & mobile services in Bangladesh through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                <FaTwitterSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                <FaInstagramSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-indigo-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-indigo-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="text-slate-300 hover:text-indigo-400 transition-colors">Products</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-300 hover:text-indigo-400 transition-colors">Direct Carrier Billing</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-indigo-400 transition-colors">Premium SMS</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-indigo-400 transition-colors">OEM App Development</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-indigo-400 transition-colors">Advertising</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-indigo-400 transition-colors">Billing Infrastructure</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <LuMapPin className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-slate-300">+880 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <MdMailOutline className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-slate-300">info@momagicbd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} MoMagic Bangladesh LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;