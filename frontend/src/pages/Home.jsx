"use client";

import React from "react";
import "../index.css";
import HeroSection from "@/components/digilynk/Sections/HeroSection";
import ServicesSection from "@/components/digilynk/Sections/ServicesSection";
import { FeaturesMarquee } from "@/components/digilynk/Sections/FeaturesMarquee";
import Footer from "@/components/digilynk/Sections/Footer";
import WhyChooseUs from "@/components/digilynk/Sections/WhyChooseUs";
import ClickSpark from "../components/reactbits/Animations/ClickSpark/ClickSpark";
import WorkWithUs from "../components/digilynk/Sections/WorkWithUs";



export default function Home() {
  return (
    <div className="flex flex-col poppins">
      <ClickSpark
        sparkColor='#000'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Hero section */}
        <div id="top">
          <HeroSection />
        </div>

        {/* About */}
        <WhyChooseUs></WhyChooseUs>

        {/* Services section */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* Work with us secttion*/}
        <WorkWithUs></WorkWithUs>

        {/* Features scroll section */}
        {/* <FeaturesMarquee></FeaturesMarquee> */}



        {/* Whatsapp chat button */}
        {/* Back to top button */}
      </ClickSpark>
    </div>
  );
}
