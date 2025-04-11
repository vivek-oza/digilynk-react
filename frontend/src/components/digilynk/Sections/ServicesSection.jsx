import React from "react";
import AppointmentForm from "../AppointmentForm";
import { Particles } from "@/components/magicui/particles";
import featuresBanner from "../../../assets/images/featuresBanner.png";
import servicesBanner from "../../../assets/images/servicesBanner.png";
import servicesBanner2 from "../../../assets/images/servicesBanner2.png";
import serviceWebDev from "../../../assets/images/serviceWebDev.png";
import serviceQA from "../../../assets/images/serviceQA.png";
import serviceDigital from "../../../assets/images/serviceDigital.png";

import FrostedCard from "@/components/ui/FrostedCard";
import { FlickeringGrid } from "../../magicui/flickering-grid";

export default function () {
  return (
    <>
      <section className="relative rounded-2xl bg-slate-100 shadow-2xl m-2 mb-20 p-5 py-16">
        <div className="flex flex-col justify-around  ">
          <div className="flex w-full items-center justify-center pb-16 text-2xl md:text-4xl font-bold">
            Services By Digilynk
          </div>
          <div className="z-10 grid grid-cols-1 lg:grid-cols-3 lg:col-span-2 gap-4 lg:gap-10 row-auto">
              <div className="w-full bg-transparent rounded-2xl">
                <FrostedCard
                  imageSrc={serviceWebDev}
                  imgHeight="300px"
                  title="Web development"
                  bulletPoints={[
                    "Budget-friendly premium quality",
                    "100% custom websites",
                    "Mobile-ready designs",
                    "High-converting UI/UX",
                    "SEO-built from scratch",
                    "Fast & secure code",
                  ]}
                />
              </div>
              <div className="w-full  rounded-2xl bg-transparent">
                <FrostedCard
                  imageSrc={serviceQA}
                  imgHeight="300px"
                  title="Software Testing"
                  bulletPoints={[
                    "Zero-bug releases",
                    "Manual + automated QA",
                    "Security hardened",
                    "Real-time bug tracking",
                    "End-to-end testing",
                    "Launch with confidence",
                  ]}
                />
              </div>
              <div className="w-full  rounded-2xl   ">
                <FrostedCard
                  imageSrc={serviceDigital}
                  imgHeight="300px"
                  title="Digital Marketing"
                  bulletPoints={[
                    "Guaranteed ROI campaigns",
                    "Top-ranking SEO",
                    "Social media growth",
                    "Click-worthy ad designs",
                    "Data-driven strategies",
                    "Transparent pricing",
                  ]}
                />
              </div>
            </div>

        </div>
      </section>
    </>
  );
}
