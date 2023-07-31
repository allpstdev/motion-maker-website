'use client'

import 'swiper/css'

import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import ai_assistant_card_avatar_1 from '../public/ai_assistant_card_avatar_1.png'
import ai_assistant_card_avatar_2 from '../public/ai_assistant_card_avatar_2.png'
import ai_assistant_card_avatar_3 from '../public/ai_assistant_card_avatar_3.png'

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
            slidesPerView={3}
            spaceBetween={10}
            onSwiper={swiper => setSwiperRef(swiper)}
            breakpoints={{
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                1080: {
                    slidesPerView: 2.5,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 0
                },
                800: {
                    slidesPerView: 1.5,
                    spaceBetween: 0
                },
                375: {
                    slidesPerView: 1.6,
                    spaceBetween: 10
                }
            }}
        >
            {[1, 2, 1, 2, 1, 2].map(e => (
                <SwiperSlide
                    key={e}
                    className='pb-2'
                >
                    <div className='box-raidial-gradient-pattern rounded-3xl p-6'>
                        <Image
                            src={e === 1 ? ai_assistant_card_avatar_1 : ai_assistant_card_avatar_2}
                            alt=''
                            width={140}
                            height={240}
                            className='mx-auto'
                        />
                        <div className='h-[47%] w-44 pb-3'>
                            <div className='mb-2.5 text-center text-xl font-medium leading-7 text-slate-800'>Artist Finny</div>
                            <div className='flex flex-col gap-10'>
                                <div className='h-2 w-full rounded-full bg-gray-200'>
                                    <div
                                        className='mb-2 h-2 rounded-full bg-violet-500'
                                        style={{ width: '100%' }}
                                    />
                                    <div className='text-right text-sm font-medium leading-tight text-slate-700'>Animation experience</div>
                                </div>
                                <div className='h-2 w-full rounded-full bg-gray-200'>
                                    <div
                                        className='mb-2 h-2 rounded-full bg-violet-500'
                                        style={{ width: '100%' }}
                                    />
                                    <div className='text-right text-sm font-medium leading-tight text-slate-700'>Project complexity</div>
                                </div>
                                <div className='h-2 w-full rounded-full bg-gray-200'>
                                    <div
                                        className='mb-2 h-2 rounded-full bg-violet-500'
                                        style={{ width: '5%' }}
                                    />
                                    <div className='text-right text-sm font-medium leading-tight text-slate-700'>Educational aspect</div>
                                </div>
                                <div className='h-2 w-full rounded-full bg-gray-200'>
                                    <div
                                        className='mb-2 h-2 rounded-full bg-violet-500'
                                        style={{ width: '100%' }}
                                    />
                                    <div className='text-right text-sm font-medium leading-tight text-slate-700'>Admin work</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperComponent
