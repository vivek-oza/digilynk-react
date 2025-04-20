import React from 'react'
import { ContainerTextFlip } from '../../ui/container-text-flip'
import { Canvas } from '@react-three/fiber'
import { cn } from '../../../lib/utils'
import { PulsatingButtonCustom } from '../../magicui/PulsatingButtonCustom'

export default function WorkWithUs() {
    return (
        <>
            <section className="relative bg-zinc-800 rounded-2xl overflow-hidden md:mx-16 mx-4 my-10 p-5 py-28">
                <div
                    className={cn(
                        "absolute inset-0 rounded-2xl",
                        "[background-size:100px_40px]",
                        "[background-image:linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)]",
                        // "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(circle_at_top,transparent_10%,black)] dark:bg-black"></div>
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="z-20 transition-all text-center drop-shadow-2xl text-zinc-50 tracking-wide md:text-3xl text-2xl font-semibold">
                        Work With Us
                    </div>
                    <div className="z-20 text-lg md:text-2xl drop-shadow-2xl text-zinc-50 md:text-center leading-relaxed mx-4 md:mx-24 lg:mx-48">
                        <PulsatingButtonCustom>Get a quote</PulsatingButtonCustom>
                    </div>
                </div>
            </section>
        </>
    )
}