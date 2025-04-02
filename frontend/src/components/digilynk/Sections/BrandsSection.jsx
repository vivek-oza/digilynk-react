import { Particles } from '@/components/magicui/particles'
import React from 'react'

export default function BrandsSection() {
    return (
        <>
            <section className='relative grid lg:grid-cols-1 rounded-2xl m-4 my-10 h-52  bg-white'>
                {/* <Particles color='#000fff' size={1} ease={100} staticity={10} quantity={99} className='absolute size-full overflow-clip'></Particles> */}

                <div className="flex items-center justify-evenly flex-col w-full">
                    <div className='flex w-full items-center justify-center text-4xl font-bold'>Brands</div>
                    <marquee speed="10" direction="left">
                        <div className='z-10 flex justify-evenly space-x-2 items-center w-full'>
                            <div className='w-56 h-20 bg-zinc-800 rounded-md'></div>
                            <div className='w-56 h-20 bg-zinc-800 rounded-md'></div>
                            <div className='w-56 h-20 bg-zinc-800 rounded-md'></div>
                            <div className='w-56 h-20 bg-zinc-800 rounded-md'></div>
                            <div className='w-56 h-20 bg-zinc-800 rounded-md'></div>
                        </div>

                    </marquee>
                </div>

            </section>
        </>
    )
}
