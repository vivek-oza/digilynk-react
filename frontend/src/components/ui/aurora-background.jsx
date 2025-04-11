"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}) => {
    return (
        <div
            className={cn(
                "relative flex h-full flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900 overflow-hidden",
                className
            )}
            {...props}
        >
            {/* Background container */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Aurora effect */}
                <div
                    className={cn(
                        "absolute -inset-[10px] opacity-50 transform-gpu",
                        "bg-[image:var(--white-gradient),var(--aurora)] dark:bg-[image:var(--dark-gradient),var(--aurora)]",
                        "bg-[size:300%_200%] animate-aurora",
                        "backdrop-blur-[10px]",
                        showRadialGradient && "mask-image-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
                    )}
                    style={{
                        '--aurora': 'repeating-linear-gradient(100deg, var(--blue-500) 10%, var(--indigo-300) 15%, var(--blue-300) 20%, var(--violet-200) 25%, var(--blue-400) 30%)',
                        '--dark-gradient': 'repeating-linear-gradient(100deg, var(--black) 0%, var(--black) 7%, transparent 10%, transparent 12%, var(--black) 16%)',
                        '--white-gradient': 'repeating-linear-gradient(100deg, var(--white) 0%, var(--white) 7%, transparent 10%, transparent 12%, var(--white) 16%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4">
                {children}
            </div>
        </div>
    );
};