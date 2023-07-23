import ContentDescription from '@/components/content/Description'
import EllipseComponent from '@/components/content/EllipseComponent'
import ContentHeader from '@/components/content/Header'
import Header from '@/components/Header'
import PageDescription from '@/components/PageDescription'
import SubHeader from '@/components/SubHeader'
import { dictionary } from '@/content'
import Image from 'next/image'

import company_values from '../../../public/company_values.svg'
import demo from '../../../public/Fundamentals_logo_lg.png'
import profile_gunther from '../../../public/profile_gunther.png'
import profile_mario from '../../../public/profile_mario.png'
import profile_mike from '../../../public/profile_mike.png'

const AboutPage = ({ params }) => {
    const {
        page_header,
        page_sub_header,
        page_description,
        content_1_header,
        content_1_decription,
        content_2_header,
        content_2_decription,
        mario_designation,
        mario_description,
        mario_qoute,
        mike_designation,
        mike_description,
        mike_qoute,
        gunther_designation,
        gunther_description,
        gunther_qoute
    } = dictionary[params.lang]?.about

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
                className='w-100vw mx-auto mb-24 xl:mb-96 mt-12 h-auto px-6 xl:px-8'
            />
            <EllipseComponent />

            <section className='bg-[#FDF9F5] pt-20 px-4 xl:pt-40 xl:pb-12 xl:px-28'>
                <div className='mt-8 xl:mt-32'>
                    <ContentHeader text={content_1_header} />
                    <ContentDescription text={content_1_decription} />
                </div>
                <div className='my-20 xl:my-60'>
                    <Image
                        alt='demo'
                        src={company_values}
                        width='0'
                        height='0'
                        sizes='100vw'
                        className='w-100vw mx-auto px-0 xl:px-8'
                    />
                </div>

                <div className='mt-8 xl:mt-32'>
                    <ContentHeader text={content_2_header} />
                    <ContentDescription text={content_2_decription} />
                    <div className='mt-20 xl:mt-48 -mb-[1px] xl:-mb-[2px] ml-16 xl:ml-44 h-[1px] w-4/5 bg-black' />
                    <div className='flex flex-row'>
                        <Image
                            alt='Mairo Wiedl profile picture'
                            width={0}
                            height={0}
                            className='h-auto w-28 xl:w-80 '
                            src={profile_mario}
                        />
                        <div className='w-full flex flex-col justify-center border-b border-black pl-7'>
                            <div className='mb-4 text-2xl xl:text-7xl font-normal tracking-widest'>Mario Wiedl</div>
                            <div className='text-lg xl:text-4xl font-light tracking-default text-black/[0.8]'>{mario_designation}</div>
                        </div>
                    </div>
                    <div className='py xl:py-12'>
                        <div className='mt-10 xl:mt-20 text-center text-base xl:text-4xl font-normal leading-8 xl:leading-[66px] tracking-widest text-black'>
                            {mario_description}
                        </div>
                        <div className='mt-8 xl:my-10 text-center text-sm xl:text-2xl font-normal leading-8 xl:leading-[66px]  tracking-widest text-black'>
                            {mario_qoute}
                        </div>
                    </div>
                    <br />
                    <div className='mt-20 xl:mt-48 -mb-[1px] xl:-mb-[2px] ml-14 xl:ml-44 h-[1px] w-4/5 bg-black' />
                    <div className='flex flex-row'>
                        <Image
                            alt='Mairo Wiedl profile picture'
                            width={0}
                            height={0}
                            className='h-auto w-28 xl:w-80 '
                            src={profile_mike}
                        />
                        <div className='w-full flex flex-col justify-center border-b border-black pl-7'>
                            <div className='mb-4 text-2xl xl:text-7xl font-normal tracking-widest'>Mike Milligan</div>
                            <div className='text-lg xl:text-4xl font-light tracking-default text-black/[0.8]'>{mike_designation}</div>
                        </div>
                    </div>
                    <div className='py xl:py-12'>
                        <div className='mt-10 xl:mt-20 text-center text-base xl:text-4xl font-normal leading-8 xl:leading-[66px] tracking-widest text-black'>
                            {mike_description}
                        </div>
                        <div className='mt-8 xl:my-10 text-center text-sm xl:text-2xl font-normal leading-8 xl:leading-[66px]  tracking-widest text-black'>
                            {mike_qoute}
                        </div>
                    </div>
                    <br />
                    <div className='mt-20 xl:mt-48 -mb-[2px] xl:-mb-[2px] ml-14 xl:ml-44 h-[1px] w-4/5 bg-black' />
                    <div className='flex flex-row'>
                        <Image
                            alt='Mairo Wiedl profile picture'
                            width={0}
                            height={0}
                            className='h-36 xl:h-auto w-32 xl:w-80'
                            src={profile_gunther}
                        />
                        <div className='w-full flex flex-col justify-center border-b border-black pl-3 xl:pl-7'>
                            <div className='mb-4 text-2xl xl:text-7xl font-normal tracking-widest'>Günther Lüttecke</div>
                            <div className='text-lg xl:text-4xl font-light tracking-default text-black/[0.8]'>{gunther_designation}</div>
                        </div>
                    </div>
                    <div className='py xl:py-12'>
                        <div className='mt-10 xl:mt-20 text-center text-base xl:text-4xl font-normal leading-8 xl:leading-[66px] tracking-widest text-black'>
                            {gunther_description}
                        </div>
                        <div className='mt-5 xl:my-10 text-center text-sm xl:text-2xl font-normal leading-8 xl:leading-[66px]  tracking-widest text-black'>
                            {gunther_qoute}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
