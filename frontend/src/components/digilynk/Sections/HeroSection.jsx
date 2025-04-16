"use client";

import React from "react";
import heroBanner from "../../../assets/images/heroBanner.svg";
import AppointmentForm from "../AppointmentForm";
import { Particles } from "@/components/magicui/particles";
import { FlickeringGrid } from "../../magicui/flickering-grid";
import { LampContainer } from "../../ui/lamp";
import { motion } from "framer-motion";
import { ScrollDownAnimation } from "../../ui/ScrollDownAnimation";
import { AuroraBackground } from "../../ui/aurora-background";
import { Spotlight } from "../../ui/spotlight-new";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import FerroFluidScene from "./Graphics/FerroFluidScene";
import SpinningLogo from "./Graphics/SpinningLogo";
import { Globe } from "../../ui/globe";
import FourKnotLoop from "./Graphics/FourKnotLoop";
import SphereGrid from "./Graphics/SphereGrid";


export default function HeroSection() {
  // const quote = "A subtle yet effective spotlight effect, because your business needs limelight.";
  const quote = "Transforming ideas into digital reality. We provide innovative solutions for your business needs.";
  return (
    <>
      <section className="flex flex-wrap-reverse md:flex-nowrap px-4 justify-center md:items-center  rounded-b-3xl shadow-2xl min-h-[calc(100vh-5rem)] bg-white light:bg-slate-50 relative overflow-hidden">

        <div className="flex-2">
          <h1 className="text-3xl md:text-5xl scroll font-bold font-pilowlava bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 to-zinc-900 bg-opacity-50">
            <TextGenerateEffect words="Digilynk" weight="bold" size="heading" className=" text-center font-custom-archia md:text-start" />
          </h1>
          <p className="font-normal z-30 animate-fadeIn text-zinc-500 max-w-2xl mx-auto">
            <TextGenerateEffect words={quote} weight="medium" size="small" className="text-center md:text-start" />
          </p>
        </div>

        <SphereGrid></SphereGrid>

        {/* <FourKnotLoop></FourKnotLoop> */}

        {/* <SpinningLogo /> */}

        {/* <Globe /> */}

        {/* <div className="w-[100%] flex md:justify-end justify-center items-center flex-1">
          <FerroFluidScene />
        </div> */}

        {/* <Spotlight theme="light" /> */}
      </section>
    </>
  );
}