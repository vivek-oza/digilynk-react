import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';

import serviceWebDev from "../assets/images/serviceWebDev.jpg";
import digilynkTeam from "../assets/images/digilynkTeam.jpg";
import { Badge, MoveDownRight, MoveRight } from 'lucide-react';

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import GridItem from '../components/ui/GridItem';
import { HoverEffect } from '../components/ui/card-hover-effect';

export default function WebDevelopment() {
    const subHeadingQuote = "Any brand knows that a website is a very important tool. It helps to reach a large number of people quickly with engaging content, making it easier to build trust, attract customers, and grow the business.";
    // const subHeadingQuote = "Any brand knows that a website is their most important marketing tool. It can deliver rich content, to a wide audience in a short period of time.";

    const digilynkQuote = " And that's why Digilynk focus on clean, simple, and user-friendly design and development for a smooth user experience."
    const digilynkQuote2 = "Whether you're launching a startup or running an established brand, we thoughtfully guide every stage of the process — from research and planning to design, development, and testing — ensuring your site reflects your brand and supports your business goals.";


    return (
        <div className=''>
            <section className="mb-20 flex flex-col justify-center items-start min-h-[calc(100vh-10rem)] m-5 rounded-2xl text-zinc-800 p-5">
                <div className='flex flex-row flex-wrap-reverse md:flex-nowrap'>
                    <div className='flex flex-col my-10'>
                        <h1 className={"ms-3 text-xl md:text-4xl tracking-wide text-zinc-800 text-start animate-fadeIn"}>Website development</h1>
                        <TextGenerateEffect size='small' weight='normal' words={subHeadingQuote} className={"text-zinc-700 text-start"} />
                        <div className='ms-3 animate-fadeIn'>
                            <a href="#packages" className=' group w-fit flex flex-row space-x-2 text-slate-600 md:text-2xl text-xl '>
                                <span>View services directly</span>
                                <div className='border-2 size-8 p-1 rounded-full'>
                                    <MoveRight id='MoveArrow' className='size-5 group-hover:rotate-45 transition-all' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 md:mx-0 mx-3 md:min-w-[540px] xl:max-w-[900px] my-5 size-full p-2 rounded-3xl"> {/* Add container for proper sizing */}
                        <img src={serviceWebDev} alt="" className='w-full rounded-2xl scale-x-[-1]' />
                    </div>
                </div>
            </section>
            <section className="mb-10 flex flex-col justify-center items-start min-h-[calc(100vh-10rem)] m-5 rounded-2xl text-zinc-800 p-5">
                <div className='flex flex-row md:flex-nowrap flex-wrap'>
                    <div className="bg-zinc-800 md:mx-0 mx-3 md:min-w-[540px] xl:max-w-[900px] my-5 size-full p-2 rounded-3xl"> {/* Add container for proper sizing */}
                        <img src={digilynkTeam} alt="" className='rounded-2xl scale-x-[-1]' />
                    </div>
                    <div className='flex flex-col px-5 my-10'>
                        {/* <TextGenerateEffect size='sub-heading' words={"Website development"} className={"text-zinc-800 text-start animate-fadeIn"} /> */}
                        {/* <TextGenerateEffect size='smallest' weight='normal' words={digilynkQuote} className={"text-zinc-800 text-start animate-fadeIn"} />
                        <TextGenerateEffect size='smallest' weight='normal' words={digilynkQuote2} className={"text-zinc-800 text-start delay-1000"} /> */}
                        <div className='text-[1.35rem] font-normal text-zinc-800'>{digilynkQuote}</div>
                        <div className='text-[1.35rem] mt-7 font-normal text-zinc-800'>{digilynkQuote2}</div>
                    </div>
                </div>
            </section>

            <section id='packages' className='p-10 mb-10'>
                <div className="flex w-full text-zinc-800 flex-col space-y-5 text-center  items-center justify-center text-2xl md:py-10 py-5 md:text-3xl font-semibold">
                    <span>Website development packages By Digilynk</span>
                    <span className='md:text-xl text-lg font-light text-slate-500'>
                        We’re the only web development agency you'll ever need !
                    </span>
                </div>

                <HoverEffect items={projects} />
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
        link: "https://api.whatsapp.com/send/?phone=7990903975&text=Hi%2C+I%27m+contacting+you+from+Digilynk+website+regarding+Essential+web+development+package.&type=phone_number&app_absent=0",
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
        link: "https://api.whatsapp.com/send/?phone=7990903975&text=Hi%2C+I%27m+contacting+you+from+Digilynk+website+regarding+Professional+web+development+package.&type=phone_number&app_absent=0",
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
        link: "https://api.whatsapp.com/send/?phone=7990903975&text=Hi%2C+I%27m+contacting+you+from+Digilynk+website+regarding+Elite+web+development+package.&type=phone_number&app_absent=0",
    },
];





// export const projects = [
//     {
//         title: "Essential",
//         description:
//             "For individuals or small businesses needing a clean site with essential pages and clean UI/UX.",
//         points: [
//             "Up to 4 core pages (Home, About, Services, Contact)",
//             "Minimal and responsive design",
//             "Basic animations and transitions",
//             "Contact form with email forwarding",
//             "Mobile and desktop compatibility",
//             "Free deployment on Vercel",
//             "Basic database support (MongoDB Atlas)",
//         ],
//         link: "https://example.com",
//     },
//     {
//         title: "Professional",
//         description:
//             "For growing businesses wanting custom pages, smooth animations, and form features.",
//         points: [
//             "Everything in Essential included",
//             "Custom pages based on your business",
//             "Enhanced design with animations (GSAP)",
//             "Image galleries, testimonials, or FAQ sections",
//             "Contact form with data storage",
//             "Performance optimization",
//             "Better content layout and visuals",
//         ],
//         link: "https://example.com",
//     },
//     {
//         title: "Elite",
//         description:
//             "For brands that need full backend support, dashboard features, and advanced design.",
//         points: [
//             "Everything in Professional included",
//             "Admin/dashboard panel (basic CMS)",
//             "Advanced form handling & data views",
//             "Better SEO and meta setup",
//             "Security best practices applied",
//             "Fully customizable sections & layout",
//             "Priority support and guidance",
//         ],
//         link: "https://example.com",
//     },
// ];

// ede

// export const projects = [
//     {
//         title: "Essential",
//         description:
//             `For individuals or small businesses needing a clean site with essential pages with clean UI/UX.`,

//         link: "https://stripe.com",
//     },
//     {
//         title: "Professional",
//         description:
//             "For growing businesses wanting custom pages, smooth animations, and form features.",
//         link: "https://netflix.com",
//     },
//     {
//         title: "Elite",
//         description:
//             "For brands that need full backend support, dashboard features, and advanced design.",
//         link: "https://google.com",
//     },

// ];