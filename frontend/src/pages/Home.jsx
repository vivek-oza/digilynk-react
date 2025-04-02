"use client";

import React from 'react';
import '../index.css';
import HeroSection from '@/components/digilynk/Sections/HeroSection';
import FeaturesSection from '@/components/digilynk/Sections/FeaturesSection';
import BrandsSection from '@/components/digilynk/Sections/BrandsSection';

export default function Home() {
  return (
    <div className='h-full flex flex-col poppins'>
      <HeroSection />
      <BrandsSection />
      <FeaturesSection />
    </div>
  );
}