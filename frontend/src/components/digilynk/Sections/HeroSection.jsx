"use client";

import React from "react";
import heroBanner from "../../../assets/images/heroBanner.svg";
import AppointmentForm from "../AppointmentForm";
import { Particles } from "@/components/magicui/particles";
import { FlickeringGrid } from "../../magicui/flickering-grid";

export default function HeroSection() {
  return (
    <>
      <section className=" grid lg:grid-cols-2 rounded-b-3xl shadow-2xl mb-10 h-full min-h-screen">
        {/* <Particles
          color="#000fff"
          size={1}
          ease={50}
          staticity={10}
          quantity={199}
          className="absolute size-full"
        ></Particles> */}
        <FlickeringGrid
          className="absolute pt-2 z-0 size-full h-full w-full"
          squareSize={5}
          gridGap={17}
          color="#000"
          maxOpacity={0.3}
          flickerChance={0.3}

        />
        <div className="flex items-center justify-center">
          <AppointmentForm />
        </div>
        <div className="relative">
          <div className="bg-blue-900 hidden lg:block rounded-br-3xl h-full absolute -z-0 right-0 bottom-0 w-6/12 "></div>
          <img
            src={heroBanner}
            className="w-auto h-full relative right-0"
            alt="Hero Banner"
          />
        </div>
      </section>
    </>
  );
}
