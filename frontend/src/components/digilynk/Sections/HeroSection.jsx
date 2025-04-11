"use client";

import React from "react";
import heroBanner from "../../../assets/images/heroBanner.svg";
import AppointmentForm from "../AppointmentForm";
import { Particles } from "@/components/magicui/particles";
import { FlickeringGrid } from "../../magicui/flickering-grid";
import { LampContainer } from "../../ui/lamp";
import { motion } from "framer-motion";
import { ScrollDownAnimation } from "../ui/ScrollDownAnimation";
import { AuroraBackground } from "../../ui/aurora-background";

export default function HeroSection() {
  return (
    <>
      <section className="grid rounded-b-3xl shadow-2xl min-h-[calc(100vh-5rem)] bg-[#121212] dark:bg-[#121212] light:bg-slate-50 relative overflow-hidden">
        {/* <LampContainer>
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
            Digilynk<br />
          </motion.h1>
          <ScrollDownAnimation />
        </LampContainer> */}

        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 transform-gpu"
          >

            <div>
              <div className="text-5xl md:text-7xl font-bold dark:text-white text-center">
                Digilynk
              </div>
              <div className="font-medium md:text-5xl text-xl dark:text-neutral-200 py-4">
                {/* Maximum Impact. Minimum Spend. */}
                No Fluff. Just Results. Priced Right.
              </div>
            </div>

          </motion.div>
        </AuroraBackground>
      </section>
    </>
  );
}