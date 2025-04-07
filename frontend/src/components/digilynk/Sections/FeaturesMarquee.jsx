import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// Define your feature data
const firstRow = [
  {
    title: "Affordable, High-Quality Solutions",
    desc: "Get premium services without burning your budget.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Custom Website Development",
    desc: "Tailored web solutions built to match your business goals.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Responsive & Mobile-Ready Design",
    desc: "Your brand looks great on every device.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Beautiful UI, Seamless UX",
    desc: "Designs that wow and flows that convert.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Creative Logo & Brand Identity",
    desc: "Stand out with iconic visuals.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Social Media Creatives",
    desc: "Scroll-stopping designs for every platform.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Business Cards & Print Materials",
    desc: "Leave a lasting impression with pro print assets.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
];

const secondRow = [
  {
    title: "Result-Driven Digital Marketing",
    desc: "Marketing strategies that deliver measurable ROI.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "SEO That Actually Works",
    desc: "Climb rankings. Stay there.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Social Media Growth Strategy",
    desc: "Turn followers into loyal fans.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Ad Banners & Visual Campaigns",
    desc: "Launch campaigns that capture attention.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Pitch Decks & Presentations",
    desc: "Close deals with persuasive visuals.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Packaging & Label Design",
    desc: "Product packaging that pops off the shelf.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Transparent Pricing. No Surprises.",
    desc: "What you see is what you pay.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
];

const thirdRow = [
  {
    title: "Bug-Free Software Testing",
    desc: "Ship polished software with confidence.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Manual & Automated QA Services",
    desc: "Comprehensive test coverage, every time.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Security & Vulnerability Checks",
    desc: "Harden your product against real-world threats.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Real-Time Bug Tracking & Reporting",
    desc: "Track issues fast with live feedback.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Test Case Planning & Execution",
    desc: "Strategic testing tailored to your needs.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "End-to-End Functional Testing",
    desc: "Make sure it all works — from start to finish.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
  {
    title: "Zero-Bug Release Policy",
    desc: "Launch with confidence, not uncertainty.",
    img: "https://fakeimg.pl/70x70?text=DIGILYNK&font=lobster",
  },
];

const FeatureCard = ({ title, desc, img }) => {
  return (
    <div
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-white hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row  items-center gap-3">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
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
    <section className="my-20">
      <div className="flex w-full  items-center justify-center pb-16 text-2xl md:text-4xl font-bold">
        What we offer at Digilynk
      </div>
      <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden">
        {/* First Row */}
        <Marquee pauseOnHover duration="25s">
          {firstRow.map((item, index) => (
            <FeatureCard key={`row1-${index}`} {...item} />
          ))}
        </Marquee>

        {/* Second Row */}
        <Marquee reverse pauseOnHover duration="22s">
          {secondRow.map((item, index) => (
            <FeatureCard key={`row2-${index}`} {...item} />
          ))}
        </Marquee>

        {/* Third Row */}
        <Marquee pauseOnHover duration="28s">
          {thirdRow.map((item, index) => (
            <FeatureCard key={`row3-${index}`} {...item} />
          ))}
        </Marquee>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
}
