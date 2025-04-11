"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
    children,
    className,
}) => {
    const [darkMode, setDarkMode] = useState(false);

    // Sync with the HTML dark class
    useEffect(() => {
        const html = document.documentElement;
        const observer = new MutationObserver(() => {
            setDarkMode(html.classList.contains('dark'));
        });

        // Initial check
        setDarkMode(html.classList.contains('dark'));

        // Observe changes to class attribute
        observer.observe(html, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    // Color definitions for both modes
    const colors = {
        dark: {
            background: "bg-slate-950",
            gradientFrom: "from-cyan-500",
            gradientTo: "to-cyan-500",
            accent: "bg-cyan-500",
            accentLight: "bg-cyan-400",
            overlay: "bg-slate-950"
        },
        light: {
            background: "bg-slate-50",
            gradientFrom: "from-cyan-400",
            gradientTo: "to-cyan-400",
            accent: "bg-cyan-400",
            accentLight: "bg-cyan-300",
            overlay: "bg-slate-50"
        }
    };

    const currentColors = darkMode ? colors.dark : colors.light;

    return (
        <div className={cn(
            "relative flex min-h-screen flex-col items-center justify-center overflow-hidden",
            currentColors.background,
            "w-full rounded-md z-0 transition-colors duration-300",
            className
        )}>
            {/* Desktop Version */}
            <div className="flex relative w-full flex-1 scale-y-125 items-center justify-center md:-translate-y-0 -translate-y-40 isolate z-0">
                <motion.div
                    initial={{ opacity: 0.5, width: "5rem" }}
                    whileInView={{ opacity: 1, width: "20rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className={`absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic ${currentColors.gradientFrom} via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]`}
                >
                    <div className={`absolute w-[100%] left-0 ${currentColors.overlay} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
                    <div className={`absolute w-40 h-[100%] left-0 ${currentColors.overlay} bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]`} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "5rem" }}
                    whileInView={{ opacity: 1, width: "20rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className={`absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent ${currentColors.gradientTo} text-white [--conic-position:from_290deg_at_center_top]`}
                >
                    <div className={`absolute w-40 h-[100%] right-0 ${currentColors.overlay} bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]`} />
                    <div className={`absolute w-[100%] right-0 ${currentColors.overlay} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
                </motion.div>
                <div className={`absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 ${currentColors.overlay} blur-2xl`}></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className={`absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full ${currentColors.accent} opacity-50 blur-3xl`}></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    className={`absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full ${currentColors.accentLight} blur-2xl`}
                ></motion.div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "20rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    className={`absolute inset-auto z-50 h-0.5 w-[20rem] -translate-y-[7rem] ${currentColors.accentLight}`}
                ></motion.div>
                <div className={`absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] ${currentColors.overlay}`}></div>
            </div>

            {/* Content container */}
            <div className={cn(
                "absolute bottom-60 md:bottom-0 md:relative z-50 w-full px-4",
                "lg:-translate-y-80 md:-translate-y-96 -translate-y-72",
                "flex flex-col items-center justify-center",
                "md:mt-0"
            )}>
                {children}
            </div>
        </div>
    );
};
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const LampContainer = ({
//     children,
//     className,
// }) => {
//     return (
//         <div className={cn(
//             "relative flex min-h-screen flex-col items-center justify-center overflow-hidden",
//             "bg-slate-950 w-full rounded-md z-0",
//             className
//         )}>
//             {/* Desktop Version (unchanged) */}
//             <div className=" flex relative w-full flex-1 scale-y-125 items-center justify-center md:-translate-y-0 -translate-y-40  isolate z-0">
//                 {/* All original desktop elements remain exactly the same */}
//                 <motion.div
//                     initial={{ opacity: 0.5, width: "5rem" }}
//                     whileInView={{ opacity: 1, width: "20rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 1,
//                         ease: "easeInOut",
//                     }}
//                     style={{
//                         backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//                     }}
//                     className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
//                 >
//                     <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//                     <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
//                 </motion.div>
//                 <motion.div
//                     initial={{ opacity: 0.5, width: "5rem" }}
//                     whileInView={{ opacity: 1, width: "20rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 1,
//                         ease: "easeInOut",
//                     }}
//                     style={{
//                         backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//                     }}
//                     className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
//                 >
//                     <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
//                     <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//                 </motion.div>
//                 <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
//                 <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
//                 <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
//                 <motion.div
//                     initial={{ width: "8rem" }}
//                     whileInView={{ width: "16rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 1,
//                         ease: "easeInOut",
//                     }}
//                     className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
//                 ></motion.div>
//                 <motion.div
//                     initial={{ width: "8rem" }}
//                     whileInView={{ width: "20rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 1,
//                         ease: "easeInOut",
//                     }}
//                     className="absolute inset-auto z-50 h-0.5 w-[20rem] -translate-y-[7rem] bg-cyan-400"
//                 ></motion.div>
//                 <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
//             </div>

//             {/* Content container - works for both mobile and desktop */}
//             <div className={cn(
//                 "absolute bottom-60 md:bottom-0 md:relative z-50 w-full px-4",
//                 "lg:-translate-y-80 md:-translate-y-96 -translate-y-72", // Only apply this transform on desktop
//                 "flex flex-col items-center justify-center",
//                 " md:mt-0" // Add margin top only on mobile
//             )}>
//                 {children}
//             </div>
//         </div>
//     );
// };