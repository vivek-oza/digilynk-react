import React from "react";
import { cn } from "@/lib/utils"; // your clsx+twMerge util

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  speed?: number; // in seconds
  gap?: string; // tailwind spacing like '4', '8', '16'
  pauseOnHover?: boolean;
  className?: string;
};

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "horizontal",
  reverse = false,
  speed = 20,
  gap = "8",
  pauseOnHover = false,
  className,
}) => {
  const isVertical = direction === "vertical";
  const animClass = isVertical
    ? reverse
      ? "animate-marquee-vertical-reverse"
      : "animate-marquee-vertical"
    : reverse
    ? "animate-marquee-reverse"
    : "animate-marquee";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isVertical ? "h-64 w-full" : "w-full h-14",
        className
      )}
    >
      <div
        className={cn(
          "flex absolute",
          isVertical ? "flex-col" : "flex-row",
          animClass,
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
          gap: `var(--tw-space-${gap}, 2rem)`,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className={cn("flex", isVertical ? "flex-col" : "flex-row", `gap-${gap}`)}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
