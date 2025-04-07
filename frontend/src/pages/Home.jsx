"use client";

import React from "react";
import "../index.css";
import HeroSection from "@/components/digilynk/Sections/HeroSection";
import ServicesSection from "@/components/digilynk/Sections/ServicesSection";
import { FeaturesMarquee } from "@/components/digilynk/Sections/FeaturesMarquee";
import Footer from "../components/digilynk/Sections/Footer";

export default function Home() {
  return (
    <div className="h-full flex flex-col poppins">
      {/* Hero section */}
      <HeroSection />

      {/* Features scroll section */}
      <FeaturesMarquee></FeaturesMarquee>

      {/* Services section */}
      <ServicesSection />

      {/* Contact form again */}
      {/* About */}
      
      {/* Footer */}
      <Footer></Footer>
      
      {/* Whatsapp chat button */}
      {/* Back to top button */}
    </div>
  );
}
