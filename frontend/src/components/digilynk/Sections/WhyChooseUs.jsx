import React from 'react'
import { ContainerTextFlip } from '../../ui/container-text-flip'
import { Canvas } from '@react-three/fiber'

export default function WhyChooseUs() {
    return (
        <>
            <section className="relative bg-zinc-900 rounded-2xl text-zinc-800 shadow-2xl m-2 my-10 mt-20 p-5 py-16">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="z-20 transition-all text-center drop-shadow-2xl text-white tracking-wide md:text-4xl text-2xl font-semibold">
                        Build
                        {/* Remove Canvas wrapper */}
                        <ContainerTextFlip
                            words={["Faster", "Modern", "Better", "Smarter"]}
                            className="mx-2 md:text-4xl text-2xl"
                            interval={2000}
                            animationDuration={1000}
                        />
                        Websites
                    </div>
                    <div className="z-20 text-md md:text-2xl drop-shadow-2xl text-white md:text-center leading-relaxed mx-4 md:mx-24 lg:mx-48">
                        We design and develop websites, apps and digital experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful.
                    </div>
                </div>
            </section>
        </>
    )
}