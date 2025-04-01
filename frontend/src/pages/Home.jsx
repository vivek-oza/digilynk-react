"use client";

import React from 'react';
import '../index.css';
import HeroSection from '@/components/digilynk/Sections/HeroSection';

export default function Home() {
  return (
    <div className='h-full flex flex-col'>
      <HeroSection />
      <div className='min-h-80 bg-red-100 spacerrr'></div>
    </div>
  );
}