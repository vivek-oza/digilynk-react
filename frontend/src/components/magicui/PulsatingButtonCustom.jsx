"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const PulsatingButtonCustom = React.forwardRef(
  (
    {
      children,
      className,
      variant = "dark",
      pulseColor = "#0096ff",
      duration = "1.5s",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          `relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center
          ${
            variant === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-900"
          }
          hover:scale-105 transition-all duration-100`,
          className
        )}
        style={{
          "--pulse-color": pulseColor,
          "--duration": duration,
        }}
        {...props}
      >
        <div className="relative z-10">{children}</div>
        <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
      </button>
    );
  }
);

PulsatingButtonCustom.displayName = "PulsatingButtonCustom";
