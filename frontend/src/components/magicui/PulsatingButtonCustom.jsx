"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const PulsatingButtonCustom = React.forwardRef(
  (
    {
      children,
      className,
      variant = "dark",
      intensity = "medium",
      pulseColor = "#0096ff",
      duration = "1.5s",
      ...props
    },
    ref
  ) => {
    const intensityPresets = {
      subtle: {
        size: "4px",
        blur: "4px",
        spread: "4px",
      },
      medium: {
        size: "8px",
        blur: "8px",
        spread: "8px",
      },
      bold: {
        size: "12px",
        blur: "12px",
        spread: "12px",
      },
    };

    const { size, blur, spread } =
      intensityPresets[intensity] || intensityPresets.medium;

    return (
      <div
        className={`relative inline-block rounded-lg ${
          variant === "dark" ? "bg-gray-900" : "bg-white"
        } hover:scale-105 transition-all duration-100`}
      >
        <button
          ref={ref}
          className={cn(
            `relative z-10 w-full h-12 flex items-center justify-center px-8 py-2 
            font-medium transition-all duration-300 focus:outline-none focus:ring-2 
            disabled:pointer-events-none disabled:opacity-50 overflow-visible
            cursor-pointer rounded-lg
            ${
              variant === "dark"
                ? "text-white bg-gray-900"
                : "text-gray-900 bg-white"
            }
            group
            ${className}`
          )}
          style={{
            "--pulse-color": pulseColor,
            "--duration": duration,
            "--pulse-size": size,
            "--pulse-blur": blur,
            "--pulse-spread": spread,
          }}
          {...props}
        >
          <span className="relative z-20 flex items-center justify-center">
            {children}
          </span>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </button>

        {/* Pulsating effect */}
        <div
          className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            animation: `pulse var(--duration) ease-out infinite`,
          }}
        />
      </div>
    );
  }
);

PulsatingButtonCustom.displayName = "PulsatingButtonCustom";
