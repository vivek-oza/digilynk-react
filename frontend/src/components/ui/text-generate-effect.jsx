"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
    size = "heading", // 'heading' | 'normal' | 'small'
    weight = "bold"   // 'bold' | 'normal' | 'light'
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate("span", {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
        }, {
            duration: duration ? duration : 1,
            delay: stagger(0.2),
        });
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}>
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    // Size configurations
    const sizeClasses = {
        heading: "text-5xl md:text-7xl",  // Your original responsive sizing
        "sub-heading": "text-2xl md:text-4xl",
        normal: "text-2xl md:text-[2.5rem]",
        small: "text-xl md:text-[1.35rem]",
        smallest: "text-lg md:text-xl"
    };

    // Weight configurations
    const weightClasses = {
        bold: "font-bold",
        normal: "font-normal",
        light: "font-light"
    };

    return (
        <div className={cn(
            "text-center p-3 bg-clip-text text-zinc-800",
            sizeClasses[size],
            weightClasses[weight],
            className
        )}>
            <div className="mt-4">
                <div className="leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};


// OLD 1 TEXT SIZE - GOOD

// "use client";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//     words,
//     className,
//     filter = true,
//     duration = 0.5
// }) => {
//     const [scope, animate] = useAnimate();
//     let wordsArray = words.split(" ");
//     useEffect(() => {
//         animate("span", {
//             opacity: 1,
//             filter: filter ? "blur(0px)" : "none",
//         }, {
//             duration: duration ? duration : 1,
//             delay: stagger(0.2),
//         });
//     }, [scope.current]);

//     const renderWords = () => {
//         return (
//             <motion.div ref={scope}>
//                 {wordsArray.map((word, idx) => {
//                     return (
//                         <motion.span
//                             key={word + idx}
//                             className="opacity-0"
//                             style={{
//                                 filter: filter ? "blur(10px)" : "none",
//                             }}>
//                             {word}{" "}
//                         </motion.span>
//                     );
//                 })}
//             </motion.div>
//         );
//     };

//     return (
//         <div className={cn(
//             "font-bold font-pilowlava text-center p-3 text-4xl md:text-7xl bg-clip-text text-zinc-800",
//             className
//         )}>
//             <div className="mt-4">
//                 <div className="leading-snug tracking-wide">
//                     {renderWords()}
//                 </div>
//             </div>
//         </div>
//     );
// };
