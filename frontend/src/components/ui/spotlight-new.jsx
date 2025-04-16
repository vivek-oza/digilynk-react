"use client";
import React from "react";
import { motion } from "framer-motion";

export const Spotlight = ({
    theme = "dark",
    translateY = -350,
    width = 560,
    height = 1380,
    smallWidth = 240,
    duration = 7,
    xOffset = 100
} = {}) => {
    // Gradient configurations for dark theme (light blue colors)
    const darkGradients = {
        gradientFirst: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
        gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
        gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
    };

    // Enhanced gradient configurations for light theme (vivid pastels)
    const lightGradients = {
        gradientFirst: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(330, 90%, 70%, .25) 0, hsla(200, 90%, 70%, .2) 50%, transparent 80%)",
        gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(330, 90%, 70%, .2) 0, hsla(200, 90%, 70%, .15) 80%, transparent 100%)",
        gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(330, 90%, 70%, .15) 0, hsla(200, 90%, 70%, .1) 80%, transparent 100%)"
    };

    // Select gradients based on theme
    const gradients = theme === "light" ? lightGradients : darkGradients;

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="pointer-events-none absolute inset-0 h-full w-full"
        >
            {/* Left-side animation */}
            <motion.div
                animate={{
                    x: [0, xOffset, 0],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-screen h-screen z-30 pointer-events-none"
            >
                <div
                    style={{
                        transform: `translateY(${translateY}px) rotate(-45deg)`,
                        background: gradients.gradientFirst,
                        width: `${width}px`,
                        height: `${height}px`,
                    }}
                    className={`absolute top-0 left-0`}
                />

                <div
                    style={{
                        transform: "rotate(-45deg) translate(5%, -50%)",
                        background: gradients.gradientSecond,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                    }}
                    className={`absolute top-0 left-0 origin-top-left`}
                />

                <div
                    style={{
                        transform: "rotate(-45deg) translate(-180%, -70%)",
                        background: gradients.gradientThird,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                    }}
                    className={`absolute top-0 left-0 origin-top-left`}
                />
            </motion.div>

            {/* Right-side animation */}
            <motion.div
                animate={{
                    x: [0, -xOffset, 0],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-screen h-screen z-30 pointer-events-none"
            >
                <div
                    style={{
                        transform: `translateY(${translateY}px) rotate(45deg)`,
                        background: gradients.gradientFirst,
                        width: `${width}px`,
                        height: `${height}px`,
                    }}
                    className={`absolute top-0 right-0`}
                />

                <div
                    style={{
                        transform: "rotate(45deg) translate(-5%, -50%)",
                        background: gradients.gradientSecond,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                    }}
                    className={`absolute top-0 right-0 origin-top-right`}
                />

                <div
                    style={{
                        transform: "rotate(45deg) translate(180%, -70%)",
                        background: gradients.gradientThird,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                    }}
                    className={`absolute top-0 right-0 origin-top-right`}
                />
            </motion.div>
        </motion.div>
    );
};






// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export const Spotlight = ({
//     theme = "dark",
//     translateY = -350,
//     width = 560,
//     height = 1380,
//     smallWidth = 240,
//     duration = 7,
//     xOffset = 100
// } = {}) => {
//     // Gradient configurations for dark theme
//     const darkGradients = {
//         gradientFirst: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
//         gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
//         gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
//     };

//     // Gradient configurations for light theme
//     const lightGradients = {
//         gradientFirst: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 100%, .15) 0, hsla(210, 100%, 90%, .08) 50%, hsla(210, 100%, 85%, 0) 80%)",
//         gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 100%, .12) 0, hsla(210, 100%, 90%, .06) 80%, transparent 100%)",
//         gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 100%, .08) 0, hsla(210, 100%, 85%, .04) 80%, transparent 100%)"
//     };

//     // Select gradients based on theme
//     const gradients = theme === "light" ? lightGradients : darkGradients;

//     return (
//         <motion.div
//             initial={{
//                 opacity: 0,
//             }}
//             animate={{
//                 opacity: 1,
//             }}
//             transition={{
//                 duration: 1.5,
//             }}
//             className="pointer-events-none absolute inset-0 h-full w-full"
//         >
//             <motion.div
//                 animate={{
//                     x: [0, xOffset, 0],
//                 }}
//                 transition={{
//                     duration,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     ease: "easeInOut",
//                 }}
//                 className="absolute top-0 left-0 w-screen h-screen z-30 pointer-events-none"
//             >
//                 <div
//                     style={{
//                         transform: `translateY(${translateY}px) rotate(-45deg)`,
//                         background: gradients.gradientFirst,
//                         width: `${width}px`,
//                         height: `${height}px`,
//                     }}
//                     className={`absolute top-0 left-0`}
//                 />

//                 <div
//                     style={{
//                         transform: "rotate(-45deg) translate(5%, -50%)",
//                         background: gradients.gradientSecond,
//                         width: `${smallWidth}px`,
//                         height: `${height}px`,
//                     }}
//                     className={`absolute top-0 left-0 origin-top-left`}
//                 />

//                 <div
//                     style={{
//                         transform: "rotate(-45deg) translate(-180%, -70%)",
//                         background: gradients.gradientThird,
//                         width: `${smallWidth}px`,
//                         height: `${height}px`,
//                     }}
//                     className={`absolute top-0 left-0 origin-top-left`}
//                 />
//             </motion.div>
//             <motion.div
//                 animate={{
//                     x: [0, -xOffset, 0],
//                 }}
//                 transition={{
//                     duration,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     ease: "easeInOut",
//                 }}
//                 className="absolute top-0 right-0 w-screen h-screen z-30 pointer-events-none"
//             >
//                 <div
//                     style={{
//                         transform: `translateY(${translateY}px) rotate(45deg)`,
//                         background: gradients.gradientFirst,
//                         width: `${width}px`,
//                         height: `${height}px`,
//                     }}
//                     className={`absolute top-0 right-0`}
//                 />

//                 <div
//                     style={{
//                         transform: "rotate(45deg) translate(-5%, -50%)",
//                         background: gradients.gradientSecond,
//                         width: `${smallWidth}px`,
//                         height: `${height}px`,
//                     }}
//                     className={`absolute top-0 right-0 origin-top-right`}
//                 />

//                 <div
//                     style={{
//                         transform: "rotate(45deg) translate(180%, -70%)",
//                         background: gradients.gradientThird,
//                         width: `${smallWidth}px`,
//                         height: `${height}px`,
//                     }}
//                     className={`absolute top-0 right-0 origin-top-right`}
//                 />
//             </motion.div>
//         </motion.div>
//     );
// };