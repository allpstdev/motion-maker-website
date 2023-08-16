'use client'

import Accordion from '@/components/content/Accordion'
import ContentHeader from '@/components/content/Header'
import PricingCard from '@/components/content/PricingCard'
import PinkGradientBackground from '@/components/PinkGradientBackground'
import Image from 'next/image'
import { useState } from 'react'

import country from '../../../public/check_line.svg'

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(false)
    return (
        <>
            <PinkGradientBackground />
            <section className='relative left-0 right-0 top-0'>
                <ContentHeader
                    customClass={'mx-auto flex flex-col max-w-screen-md items-center text-center px-6 lg:px-0'}
                    variant={'secondary'}
                    pill_text={'Pricing'}
                    header_text={'Save time and effort with AI-enhanced animation'}
                    highlightHeaderWord={'time'}
                    description_text={
                        'Lorem ipsum dolor sit amet consectetur. Semper ac nisl cursus convallis sem ornare ultricies est. Sed iaculis dui amet sed sociis lacus.'
                    }
                />
            </section>
            <section className='container mx-auto'>
                <div className='mt-8 flex w-full items-center justify-center'>
                    <div className='h-12 w-[244px] rounded-2xl bg-white p-3 shadow'></div>
                </div>
                {/* <div className='inline-flex h-[120px] flex-col items-center justify-start gap-6'>
                    <div className='inline-flex items-center justify-start gap-6 rounded-2xl bg-white p-3 shadow'>
                        <div className='relative h-6 w-6' />
                        <div className='flex items-center justify-start gap-6'>
                            <div className='flex items-start justify-start'>
                                <div className='flex items-center justify-start gap-1'>
                                    <div className='text-center text-base font-medium leading-normal text-slate-800 text-opacity-60'>
                                        Swiss Francs (CHF)
                                    </div>
                                    <div className='relative h-5 w-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='m-auto mb-8 flex max-w-[14rem] justify-center lg:mb-16'>
                        <div className='relative flex w-96 rounded-full bg-gray-50 p-1'>
                            <span
                                className='pointer-events-none absolute inset-0 m-1'
                                aria-hidden='true'
                            >
                                <span
                                    className={`absolute inset-0 w-1/2 transform rounded-full bg-red-700 shadow-sm shadow-indigo-950/10 transition-transform duration-150 ease-in-out ${
                                        isAnnual ? 'translate-x-full' : 'translate-x-0'
                                    }`}
                                ></span>
                            </span>
                            <button
                                className={`relative h-8 min-w-max flex-1 rounded-full text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 ${
                                    isAnnual ? 'text-slate-500' : ' text-slate-800'
                                }`}
                                onClick={() => setIsAnnual(false)}
                                aria-pressed={isAnnual}
                            >
                                Monthly
                            </button>
                            <button
                                className={`relative h-8 min-w-max flex-1 rounded-full text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 ${
                                    isAnnual ? ' text-slate-800' : 'text-slate-500'
                                }`}
                                onClick={() => setIsAnnual(true)}
                                aria-pressed={isAnnual}
                            >
                                Annual <span className={`${isAnnual ? ' text-slate-800' : 'text-slate-500'}`}>(save 25%)</span>
                            </button>
                        </div>
                    </div>
                    <div className='inline-flex h-12 items-start justify-start gap-1 rounded-3xl bg-neutral-100 p-1'>
                        <div className='flex items-center justify-center gap-2 self-stretch rounded-3xl bg-white px-4 py-2 shadow'>
                            <div className='text-center text-base font-medium leading-normal text-slate-800'>Montly</div>
                        </div>
                        <div className='flex items-center justify-center gap-2 self-stretch rounded-3xl px-4 py-2'>
                            <div className='text-center text-base font-medium leading-normal text-slate-800 text-opacity-60'>
                                Annual (save 25%)
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='mb-16 mt-6 flex w-full items-center justify-center'>
                    <label className='relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-neutral-100 p-1'>
                        <input
                            type='checkbox'
                            className='sr-only'
                            checked={isAnnual}
                            onChange={() => setIsAnnual(!isAnnual)}
                        />
                        <span
                            className={`flex items-center rounded-3xl px-4 py-2 text-sm font-medium ${
                                !isAnnual ? 'bg-white text-black' : 'text-slate-800 text-opacity-60'
                            }`}
                        >
                            Monthly
                        </span>
                        <span
                            className={`flex items-center rounded-3xl px-4 py-2 text-sm font-medium ${
                                isAnnual ? 'bg-white text-black' : 'text-slate-800 text-opacity-60'
                            }`}
                        >
                            Annual (save 25%)
                        </span>
                    </label>
                </div>

                <div className='mx-auto flex max-w-7xl flex-wrap justify-around gap-6 xl:justify-between'>
                    <PricingCard
                        header={'Mini'}
                        description={'Up to 5 team members'}
                        currency={'CHF'}
                        price={'149'}
                        perks={['Unlimited storyboards', 'Up to 2 editors', 'Up to 3 projects']}
                        button_color='secondary'
                    />
                    <PricingCard
                        header={'Studio'}
                        description={'Up to 30 team members'}
                        currency={'CHF'}
                        price={'179'}
                        perks={['Unlimited viewers', 'Private share links', 'Offline editing', 'Desktop app']}
                        isGradient={true}
                        pill_text={'Most Popular'}
                        button_color='primary'
                    />
                    <PricingCard
                        header={'Big Studio'}
                        description={'30+ team members'}
                        isCustom={true}
                        perks={['Everything in Pro', 'Enterprise SSO', 'Dedicated support', 'Onboarding & training']}
                    />
                </div>
            </section>
            <section className='container mx-auto mt-16'>
                <ContentHeader
                    customClass={'mx-auto flex flex-col max-w-screen-md items-center text-center px-6 lg:px-0 mb-12'}
                    pill_text={'Students'}
                    header_text={'Special Deals for students and teachers'}
                    highlightHeaderWord={'time'}
                    description_text={
                        'Lorem ipsum dolor sit amet consectetur. Semper ac nisl cursus convallis sem ornare ultricies est. Sed iaculis dui amet sed sociis lacus.'
                    }
                />
                <div className='grid grid-cols-1 place-items-center'>
                    <PricingCard
                        header={'Mini'}
                        description={'Up to 5 team members'}
                        currency={'CHF'}
                        price={'20'}
                        perks={['Unlimited storyboards', 'Up to 2 editors', 'Up to 3 projects']}
                        button_color='secondary'
                    />
                </div>
            </section>
            <section className='container mx-auto my-16 flex flex-col gap-16'>
                <div className='inline-flex w-full flex-col items-center justify-start gap-12'>
                    <div className='flex flex-col items-center justify-start gap-5'>
                        <div className='self-stretch text-center text-4xl font-semibold leading-[44px] text-gray-900'>
                            Frequently asked questions
                        </div>
                        <div className='self-stretch text-center text-xl font-normal leading-[30px] text-slate-600'>
                            Lorem ipsum dolor sit amet consectetur. Elit tellus diam neque neque. A tellus.
                        </div>
                    </div>
                </div>
                <div className='w-full self-center lg:max-w-3xl'>
                    <Accordion
                        question={'Is there a free trial available?'}
                        answer={
                            'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
                        }
                    />
                    <Accordion question={'Is there a free trial available?'} />
                    <Accordion question={'Can I change my plan later?'} />
                    <Accordion question={'What is your cancellation policy?'} />
                    <Accordion question={'Can other info be added to an invoice?'} />
                    <Accordion question={'How does billing work?'} />
                    <Accordion question={'How do I change my account email?'} />
                </div>
                <div className='inline-flex w-full flex-col items-center justify-start gap-8 rounded-2xl bg-gray-50 p-8'>
                    <div className='relative h-14 w-[120px]'>
                        <div className='absolute left-0 top-[8px] inline-flex h-12 w-12 flex-col items-center justify-center'>
                            <div className='relative h-12 w-12 rounded-[200px] border border-gray-900 opacity-10' />
                        </div>
                        <div className='absolute left-[72px] top-[8px] inline-flex h-12 w-12 flex-col items-center justify-center'>
                            <div className='relative h-12 w-12 rounded-[200px] border border-gray-900 opacity-10' />
                        </div>
                        <div className='absolute left-[32px] top-0 inline-flex h-14 w-14 flex-col items-center justify-center rounded-[40px]'>
                            <div className='relative h-14 w-14 rounded-[200px] border border-gray-900 opacity-10' />
                        </div>
                    </div>
                    <div className='flex h-[66px] flex-col items-center justify-start gap-2'>
                        <div className='self-stretch text-center text-xl font-semibold leading-[30px] text-gray-900'>
                            Still have questions?
                        </div>
                        <div className='max-w-3xl text-center text-lg font-normal leading-7 text-slate-600'>
                            Can’t find the answer you’re looking for? Please chat to our friendly team.
                        </div>
                    </div>

                    <div className='inline-flex items-start justify-start gap-3'>
                        <div className='flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 px-4 py-3 shadow'>
                            <div className='text-base font-semibold leading-normal text-white'>Get in touch</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingPage
