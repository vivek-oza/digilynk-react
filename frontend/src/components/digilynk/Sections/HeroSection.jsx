"use client";

import React from "react";
import heroBanner from "../../../assets/images/heroBanner.svg";
import AppointmentForm from "../AppointmentForm";
import { Particles } from "@/components/magicui/particles";
import { FlickeringGrid } from "../../magicui/flickering-grid";
import { LampContainer } from "../../ui/lamp";
import { motion } from "motion/react";
import "../Sections/CSS/HeroSection.css"

export default function HeroSection() {
  return (
    <>
      <section className="grid rounded-b-3xl shadow-2xl mb-10 h-full min-h-screen bg-[#121212] relative overflow-hidden">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.1, y: 100 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br text-white bg-clip-text text-center text-4xl font-medium tracking-tight md:text-7xl"
          >
            Welcome to <br /> Digilynk
          </motion.h1>

          {/* Scroll Down Animation */}
          <div id="scroll-down-animation">
            <span className="mouse">
              <span className="move"></span>
            </span>
            <h2 className="text-white text-xs sm:text-sm">Scroll down</h2>

          </div>
        </LampContainer>
      </section>
    </>
  );
}



// "use client";

// import React from "react";
// import heroBanner from "../../../assets/images/heroBanner.svg";
// import AppointmentForm from "../AppointmentForm";
// import { Particles } from "@/components/magicui/particles";
// import { FlickeringGrid } from "../../magicui/flickering-grid";
// import { LampContainer } from "../../ui/lamp";
// import { motion } from "motion/react";


// export default function HeroSection() {
//   return (
//     <>
//       <section className=" grid rounded-b-3xl shadow-2xl mb-10 h-full min-h-screen">
//         <LampContainer>
//           <motion.h1
//             initial={{ opacity: 0.5, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             className="mt-8 bg-gradient-to-br text-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight md:text-7xl">
//             Welcome to <br /> Digilynk
//           </motion.h1>
//           <div id="scroll-down-animation">
//             <span class="mouse">
//               <span class="move"></span>
//             </span>
//             <h2 className="bg-red-500">Scroll down</h2>
//           </div>
//         </LampContainer>
//       </section>
//     </>
//   );
// }
