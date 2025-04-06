"use client";

import React from 'react';
import '../index.css';
import HeroSection from '@/components/digilynk/Sections/HeroSection';
import ServicesSection from '@/components/digilynk/Sections/ServicesSection';
import { FeaturesMarquee } from '@/components/digilynk/Sections/FeaturesMarquee';


export default function Home() {
  return (
    <div className='h-full flex flex-col poppins'>

      <HeroSection />
      {/* <BrandsSection className=""/> */}
      <FeaturesMarquee></FeaturesMarquee>
      <ServicesSection />

      {/* Contact form again */}
      {/* About */}
      {/* Footer */}
      {/* Whatsapp chat button */}
      {/* Back to top button */}
    </div>
  );
}