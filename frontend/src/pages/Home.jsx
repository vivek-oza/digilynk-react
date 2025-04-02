"use client";

import React from 'react';
import '../index.css';
import HeroSection from '@/components/digilynk/Sections/HeroSection';
import ServicesSection from '@/components/digilynk/Sections/ServicesSection';
import BrandsSection from '@/components/digilynk/Sections/BrandsSection';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { RainbowButton } from '@/components/magicui/rainbow-button';

export default function Home() {
  return (
    <div className='h-full flex flex-col poppins'>
      <HeroSection />
      <BrandsSection />
      <ServicesSection />

{/* Contact form again */}
{/* About */}
{/* Footer */}
{/* Whatsapp chat button */}
{/* Back to top button */}
    </div>
  );
}