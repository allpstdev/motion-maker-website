'use client'

import { dictionary } from '@/content'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import fundamentals_logo from '../public/fundamentals_logo.png'

const Footer = () => {
    const params = useParams()
    const {
        left_description,
        right_header,
        right_sub_header,
        site_map_header,
        link_1,
        link_2,
        link_3,
        link_4_part_1,
        link_4_bold,
        link_4_part_2,
        link_5,
        bottom_left,
        bottom_right_terms,
        bottom_right_privacy_policy
    } = dictionary[params.lang]?.footer

    return (
        <footer>
            <div className='flex max-w-full flex-col bg-white px-8 pb-2 pt-9 sm:flex-row md:px-14 md:pb-5 md:pl-20 md:pt-24'>
                <div className='flex w-full flex-col sm:flex-row'>
                    <div className='container flex-1'>
                        <p className='font-euclid max-w-sm  text-sm xl:text-base leading-loose text-black'>{left_description}</p>
                    </div>
                    <div className='mt-10 flex-1 pl-0 sm:mt-0 md:pl-6'>
                        <h2 className='font-euclid mb-5  text-2xl xl:text-4xl font-normal tracking-widest text-black'>{right_header}</h2>
                        <h3 className='font-euclid mb-2 text-base xl:text-xl font-normal tracking-[1.39px] leading-loose'>
                            {right_sub_header}
                        </h3>
                        <div className='mb-5 flex flex-col items-end md:flex-row'>
                            <div className='mx-auto mt-16 flex flex-1 flex-col'>
                                <Link
                                    className='font-euclid text-center text-xl font-normal leading-7 md:text-left'
                                    href={'/site'}
                                >
                                    {site_map_header}
                                </Link>
                                <div className='mb-6 mt-6 md:mb-0'>
                                    <div className='grid place-items-center text-base font-normal tracking-default text-black sm:grid-cols-1 md:grid-cols-2 md:place-items-start 2xl:grid-cols-5'>
                                        <Link href={`/about`}>{link_1}</Link>
                                        <Link href={`/technology`}>{link_2}</Link>
                                        <Link href={`/pricing`}>{link_3}</Link>
                                        <Link
                                            href={`/contact`}
                                            className='text-violet-300'
                                        >
                                            {link_4_part_1}
                                            <span className='font-bold'> {link_4_bold} </span>
                                            {link_4_part_2}
                                        </Link>
                                        <Link href={`/contact`}>{link_5}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='relative mx-auto h-[6.25rem] w-[6.875rem]'>
                                <Image
                                    src={fundamentals_logo}
                                    alt='fundamentals logo'
                                    style={{ objectFit: 'cover' }}
                                    fill
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-1 flex max-w-full flex-col border-t border-solid border-black bg-white px-8 pb-14 pt-9 sm:flex-row md:px-14 md:pb-14 md:pl-20 md:pt-9'>
                <div className='flex-1'>
                    <p className='text-black'>{bottom_left}</p>
                </div>
                <div className='ml-0 mt-4 flex-1 md:ml-6 md:mt-0'>
                    <div className='flex gap-4'>
                        <Link href={'/terms'}>{bottom_right_terms}</Link>
                        <Link href={'/privacy'}>{bottom_right_privacy_policy}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
