'use client'

import 'swiper/css'

import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import left_arrow from '../public/left-arrow.svg'
import right_arrow from '../public/right-arrow.svg'

const SwiperComponent = () => {
    const swiper = useSwiper()
    const [swiperRef, setSwiperRef] = useState(null)

    const prevHandler = () => {
        swiperRef.slidePrev()
    }

    const nextHandler = () => {
        swiperRef.slideNext()
    }

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            }}
            navigation={true}
            onSwiper={swiper => setSwiperRef(swiper)}
        >
            {[1, 5, 9, 12, 18, 21, 24, 30, 35, 42, 48, 50].map(e => (
                <SwiperSlide key={e}>
                    <div className='h-[600px] rounded-3xl border-[3px] border-black bg-white p-4'>
                        <div className='h-2/5 w-full rounded-2xl border-[3px] border-black bg-[#FDF9F5D9]'></div>
                        <p className='font-inter h-3/5 text-justify text-xl leading-10'>
                            {
                                'Integrate generative AI into your animation workflow, decrease production time and budget and be in control of the creative process of your project like never before. With Fundamentals Motion Maker.'
                            }
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            <div className='flex justify-end mt-12 gap-10'>
                <Image
                    src={left_arrow}
                    width={100}
                    height={100}
                    alt='left arrow for news swiper'
                    onClick={prevHandler}
                />
                <Image
                    src={right_arrow}
                    width={100}
                    height={100}
                    alt='right arrow for news swiper'
                    onClick={nextHandler}
                />
            </div>
        </Swiper>
    )
}

export default SwiperComponent
