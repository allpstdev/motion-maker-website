'use client'

import { dictionary } from '@/content'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import social_fb from '../public/social_fb.svg'
import social_insta from '../public/social_insta.svg'
import social_twitter from '../public/social_twitter.svg'
import SecondaryButton from './SecondaryButton'

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
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                    >
                        <mask
                            id='mask0_332_29335'
                            style={{ maskType: 'luminance' }}
                            maskUnits='userSpaceOnUse'
                            x='0'
                            y='0'
                            width='31'
                            height='31'
                        >
                            <path
                                d='M15.5 0C24.0591 0 31 6.9409 31 15.5C31 24.0591 24.0591 31 15.5 31C6.9409 31 0 24.0591 0 15.5C0 6.9409 6.9409 0 15.5 0Z'
                                fill='white'
                            />
                        </mask>
                        <g mask='url(#mask0_332_29335)'>
                            <path
                                d='M15.4658 21.7747L10.5337 16.8488C10.1493 16.4644 9.52623 16.4644 9.14182 16.8488L-0.00317383 25.9938V31.0003H24.6945L15.4627 21.7747H15.4658Z'
                                fill='url(#paint0_linear_332_29335)'
                            />
                            <path
                                d='M15.4596 9.11417L20.4072 14.0587C20.7916 14.4431 21.4147 14.4431 21.7991 14.0587L30.9999 4.85787V-0.00292969H6.34564L15.4627 9.11107L15.4596 9.11417Z'
                                fill='url(#paint1_linear_332_29335)'
                            />
                            <path
                                d='M21.7868 15.438L21.7961 15.4473L16.8485 20.3949C16.4641 20.7793 16.4641 21.4024 16.8485 21.7868L26.0648 31.0031H31.0031V6.22168L21.7899 15.4349L21.7868 15.438Z'
                                fill='url(#paint2_linear_332_29335)'
                            />
                            <path
                                d='M4.98158 0H-0.00012207V24.6295L9.14488 15.4597L14.0863 10.4935C14.4676 10.1091 14.4676 9.4891 14.0863 9.1047L4.98158 0Z'
                                fill='url(#paint3_linear_332_29335)'
                            />
                        </g>
                        <defs>
                            <linearGradient
                                id='paint0_linear_332_29335'
                                x1='1.66153'
                                y1='13.3861'
                                x2='10.0098'
                                y2='27.147'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop
                                    offset='0.14'
                                    stopColor='#B692F6'
                                />
                                <stop
                                    offset='1'
                                    stopColor='#6941C6'
                                />
                            </linearGradient>
                            <linearGradient
                                id='paint1_linear_332_29335'
                                x1='6.34564'
                                y1='7.17357'
                                x2='30.9999'
                                y2='7.17357'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop stopColor='#B692F6' />
                                <stop
                                    offset='1'
                                    stopColor='#9E77ED'
                                />
                            </linearGradient>
                            <linearGradient
                                id='paint2_linear_332_29335'
                                x1='25.2123'
                                y1='5.29168'
                                x2='23.8049'
                                y2='25.6649'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop stopColor='#9E77ED' />
                                <stop
                                    offset='1'
                                    stopColor='#6941C6'
                                />
                            </linearGradient>
                            <linearGradient
                                id='paint3_linear_332_29335'
                                x1='3.43778'
                                y1='7.9236'
                                x2='11.4575'
                                y2='27.5931'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop stopColor='#B692F6' />
                                <stop
                                    offset='0.93'
                                    stopColor='#6941C6'
                                />
                            </linearGradient>
                        </defs>
                    </svg>
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
                            <SecondaryButton
                                text={'Try Motion Maker'}
                                onClick={() => console.log('TODO')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
