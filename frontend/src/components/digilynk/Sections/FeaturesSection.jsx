import React from 'react'
import AppointmentForm from '../AppointmentForm'
import { Particles } from '@/components/magicui/particles'

export default function () {
  return (
    <>
        <section className='relative rounded-2xl bg-white shadow-2xl border-2 m-4 my-10 pb-2 h-full min-h-screen'>
            <Particles color='#000fff' size={1} ease={50} staticity={10} quantity={499} className='absolute size-full'></Particles>
            <div className="flex flex-col justify-around space-y-2">
                <div className='flex w-full py-8 pb-6 items-center justify-center text-4xl font-bold'>SERVICES</div>
                <div className='grid md:grid-cols-3 w-full min-h-screen'>            
                    <div className='z-10 grid md:col-span-2 gap-2 px-2 md:pe-1 grid-cols-2 row-auto'>
                        <div className='w-full  rounded-md bg-amber-200'></div>
                        <div className='w-full  rounded-md bg-green-200'></div>
                        <div className='w-full  rounded-md bg-red-200'></div>
                        <div className='w-full  rounded-md bg-blue-200'></div>
                    </div>
                    <div className='z-10 px-2 md:ps-1 rounded-md'>
                        <div className="w-full h-full bg-purple-300 rounded-md"></div>
                    </div>
                </div>
                <div className='z-10 mx-2 rounded-md relative bg-sky-200'>
                <div className='flex py-8 items-center justify-center text-4xl font-bold'>Why Choose Digilynk?</div>
                <div className='bg-emerald-200 rounded-md w-full h-96'></div>
                </div>
            </div>

        </section>
    </>
  )
}
