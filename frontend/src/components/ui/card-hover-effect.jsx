import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, CircleCheck } from "lucide-react";
import { useState } from "react";
import { CardFooter } from "./card";
import { PulsatingButtonCustom } from "../magicui/PulsatingButtonCustom";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-400 dark:bg-zinc-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                {item.points && <CardPoints points={item.points} />}
              </div>
              <CardFooter className="mt-auto pt-6">
                <PulsatingButtonCustom variant="light" className="w-full">
                  Request Quote
                </PulsatingButtonCustom>
              </CardFooter>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-zinc-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col",
        className
      )}
    >
      <div className="relative z-50 flex flex-col h-full p-4">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h3 className={cn("text-zinc-100 tracking-wide mt-4 md:text-2xl font-medium text-2xl", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("mt-4 text-zinc-300 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

export const CardPoints = ({
  points,
  className
}) => {
  return (
    <ul className={cn("mt-6 space-y-3", className)}>
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
          <span className="text-zinc-300 text-sm">{point}</span>
        </li>
      ))}
    </ul>
  );
};
