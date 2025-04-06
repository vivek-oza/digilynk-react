// components/SimpleMarquee.jsx
import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props:
 * - direction: "horizontal" | "vertical" (default: "horizontal")
 * - speed: "slow" | "medium" | "fast" (default: "medium")
 * - pauseOnHover: boolean (default: false)
 * - repeat: number (default: 4)
 */
export const SimpleMarquee = ({
  children,
  direction = "horizontal",
  speed = "medium",
  pauseOnHover = false,
  repeat = 4,
  className,
  ...props
}) => {
  const animationMap = {
    slow: "30s",
    medium: "15s",
    fast: "8s",
  };

  const duration = animationMap[speed] || "15s";

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
        direction === "vertical" ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 [gap:var(--gap)]",
            direction === "vertical" ? "flex-col" : "flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            direction === "vertical"
              ? "animate-simple-marquee-vertical"
              : "animate-simple-marquee"
          )}
          style={{
            animationDuration: duration,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
};