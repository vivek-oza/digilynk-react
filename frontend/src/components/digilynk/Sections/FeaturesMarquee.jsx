import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// Define your feature data
const firstRow = [
  {
    title: "Affordable, High-Quality Solutions",
    desc: "Get premium services without burning your budget.",
  },
  {
    title: "Custom Website Development",
    desc: "Tailored web solutions built to match your business goals.",
  },
  {
    title: "Responsive & Mobile-Ready Design",
    desc: "Your brand looks great on every device.",
  },
  {
    title: "Beautiful UI, Seamless UX",
    desc: "Designs that wow and flows that convert.",
  },
  {
    title: "Creative Logo & Brand Identity",
    desc: "Stand out with iconic visuals.",
  },
  {
    title: "Social Media Creatives",
    desc: "Scroll-stopping designs for every platform.",
  },
  {
    title: "Business Cards & Print Materials",
    desc: "Leave a lasting impression with pro print assets.",
  },
];

const secondRow = [
  {
    title: "Result-Driven Digital Marketing",
    desc: "Marketing strategies that deliver measurable ROI.",
  },
  {
    title: "SEO That Actually Works",
    desc: "Climb rankings. Stay there.",
  },
  {
    title: "Social Media Growth Strategy",
    desc: "Turn followers into loyal fans.",
  },
  {
    title: "Ad Banners & Visual Campaigns",
    desc: "Launch campaigns that capture attention.",
  },
  {
    title: "Pitch Decks & Presentations",
    desc: "Close deals with persuasive visuals.",
  },
  {
    title: "Packaging & Label Design",
    desc: "Product packaging that pops off the shelf.",
  },
  {
    title: "Transparent Pricing. No Surprises.",
    desc: "What you see is what you pay.",
  },
];

const thirdRow = [
  {
    title: "Bug-Free Software Testing",
    desc: "Ship polished software with confidence.",
  },
  {
    title: "Manual & Automated QA Services",
    desc: "Comprehensive test coverage, every time.",
  },
  {
    title: "Security & Vulnerability Checks",
    desc: "Harden your product against real-world threats.",
  },
  {
    title: "Real-Time Bug Tracking & Reporting",
    desc: "Track issues fast with live feedback.",
  },
  {
    title: "Test Case Planning & Execution",
    desc: "Strategic testing tailored to your needs.",
  },
  {
    title: "End-to-End Functional Testing",
    desc: "Make sure it all works — from start to finish.",
  },
  {
    title: "Zero-Bug Release Policy",
    desc: "Launch with confidence, not uncertainty.",
  },
];

const FeatureCard = ({ title, desc, img }) => {
  return (
    <div
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-white hover:bg-gray-950/[.02]",
        "dark:border-gray-50/[.1] dark:bg-gray-950/80 dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col">
          <div className="text-sm font-medium dark:text-white">{title}</div>
          <p className="text-xs text-gray-600 dark:text-white/50">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export function FeaturesMarquee() {
  return (
    <section className="my-10">
      <div className="flex w-full text-zinc-800 items-center justify-center pb-10 text-2xl md:text-5xl font-bold">
        What we offer at Digilynk
      </div>
      <div className="relative">
        {/* Gradient overlays for the entire container */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white via-white/50 to-transparent" />

        {/* Marquee container */}
        <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden bg-slate-100/30">
          {/* First Row */}
          <Marquee pauseOnHover  className="py-4">
            {firstRow.map((item, index) => (
              <FeatureCard key={`row1-${index}`} {...item} />
            ))}
          </Marquee>

          {/* Second Row */}
          <Marquee reverse pauseOnHover  className="py-4">
            {secondRow.map((item, index) => (
              <FeatureCard key={`row2-${index}`} {...item} />
            ))}
          </Marquee>

          {/* Third Row */}
          <Marquee pauseOnHover  className="py-4">
            {thirdRow.map((item, index) => (
              <FeatureCard key={`row3-${index}`} {...item} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
