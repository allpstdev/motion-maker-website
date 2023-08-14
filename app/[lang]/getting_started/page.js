'use client'

import PinkGradientBackground from '@/components/PinkGradientBackground'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import checked_icon from '../../../public/checked_icon.svg'
import unchecked_icon from '../../../public/unchecked_icon.svg'
import { InputForm } from './components/Form'

const plans = ['studio', 'artist', 'student']

const GettingStarted = ({}) => {
    const [planSelected, setPlanSelected] = useState('studio')
    return (
        <>
            <div className='flex h-[348px] flex-col justify-end bg-galaxy bg-cover'>
                <div class='inline-flex flex-col items-center justify-start gap-[34px]'>
                    <div class='self-stretch text-center text-[64px] font-bold leading-[54px] text-gray-50'>Get Started!</div>
                    <div class='text-center'>
                        <span className='text-[32px] font-normal leading-loose text-gray-300'>and your first </span>
                        <span className='text-[32px] font-bold leading-loose text-gray-50'>30 days</span>
                        <span className='text-[32px] font-bold leading-loose text-gray-300'> of </span>
                        <span className='text-[32px] font-bold leading-loose text-violet-500'>Motion Maker</span>
                        <span className='text-[32px] font-normal leading-loose text-gray-300'> are on us. </span>
                    </div>
                </div>
                <PinkGradientBackground className={' h-24 rotate-180'} />
            </div>
            <div className='small-box-pattern container mx-auto flex flex-col justify-center gap-6 px-6 py-16 lg:flex-row lg:px-0'>
                <div className='inline-flex h-auto w-full  max-w-[588px] flex-col gap-4 rounded-[32px] border border-slate-800 border-opacity-10 bg-white p-12 lg:w-1/2'>
                    <div className='text-2xl font-semibold leading-loose text-slate-800'>Select your plan:</div>
                    <Accordion
                        onValueChange={e => setPlanSelected(e)}
                        defaultValue='studio'
                        type='single'
                        collapsible
                        className='w-full'
                    >
                        <AccordionItem
                            value='studio'
                            className='h-auto rounded-xl border border-zinc-100 px-4  
                    [&[data-state=open]]:border-violet-400 [&[data-state=open]]:bg-purple-100'
                        >
                            <AccordionTrigger className='[&[data-state=open]>div>div>span]:text-indigo-900'>
                                <div className='flex flex-row place-items-center justify-start gap-4'>
                                    <Image
                                        src={planSelected === plans[0] ? checked_icon : unchecked_icon}
                                        alt='checked_icon'
                                        height={32}
                                        width={32}
                                    />
                                    <div className='w-full text-[15px] font-semibold leading-normal text-gray-500'>
                                        Motion Maker
                                        <span className='text-zinc-900'> Studio</span>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='mb-4 bg-white px-4 pt-4'>
                                <p className='border-b pb-3 text-base font-normal leading-normal text-slate-800'>
                                    Features are divided by role inside the studio to support team members in various functions enhancing
                                    their workflow using AI:
                                </p>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>COLLABORATE</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            with your entire team like never before - powered by AI{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>EMPOWER</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            creatives and producers to directly control the artistic process{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>ASSIST</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            the animation teams with personalized automation of manual processes{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>PROFIT</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            from an AI-driven back-office management automating admin tasks{' '}
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='artist'
                            className='h-auto rounded-xl border border-zinc-100 px-4  
                    [&[data-state=open]]:border-violet-400 [&[data-state=open]]:bg-purple-100'
                        >
                            <AccordionTrigger className='[&[data-state=open]>div>div>span]:text-indigo-900'>
                                <div className='flex flex-row place-items-center justify-start gap-4'>
                                    <Image
                                        src={planSelected === plans[1] ? checked_icon : unchecked_icon}
                                        alt='checked_icon'
                                        height={32}
                                        width={32}
                                    />
                                    <div className='w-full text-[15px] font-semibold leading-normal text-gray-500'>
                                        Motion Maker
                                        <span className='text-zinc-900'> Artist</span>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='mb-4 bg-white px-4 pt-4'>
                                <p className='border-b pb-3 text-base font-normal leading-normal text-slate-800'>
                                    Features are divided by role inside the studio to support team members in various functions enhancing
                                    their workflow using AI:
                                </p>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>COLLABORATE</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            with your entire team like never before - powered by AI{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>EMPOWER</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            creatives and producers to directly control the artistic process{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>ASSIST</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            the animation teams with personalized automation of manual processes{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>PROFIT</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            from an AI-driven back-office management automating admin tasks{' '}
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='student'
                            className='h-auto rounded-xl border border-zinc-100 px-4  
                    [&[data-state=open]]:border-violet-400 [&[data-state=open]]:bg-purple-100'
                        >
                            <AccordionTrigger className='[&[data-state=open]>div>div>span]:text-indigo-900'>
                                <div className='flex flex-row place-items-center justify-start gap-4'>
                                    <Image
                                        src={planSelected === plans[2] ? checked_icon : unchecked_icon}
                                        alt='checked_icon'
                                        height={32}
                                        width={32}
                                    />
                                    <div className='w-full text-[15px] font-semibold leading-normal text-gray-500'>
                                        Motion Maker
                                        <span className='text-zinc-900'> Student</span>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='mb-4 bg-white px-4 pt-4'>
                                <p className='border-b pb-3 text-base font-normal leading-normal text-slate-800'>
                                    Features are divided by role inside the studio to support team members in various functions enhancing
                                    their workflow using AI:
                                </p>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>COLLABORATE</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            with your entire team like never before - powered by AI{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>EMPOWER</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            creatives and producers to directly control the artistic process{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>ASSIST</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            the animation teams with personalized automation of manual processes{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 inline-flex gap-3 pt-3'>
                                    <BadgeCheck />
                                    <div className='inline-flex w-full flex-col items-start justify-start'>
                                        <div className='text-base font-semibold leading-normal text-slate-800'>PROFIT</div>
                                        <div className='text-base font-normal leading-normal text-slate-800'>
                                            from an AI-driven back-office management automating admin tasks{' '}
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='inline-flex h-auto w-full max-w-[588px] flex-col gap-4 rounded-[32px] border border-slate-800 border-opacity-10 bg-gray-50 p-12 lg:w-1/2'>
                    <div className='mb-12 flex flex-col items-start justify-start gap-5'>
                        <div className='self-stretch text-4xl font-semibold leading-[44px] text-gray-900'>Enter your details:</div>
                        <div className='self-stretch text-xl font-normal leading-[30px] text-slate-600'>
                            Lorem ipsum dolor sit amet consectetur. Viverra massa phasellus aliquam nunc nunc. Lorem.
                        </div>
                    </div>
                    <InputForm />
                </div>
            </div>
        </>
    )
}
export default GettingStarted
