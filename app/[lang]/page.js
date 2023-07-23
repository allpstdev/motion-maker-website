'use client'

import ContentDescription from '@/components/content/Description'
import EllipseComponent from '@/components/content/EllipseComponent'
import ContentHeader from '@/components/content/Header'
import Header from '@/components/Header'
import PageDescription from '@/components/PageDescription'
import SubHeader from '@/components/SubHeader'
import SwiperComponent from '@/components/Swiper'
import { dictionary } from '@/content'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

import demo from '../../public/demo.png'
import image1 from '../../public/image1.png'
import image2 from '../../public/image2.png'
import image3 from '../../public/image3.png'
import image4 from '../../public/image4.png'
import left_arrow from '../../public/left-arrow.svg'
import right_arrow from '../../public/right-arrow.svg'

const HomePage = ({ params }) => {
    const {
        page_header,
        page_sub_header,
        page_description,
        page_card1,
        page_card2,
        page_card3,
        page_card4,
        content_1_header,
        content_1_decription,
        content_2_header,
        content_2_decription_part1,
        content_2_decription_part_bold,
        content_2_decription_part2,
        content_3_header,
        content_3_card_1,
        content_3_card_2,
        content_4_header,
        content_4_card
    } = dictionary[params.lang]?.home

    return (
        <div>
            <Header text={page_header} />
            <SubHeader text={page_sub_header} />
            <PageDescription text={page_description} />

            <Image
                alt='demo'
                src={demo}
                width='0'
                height='0'
                sizes='100vw'
                className='w-100vw mx-auto mb-24 xl:mb-96 mt-12 h-auto px-4 xl:px-8'
            />
            <EllipseComponent />
            <section className='bg-[#FDF9F5] pt-20 px-4 xl:pt-40 xl:pb-12 xl:px-28'>
                <div className='grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4'>
                    <div className='flex flex-1 flex-col p-4 place-items-center gap-3 rounded-3xl border-2 border-black'>
                        <Image
                            alt={page_card1}
                            src={image1}
                            width='0'
                            height='0'
                            className='min-w-full h-3/4 xl:w-52 xl:h-3/4'
                        />
                        <p className='text-center text-xl xl:text-3xl font-normal'>{page_card1}</p>
                    </div>
                    <div className='flex flex-1 flex-col p-4 place-items-center gap-3 rounded-3xl border-2 border-black'>
                        <Image
                            alt={page_card2}
                            src={image2}
                            width='0'
                            height='0'
                            className='min-w-full h-min xl:w-52 xl:h-3/4'
                        />
                        <p className='text-center text-xl xl:text-3xl font-normal'>{page_card2}</p>
                    </div>
                    <div className='flex flex-1 flex-col p-4 place-items-center gap-3 rounded-3xl border-2 border-black'>
                        <Image
                            alt={page_card3}
                            src={image3}
                            width='0'
                            height='0'
                            className='min-w-full h-3/4 xl:w-52 xl:h-3/4'
                        />
                        <p className='text-center text-xl xl:text-3xl font-normal'>{page_card3}</p>
                    </div>
                    <div className='flex flex-1 flex-col place-items-center gap-3 rounded-3xl border-2 border-black p-4'>
                        <Image
                            alt={page_card4}
                            src={image4}
                            width='0'
                            height='0'
                            className='min-w-full h-3/4 xl:w-52 xl:h-3/4'
                        />
                        <p className='text-center text-xl xl:text-3xl font-normal'>{page_card4}</p>
                    </div>
                </div>
                <div className='mt-32'>
                    <ContentHeader text={content_1_header} />
                    <ContentDescription text={content_1_decription} />
                </div>

                <div className='mt-36'>
                    <ContentHeader text={content_2_header} />
                    <ContentDescription
                        text={
                            <>
                                {content_2_decription_part1}
                                <span className='font-bold'> {content_2_decription_part_bold} </span>
                                {content_2_decription_part2}
                            </>
                        }
                    />
                </div>
                <Image
                    alt='demo'
                    src={demo}
                    width='0'
                    height='0'
                    sizes='100vw'
                    className='w-100vw mx-auto mb-24 xl:mb-96 mt-12 h-auto'
                />
                <div className='mt-32'>
                    <ContentHeader text={content_3_header} />
                    <div className='flex w-full flex-col items-center justify-center gap-6'>
                        <div className="flex h-40 xl:h-96 w-full items-center justify-center rounded-[24px] border-2 border-black bg-[url('../public/topic_1.png')] bg-cover bg-no-repeat">
                            <p className='text-center text-3xl xl:text-7xl tracking-widest'>{content_3_card_1}</p>
                        </div>
                        <div className="flex h-40 xl:h-96 w-full items-center justify-center rounded-[24px] border-2 border-black bg-[url('../public/topic_2.png')] bg-cover bg-no-repeat">
                            <p className='text-center text-3xl xl:text-7xl tracking-widest'>{content_3_card_2}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-32 pb-16'>
                    <ContentHeader text={content_4_header} />
                    <SwiperComponent />
                </div>
            </section>
        </div>
    )
}

export default HomePage
