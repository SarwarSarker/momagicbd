"use client";

import React from 'react';
import Image from 'next/image';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";


const partnerLogos = [
  { name: 'Bkash', logo: '/images/partners/Bkash_logo.png' },
  { name: 'Grameenphone', logo: '/images/partners/Grameenphone_logo.png' },
  { name: 'Banglalink', logo: '/images/partners/Banglalink_logo.png' },
  { name: 'Robi', logo: '/images/partners/Robi_logo.png' },
  { name: 'Teletalk', logo: '/images/partners/Teletalk_logo.png' },
  { name: 'Bontel', logo: '/images/partners/Bontel_logo.png' },
  { name: 'Marcel', logo: '/images/partners/Marcel_logo.png' },
  { name: 'MARS Technology', logo: '/images/partners/MARS_Technology_logo.png' },
  { name: 'MEZ', logo: '/images/partners/MEZ_logo.png' },
  { name: 'Symphony', logo: '/images/partners/Symphony_Logo.png' },
  { name: 'Walton', logo: '/images/partners/Walton_logo.png' },
  { name: 'origin data', logo: '/images/partners/origin_data.png' },
  { name: 'sigma partners', logo: '/images/partners/sigma_partners.png' },
  { name: 'BM', logo: '/images/partners/BM_Logo.png' },
  { name: 'Centpercent', logo: '/images/partners/Centpercent.png' },
  { name: 'Gameloft', logo: '/images/partners/Gameloft.png' },
  { name: 'numbase', logo: '/images/partners/numbase_logo.png' },
  { name: 'Taboola', logo: '/images/partners/Taboola_logo.png' },
  { name: 'Truecaller', logo: '/images/partners/Truecaller.png' },
  { name: 'Unith', logo: '/images/partners/Unith.png' },

  // { name: 'Nagad', logo: '/images/partners/Nagad_logo.png' },
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

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 6, spaceBetween: 40 },
            1024: { slidesPerView: 9, spaceBetween: 60 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {partnerLogos.map((partner, index) => (
            <SwiperSlide key={index}>
              <img
                  src={partner.logo}  
                  alt={partner.name}
                  className="h-full w-full"
                />
            </SwiperSlide>
          ))}
        </Swiper>

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