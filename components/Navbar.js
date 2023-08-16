'use client'

import { dictionary } from '@/content'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import motion_maker_logo from '../public/motion_maker_logo.svg'
import social_fb from '../public/social_fb.svg'
import social_insta from '../public/social_insta.svg'
import social_twitter from '../public/social_twitter.svg'
import { Button } from './ui/button'

const Navbar = () => {
    const params = useParams()
    const { link_1, link_2, link_3, link_4_part_1, link_4_thin, link_4_part_2, link_5 } = dictionary[params.lang]?.navbar

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className='container mx-auto bg-transparent'>
            {/* { gap-8 ?px-6 } */}
            <div className='flex h-16 items-center gap-6 pl-1'>
                <a
                    className='block text-teal-600'
                    href='/'
                >
                    <span className='sr-only'>Home</span>
                    <Image
                        src={motion_maker_logo}
                        alt=''
                        height={32}
                        weight={32}
                    />
                </a>

                <div className='flex flex-1 items-center justify-end md:justify-between'>
                    <nav
                        aria-label='Global'
                        className='hidden md:block'
                    >
                        <ul className='flex items-center gap-6 text-sm'>
                            <li>
                                <a
                                    className='text-gray-500 transition hover:text-gray-500/75'
                                    href='/'
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    className='text-gray-500 transition hover:text-gray-500/75'
                                    href='/'
                                >
                                    Pricing
                                </a>
                            </li>

                            <li>
                                <a
                                    className='flex gap-1 text-gray-500 transition hover:text-gray-500/75'
                                    href='/'
                                >
                                    Get Started
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='20'
                                        height='20'
                                        viewBox='0 0 20 20'
                                        fill='none'
                                    >
                                        <path
                                            d='M9.99999 10.9766L14.125 6.85156L15.3033 8.0299L9.99999 13.3332L4.69666 8.0299L5.87499 6.85156L9.99999 10.9766Z'
                                            fill='#2F2B43'
                                            fillOpacity='0.6'
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    className='text-gray-500 transition hover:text-gray-500/75'
                                    href='/'
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex flex-row items-center divide-x-2'>
                        <div className='flex flex-row justify-between gap-4 px-6'>
                            <Image
                                alt='social facebook'
                                src={social_fb}
                                height={24}
                                width={24}
                                sizes='100vw'
                            />
                            <Image
                                alt='social twitter'
                                src={social_twitter}
                                height={24}
                                width={24}
                                sizes='100vw'
                            />
                            <Image
                                alt='social instagram'
                                src={social_insta}
                                height={24}
                                width={24}
                                sizes='100vw'
                            />
                            <a
                                className='text-gray-500 transition hover:text-gray-500/75'
                                href='/'
                            >
                                Contact
                            </a>
                        </div>
                        <div className='flex flex-row items-center gap-6 px-0 lg:px-6'>
                            <div className='sm:flex sm:gap-4'>
                                <a
                                    className='text-gray-500 transition hover:text-gray-500/75'
                                    href='/'
                                >
                                    Log in
                                </a>
                            </div>
                            <Button
                                variant='default'
                                className='h-8 w-36 rounded-lg border border-slate-800 border-opacity-10 bg-white px-3 py-1.5 text-center text-sm font-medium leading-tight text-black shadow'
                                onClick={() => console.log('TODO')}
                            >
                                Try Motion Maker
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
