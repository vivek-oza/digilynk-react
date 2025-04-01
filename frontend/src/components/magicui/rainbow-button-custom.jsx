"use client";

import React from "react";

export const RainbowButtonCustom = React.forwardRef(
  ({ children, className, variant = "dark", intensity = "medium", ...props }, ref) => {
    const intensityPresets = {
      subtle: {
        borderHeight: "h-0",
        glowHeight: "h-[12px]",
        glowBlur: "blur-[12px]",
        glowOpacity: "opacity-90",
        width: "w-2/3",
        shadow: "shadow-sm",
      },
      medium: {
        borderHeight: "h-0",
        glowHeight: "h-[16px]",
        glowBlur: "blur-[16px]",
        glowOpacity: "opacity-95",
        width: "w-2/3",
        shadow: "shadow-md",
      },
      bold: {
        borderHeight: "h-0",
        glowHeight: "h-[20px]",
        glowBlur: "blur-[20px]",
        glowOpacity: "opacity-100",
        width: "w-2/3",
        shadow: "shadow-lg",
      },
    };

    const { borderHeight, glowHeight, glowBlur, glowOpacity, width, shadow } =
      intensityPresets[intensity] || intensityPresets.medium;

    // Direct HSL color values for a guaranteed rainbow effect
    const rainbowGradient =
      "linear-gradient(90deg, #FF0000, #FF8000, #FFFF00, #00FF00, #0000FF, #8000FF, #FF00FF)";

    return (
      <div
        className={`relative inline-block rounded-full border-[2px]  ${variant === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-zinc-200"} ${shadow} transition-shadow duration-300 hover:shadow-xl`}
      >
        <button
          ref={ref}
          className={`relative z-10 w-full h-12 flex items-center justify-center px-8 py-2 
          font-medium transition-all duration-300 focus:outline-none focus:ring-2 
          disabled:pointer-events-none disabled:opacity-50 overflow-visible
          cursor-pointer rounded-full
          ${variant === "dark" ? "text-white" : "text-gray-900"}
          group
          ${className}`}
          {...props}
        >
          <span className="relative z-20 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-[-2px]">
            {children}
          </span>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 opacity-0  transition-opacity duration-300 rounded-xl" />
        </button>

        {/* Rainbow elements with direct color values */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${width} overflow-visible`}>
          {/* Solid rainbow border */}
          <div
            className={`absolute bottom-0 left-0 right-0 ${borderHeight} rounded-b-lg z-10`}
            style={{
              background: rainbowGradient,
              backgroundSize: "200% 100% 50%",
              animation: "rainbow 2s linear infinite",
            }}
          />

          {/* Glow effect */}
          <div
            className={`absolute -bottom-1 left-0 right-0 ${glowHeight} ${glowBlur} ${glowOpacity} rounded-b-lg z-0 transition-all duration-500 group-hover:opacity-100`}
            style={{
              background: rainbowGradient,
              backgroundSize: "200% 100%",
              animation: "rainbow 2s linear infinite",
            }}
          />
        </div>
      </div>
    );
  }
);

RainbowButtonCustom.displayName = "RainbowButtonCustom";
