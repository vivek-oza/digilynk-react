import React from "react";
import { cn } from "@/lib/utils";

export const PulsatingButton = React.forwardRef((
  {
    className,
    children,
    pulseColor = "#0096ff",
    duration = "1.5s",
    intensity = "medium", // 'subtle', 'medium', 'bold'
    variant = "solid", // 'solid', 'outline', 'ghost'
    size = "medium", // 'small', 'medium', 'large'
    ...props
  },
  ref,
) => {
  // Size presets
  const sizePresets = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  // Intensity presets (scale transform)
  const intensityPresets = {
    subtle: "scale(1.02)",
    medium: "scale(1.08)",
    bold: "scale(1.15)"
  };

  // Variant presets
  const variantPresets = {
    solid: "bg-primary text-primary-foreground",
    outline: "border border-primary text-primary bg-transparent",
    ghost: "text-primary bg-transparent hover:bg-primary/10"
  };

  const currentSize = sizePresets[size] || sizePresets.medium;
  const currentIntensity = intensityPresets[intensity] || intensityPresets.medium;
  const currentVariant = variantPresets[variant] || variantPresets.solid;

  return (
    <button
      ref={ref}
      className={cn(
        "relative flex items-center justify-center rounded-lg overflow-hidden",
        "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50",
        "disabled:pointer-events-none disabled:opacity-50",
        currentSize,
        currentVariant,
        className
      )}
      style={{
        "--pulse-color": pulseColor,
        "--duration": duration,
        "--intensity": currentIntensity
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      
      {/* Pulsating background */}
      <div
        className={cn(
          "absolute inset-0 m-auto rounded-lg",
          "bg-[var(--pulse-color)] opacity-20",
          "animate-pulse origin-center"
        )}
        style={{
          animationDuration: duration,
          width: 'calc(100% - 2px)',
          height: 'calc(100% - 2px)'
        }}
      />
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: var(--intensity);
            opacity: 0.3;
          }
        }
      `}</style>
    </button>
  );
});

PulsatingButton.displayName = "PulsatingButton";