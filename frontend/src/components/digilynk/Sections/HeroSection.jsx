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
import { ArrowBigDown, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedModel from "./Graphics/AnimatedModel";
import robotModel from '../../../assets/3dModels/cute_robot.glb';
import { cn } from "../../../lib/utils";

export default function HeroSection() {
  const navigate = useNavigate();
  function handleWhatsappClick() {
    const phoneNumber = '6353959930'; // replace with actual number
    const message = encodeURIComponent("Hi, I'm contacting you from Digilynk website regarding your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  }
  // const quote = "A subtle yet effective spotlight effect, because your business needs limelight.";
  const quote = "Transforming ideas into digital reality. We provide innovative solutions for your business needs.";

  return (
    <>
      <section className="flex flex-wrap-reverse md:flex-nowrap px-4 py-5 justify-center md:items-center  rounded-b-3xl shadow-2xl h-[calc(100vh-5rem)] bg-white light:bg-slate-50 relative overflow-hidden">
        {/* <div
          className={cn(
            "absolute inset-0",
            "[background-size:100px_40px]",
            "[background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]",
            // "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        /> */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-blue-100 [mask-image:radial-gradient(circle_at_top,transparent_5%,black)] dark:bg-black"></div>
        <div>
          <h1 className="w-full flex flex-row">
            <span className="text-center mx-auto md:ms-3  animate-fadeIn font-semibold text-6xl text-blue-900 md:text-center">Welcome to Digilynk</span>
          </h1>
          {/* <h1 className="w-full flex flex-row">
            <span className="text-center mx-auto md:ms-3 animate-fadeIn font-semibold text-4xl text-zinc-800 md:text-center">Welcome to Digilynk</span>
          </h1> */}
          <p className="z-30 animate-fadeIn max-w-2xl mx-auto ">
            <TextGenerateEffect words={quote} weight="medium" size="small" className="text-center md:text-start " />
          </p>
          {/* <p className="z-30 animate-fadeIn  max-w-2xl mx-auto">
            <TextGenerateEffect words={quote} weight="medium" size="small" className="text-center  md:text-start" />
          </p> */}
          <div className="mx-auto md:ms-3 animate-fadeIn cursor-pointer md:text-2xl text-xl text-zinc-800  flex items-center justify-center md:justify-start space-x-2 h-12 group md:w-fit" onClick={handleWhatsappClick}> <span> Message now </span> <MoveRight id="arrowRight" className="size-7 group-hover:translate-x-2 transition-all" /> </div>
          {/* <div className="ms-3 animate-fadeIn cursor-pointer md:text-2xl text-xl text-zinc-800  flex items-center justify-center md:justify-start space-x-2 h-12 group md:w-fit" onClick={handleWhatsappClick}> <span> Message now </span> <MoveRight id="arrowRight" className="size-7 group-hover:translate-x-2 transition-all" /> </div> */}
        </div>
        {/* <AnimatedModel modelUrl={robotModel} className="animate-fadeIn" /> */}
        {/* <div className="md:hidden"> */}
        <SphereGrid className="animate-fadeIn" />
        {/* </div> */}

      </section>
    </>
  );
}