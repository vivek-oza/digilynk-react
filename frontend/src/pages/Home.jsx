"use client";

import React from "react";
import "../index.css";
import HeroSection from "@/components/digilynk/Sections/HeroSection";
import ServicesSection from "@/components/digilynk/Sections/ServicesSection";
import { FeaturesMarquee } from "@/components/digilynk/Sections/FeaturesMarquee";
import Footer from "@/components/digilynk/Sections/Footer";
import WhyChooseUs from "@/components/digilynk/Sections/WhyChooseUs";



export default function Home() {
  return (
    <div className="flex flex-col poppins">
      {/* Hero section */}
      <HeroSection />

      {/* About */}
      <WhyChooseUs></WhyChooseUs>

      {/* Services section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Features scroll section */}
      <FeaturesMarquee></FeaturesMarquee>



      {/* Whatsapp chat button */}
      {/* Back to top button */}
    </div>
  );
}
