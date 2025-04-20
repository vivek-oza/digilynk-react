import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';

import serviceWebDev from "../assets/images/heroBanner.png";
import aboutRobot from "../assets/images/aboutRobot.png";
import digilynkTeam from "../assets/images/digilynkTeam.jpg";
import { Badge, MoveDownRight, MoveRight } from 'lucide-react';

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import GridItem from '../components/ui/GridItem';
import { HoverEffect } from '../components/ui/card-hover-effect';
import { FAQAccordion } from '../components/digilynk/Sections/FAQAccordion';

export default function About() {
    const subHeadingQuote = "Founded in 2024, Digilynk was built on the belief that every business is unique and deserves a digital presence that reflects its individuality. We are a creative, professional team passionate about design, innovation, and delivering results that help our clients grow and transform.";
    const subHeadingQuote2 = "We listen, learn, and understand your goals before we start any project. By combining your vision with our expertise, we find that sweet spot where realistic solutions meet impactful results.";
    // const subHeadingQuote = "Any brand knows that a website is their most important marketing tool. It can deliver rich content, to a wide audience in a short period of time.";

    const digilynkQuote = " And that's why Digilynk focus on clean, simple, and user-friendly design and development for a smooth user experience."
    const digilynkQuote2 = "Whether you're launching a startup or running an established brand, we thoughtfully guide every stage of the process — from research and planning to design, development, and testing — ensuring your site reflects your brand and supports your business goals.";


    return (
        <div className=''>
            <section className="mb-20 flex flex-col justify-center items-start min-h-[calc(100vh-10rem)] bg-blue-100 m-5 rounded-2xl text-zinc-800 p-5">
                <div className='flex flex-row flex-wrap-reverse md:flex-nowrap'>
                    <div className='flex flex-col p-5'>
                        {/* <TextGenerateEffect size='sub-heading' words={"About Us"} className={"text-zinc-800 text-start animate-fadeIn"} />
                        <TextGenerateEffect size='small' weight='normal' words={subHeadingQuote} className={"text-zinc-800 text-start"} />
                        <TextGenerateEffect size='small' weight='normal' words={subHeadingQuote2} className={"text-zinc-800 text-start"} /> */}
                        <h1 className={"text-zinc-800 text-start text-2xl md:text-3xl mb-12"}>About us</h1>
                        <p className={"text-zinc-800 text-start text-xl md:text-xl font-light mb-6"}>
                            {subHeadingQuote}
                        </p>
                        <p className={"text-zinc-800 text-start text-xl md:text-xl font-light mb-6"}>
                            {subHeadingQuote2}
                        </p>
                        <div className='animate-fadeIn'>
                            <a href="#packages" className='group w-fit flex flex-row space-x-2 text-slate-700 hover:text-slate-500 '>
                                <span className='text-xl'>View FAQs directly</span>
                                <div className='border-2 size-8 p-1 rounded-full'>
                                    <MoveRight id='MoveArrow' className='size-5 group-hover:rotate-45 transition-all' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="sticky md:mx-0 mx-3 md:max-w-[400px] md:max-h-[400px] xl:max-w-[700px] my-5 size-full p-2">
                        <img src={aboutRobot} alt="" className='md:max-w-[380px] md:max-h-[380px] rounded-full scale-x-[1]' />
                    </div>
                </div>
            </section>

            <section className="mb-10 flex flex-col justify-center items-start min-h-[calc(100vh-10rem)] bg-lime-200 m-5 rounded-2xl text-zinc-800 p-5">
                <div className='flex flex-row md:flex-nowrap flex-wrap'>
                    <div className=" md:mx-0 mx-3 md:min-w-[540px] xl:max-w-[900px] my-5 size-full p-2 rounded-3xl">
                        <img src={digilynkTeam} alt="" className='rounded-2xl scale-x-[-1]' />
                    </div>
                    <div className='flex flex-col space-y-5 px-5 my-10'>
                        <h1 className='text-2xl md:text-4xl'>Our Values</h1>
                        <p className='text-xl md:text-2xl'>
                            We believe in creativity, professionalism, and collaboration. Every project is unique, and we strive to deliver tailored digital experiences that truly reflect our clients’ vision.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 flex flex-col justify-center items-start min-h-[calc(100vh-10rem)] bg-pink-200 m-5 rounded-2xl text-zinc-800 p-5">
                <div className='flex flex-row md:flex-nowrap flex-wrap'>
                    <div className='flex flex-col space-y-5 px-5 my-10'>
                        <h1 className='text-2xl md:text-4xl'>Mission</h1>
                        <p className='text-xl md:text-2xl'>
                            To design and develop innovative, high-quality websites and apps that help businesses grow, transform, and succeed in the digital world.
                        </p>
                    </div>
                    <div className=" md:mx-0 mx-3 md:min-w-[540px] xl:max-w-[900px] my-5 size-full p-2 rounded-3xl">
                        <img src={digilynkTeam} alt="" className='rounded-2xl scale-x-[-1]' />
                    </div>
                </div>
            </section>

            <section className="mb-10 flex flex-col justify-center items-start min-h-[calc(100vh-10rem)] bg-blue-200 m-5 rounded-2xl text-zinc-800 p-5">
                <div className='flex flex-row md:flex-nowrap flex-wrap'>
                    <div className=" md:mx-0 mx-3 md:min-w-[540px] xl:max-w-[900px] my-5 size-full p-2 rounded-3xl">
                        <img src={digilynkTeam} alt="" className='rounded-2xl scale-x-[-1]' />
                    </div>
                    <div className='flex flex-col space-y-5 px-5 my-10'>
                        <h1 className='text-2xl md:text-4xl'>Vision</h1>
                        <p className='text-xl md:text-2xl'>
                            To be a leading creative partner known for crafting impactful, user-centric digital solutions that set new standards in web development and software testing.
                            Commitment
                        </p>
                    </div>
                </div>
            </section>

            <section id='packages' className='p-10 mb-10'>
                <div className="flex w-full text-zinc-800 flex-col space-y-5 text-center  items-center justify-center text-2xl md:py-10 py-5 md:text-3xl font-semibold">
                    <span>FAQs</span>
                    <span className='md:text-2xl text-lg font-light text-slate-500'>
                        Common questions you might have.
                    </span>
                </div>
                <FAQAccordion />
                {/* <HoverEffect items={projects} /> */}
            </section>



        </div>

    );
}



