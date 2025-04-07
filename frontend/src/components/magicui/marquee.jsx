import { cn } from "@/lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {/* Horizontal gradients */}
      {!vertical && (
        <>
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-zinc-900 via-zinc-900/50 to-transparent" />
        </>
      )}
      {/* Vertical gradients */}
      {vertical && (
        <>
          <div className="absolute left-0 top-0 z-10 h-32 w-full bg-gradient-to-b from-zinc-900 via-zinc-900/50 to-transparent" />
          <div className="absolute left-0 bottom-0 z-10 h-32 w-full bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        </>
      )}
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
