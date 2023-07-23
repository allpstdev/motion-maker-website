'use client'

import { dictionary } from '@/content'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import fundamentals_logo from '../public/fundamentals_logo.png'

const Navbar = () => {
    const params = useParams()
    const { link_1, link_2, link_3, link_4_part_1, link_4_thin, link_4_part_2, link_5 } = dictionary[params.lang]?.navbar

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='flex w-full flex-wrap items-center justify-between border-b border-black bg-white/[0.8] px-4 py-4 text-lg text-black md:py-0'>
            <div>
                <Link href='/'>
                    <div className='relative mx-auto my-2 md:h-[5.71rem] md:w-[6.25rem] h-16 w-16'>
                        <Image
                            src={fundamentals_logo}
                            alt='fundamentals logo'
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>
                </Link>
            </div>
            <div onClick={toggleMenu}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    id='menu-button'
                    className='block h-6 w-6 cursor-pointer md:hidden'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>

            <div className={`${!isMenuOpen && 'hidden'} w-full md:flex md:w-auto md:items-center`}>
                <div className='pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0'>
                    <Link
                        className='block py-2 md:p-4'
                        href='/about'
                        onClickCapture={toggleMenu}
                    >
                        {link_1}
                    </Link>

                    <span className='hidden py-4 md:block'>|</span>
                    <Link
                        className='block py-2 md:p-4'
                        href='/technology'
                        onClickCapture={toggleMenu}
                    >
                        {link_2}
                    </Link>

                    <span className='hidden py-4 md:block'>|</span>
                    <Link
                        className='block py-2 md:p-4'
                        href='/products'
                        onClickCapture={toggleMenu}
                    >
                        {link_3}
                    </Link>

                    <span className='hidden py-4 md:block'>|</span>
                    <Link
                        className='block py-2 font-bold text-purple-400 md:p-4'
                        href='/motion_maker'
                        onClickCapture={toggleMenu}
                    >
                        {link_4_part_1}
                        <span className='font-normal'> {link_4_thin} </span>
                        {link_4_part_2}
                    </Link>

                    <span className='hidden py-4 md:block'>|</span>
                    <Link
                        className='block py-2 md:p-4'
                        href='/contact'
                        onClickCapture={toggleMenu}
                    >
                        {link_5}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