export const projects = [
    {
        title: "Essential",
        description:
            "For individuals or small businesses needing a clean site with essential pages and clean UI/UX.",
        points: [
            "Sleek, minimal design using UI libraries",
            "Mobile-friendly and responsive",
            "Contact form connected to your email",
            "Hosted on Vercel (free subdomain)",
            "Setup of your text, images, and basic page content",
            "7 Days Free Support",
        ],
        link: "https://example.com",
    },
    {
        title: "Professional",
        description:
            "For growing businesses wanting custom pages, smooth animations, and form features.",
        points: [
            "Everything in Essential Package included",
            "Multiple pages like Services, Gallery, Testimonials, etc.",
            "Smooth animations and interactive UI (using GSAP)",
            "Help with buying and connecting your own domain",
            "Backend setup for storing contact form data",
            "MongoDB database integration",
            "14 Days Free Support",
        ],
        link: "https://example.com",
        badge: "Best Value"
    },
    {
        title: "Elite",
        description:
            "For brands that need full backend support, dashboard features, and advanced design.",
        points: [
            "Everything in Professional Package included",
            "Custom navigation and layout based on your brand",
            "Admin-style dashboard (basic features)",
            "Image optimization and performance tweaks",
            "Site security & SSL setup (free SSL)",
            "Personalized ideas to improve user engagement",
            "Full source code delivery after payment",
            "30 Days Free Support",
        ],
        link: "https://wa.me/${phoneNumber}?text=${message}",
    },
];