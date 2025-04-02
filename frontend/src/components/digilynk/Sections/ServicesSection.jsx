import React from 'react'
import AppointmentForm from '../AppointmentForm'
import { Particles } from '@/components/magicui/particles'
import featuresBanner from '../../../assets/images/featuresBanner.png';
import serviceWebDev from '../../../assets/images/serviceWebDev.png';
import serviceQA from '../../../assets/images/serviceQA.png';

import FrostedCard from '@/components/ui/FrostedCard';

export default function () {
    return (
        <>
            <section className='relative rounded-2xl bg-white shadow-2xl border-2 m-4 my-10 pb-2 h-full min-h-screen'>
                <Particles color='#000fff' size={1} ease={50} staticity={10} quantity={499} className='absolute size-full'></Particles>
                <div className="flex flex-col justify-around space-y-2">
                    <div className='flex w-full py-8 pb-6 items-center justify-center text-4xl font-bold'>Services By Digilynk</div>
                    <div className='grid lg:grid-cols-3 w-full min-h-screen'>
                        <div className='z-10 grid lg:col-span-2 gap-2 px-2 lg:pe-1 grid-cols-1 lg:grid-cols-2 row-auto'>
                            <div className='w-full bg-transparent rounded-2xl'>
                                <FrostedCard
                                    imageSrc={serviceWebDev}
                                    imgHeight="300px"
                                    title="Web development"
                                    bulletPoints={["Latest Tech Stack used.", "Attractive and optimized UI/UX.", "Safe and secure development."]}
                                />
                            </div>
                            <div className='w-full  rounded-2xl bg-transparent'>
                                <FrostedCard
                                    imageSrc={serviceQA}
                                    imgHeight="300px"
                                    title="Software Testing"
                                    bulletPoints={["Latest Tools used.", "High qualiity QA Assured.", "High qualiity QA Assured.", "High qualiity QA Assured.", "Test cases, bugs report provided."]}
                                />
                            </div>
                            {/* <div className='w-full  rounded-2xl bg-red-200'>
                                <FrostedCard
                                    imageSrc={serviceWebDev}
                                    imgHeight="300px"
                                    title="Web development"
                                    bulletPoints={["Latest Tech Stack used", "Attractive and optimized UI/UX", "Safe and secure development"]}
                                />
                            </div>
                            <div className='w-full  rounded-2xl bg-blue-200'>
                                <FrostedCard
                                    imageSrc={serviceQA}
                                    imgHeight="300px"
                                    title="Web development"
                                    bulletPoints={["Latest Tech Stack used", "Attractive and optimized UI/UX", "Safe and secure development"]}
                                />
                            </div> */}
                        </div>
                        <div className='z-10 px-2 lg:ps-1 pt-2 lg:pt-0 rounded-2xl'>
                            <div className="w-full h-full bg-transparent flex items-center justify-center rounded-2xl">
                                <img src={featuresBanner} alt="Feature Banner" className='h-auto w-full max-w-4/5' />
                            </div>
                        </div>
                    </div>
                    <div className='z-10 mx-2 rounded-md relative'>
                        <div className='flex py-8 items-center justify-center text-4xl font-bold'>Why Choose Digilynk?</div>
                        <div className='rounded-md w-full h-96'>
                            <h1>Work in progress...</h1>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
