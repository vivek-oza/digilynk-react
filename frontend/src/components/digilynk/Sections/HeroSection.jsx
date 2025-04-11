"use client";

import React from "react";
import heroBanner from "../../../assets/images/heroBanner.svg";
import AppointmentForm from "../AppointmentForm";
import { Particles } from "@/components/magicui/particles";
import { FlickeringGrid } from "../../magicui/flickering-grid";
import { LampContainer } from "../../ui/lamp";
import { motion } from "framer-motion";
import { ScrollDownAnimation } from "../ui/ScrollDownAnimation";

export default function HeroSection() {
  return (
    <>
      <section className="grid rounded-b-3xl shadow-2xl mb-10 h-full min-h-screen bg-[#121212] dark:bg-[#121212] light:bg-slate-50 relative overflow-hidden">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.1, y: 100 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br p-2 from-slate-700 via-slate-800 to-slate-950 dark:from-blue-200 dark:to-blue-50 text-transparent bg-clip-text text-center text-5xl font-medium tracking-tight md:text-7xl"
          >
            Welcome to <br /> Digilynk
          </motion.h1>

          {/* Scroll Down Animation - Now using the new component */}
          <ScrollDownAnimation />
        </LampContainer>
      </section>
    </>
  );
}