"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const RainbowButtonCustom = React.forwardRef(
  ({ children, className, variant = "dark", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          // Base gradient and colors
          `${
            variant === "dark"
              ? "text-white bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,#FF0080,#FF5E3A,#00FF00,#00FFFF,#7928CA)]"
              : "text-gray-900 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,#FF0080,#FF5E3A,#00FF00,#00FFFF,#7928CA)]"
          }`,
          // Glow effect
          "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/7 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,#FF0080,#FF5E3A,#00FF00,#00FFFF,#7928CA)] before:[filter:blur(calc(0.8*1rem))]",
          // Additional hover effects
          "hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200",
          className
        )}
        style={{
          animation: "rainbow 3s linear infinite",
          "--tw-gradient-from": "#FF0080",
          "--tw-gradient-via": "#FF5E3A #00FF00 #00FFFF",
          "--tw-gradient-to": "#7928CA",
        }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div
          className="absolute bottom-[-20%] left-1/2 z-0 h-1/5 w-3/5 -translate-x-1/2 blur-[calc(0.8*1rem)]"
          style={{
            background:
              "linear-gradient(90deg, #FF0080, #FF5E3A, #00FF00, #00FFFF, #7928CA)",
            backgroundSize: "200% 100%",
            animation: "rainbow 3s linear infinite",
          }}
        />
      </button>
    );
  }
);

RainbowButtonCustom.displayName = "RainbowButtonCustom";
