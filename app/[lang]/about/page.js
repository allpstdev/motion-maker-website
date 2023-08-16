import ContentHeader from '@/components/content/Header'
import PinkGradientBackground from '@/components/PinkGradientBackground'
import { dictionary } from '@/content'
import Image from 'next/image'

import adobe_logo from '../../../public/adobe_logo.svg'
import airbnb_logo from '../../../public/airbnb_logo.svg'
import dropbox_logo from '../../../public/dropbox_logo.svg'
import figma_logo from '../../../public/figma_logo.svg'
import framer_logo from '../../../public/framer_logo.svg'
import google_colored_logo from '../../../public/google_colored_logo.svg'
import google_logo from '../../../public/google_logo.svg'
import social_color_linkedin from '../../../public/social_color_linkedin.svg'
import social_color_twitter from '../../../public/social_color_twitter.svg'

const AboutPage = ({ params }) => {
    const {} = dictionary[params.lang]?.about

    return (
        <>
            <PinkGradientBackground />
            <section className='relative left-0 right-0 top-0'>
                <ContentHeader
                    customClass={'mx-auto flex flex-col max-w-screen-md items-center text-center px-6 lg:px-0'}
                    variant={'secondary'}
                    pill_text={'About us'}
                    header_text={'Fundamentals Artificial Intelligence AG'}
                    highlightHeaderWord={'Artificial Intelligence'}
                    description_text={
                        'Lorem ipsum dolor sit amet consectetur. Semper ac nisl cursus convallis sem ornare ultricies est. Sed iaculis dui amet sed sociis lacus.'
                    }
                />
                <div className='container mx-auto flex flex-col justify-center  gap-3 py-16 md:flex-row'>
                    <div className='inline-flex h-auto w-full flex-col items-start justify-start rounded-[32px] border border-slate-800 border-opacity-10 bg-white p-12 md:w-1/2'>
                        <div className='flex h-auto flex-col items-start justify-start gap-6 '>
                            <div className='flex h-auto flex-col items-start justify-start gap-4 '>
                                <div className='text-2xl font-semibold leading-loose text-slate-800'>Lorem</div>
                                <div className='mb-6 text-base font-normal leading-normal text-slate-800 text-opacity-80'>
                                    Fundamentals AI is a tech company located in Zug, Switzerland. We strive to create a bridge between art
                                    and technology, incorporating cutting edge technologies based on Artificial Intelligence into the
                                    workflow of designers across disciplines.
                                </div>
                            </div>
                        </div>
                        <div className='inline-flex items-center justify-center gap-2 self-stretch rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 px-4 py-3 shadow'>
                            <div className='flex items-center justify-start gap-2'>
                                <div className='text-center text-base font-medium leading-normal text-white'>
                                    Visit our website to learn more
                                </div>
                                <div className='relative h-5 w-5' />
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex h-auto w-full flex-col items-start justify-start rounded-[32px] border border-slate-800 border-opacity-10 bg-white p-12 md:w-1/2'>
                        <div className='flex h-auto flex-col items-start justify-start gap-6 '>
                            <div className='flex h-auto flex-col items-start justify-start gap-4 '>
                                <div className='text-2xl font-semibold leading-loose text-slate-800'>Lorem</div>
                                <div className='mb-6 text-base font-normal leading-normal text-slate-800 text-opacity-80'>
                                    Lorem ipsum dolor sit amet consectetur. Semper ac nisl cursus convallis sem ornare ultricies est. Sed
                                    iaculis dui amet sed sociis lacus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto mb-11 h-[394px] rounded-2xl bg-zinc-100'></div>
                <div className='inline-flex h-auto w-full flex-col items-center justify-start gap-12 bg-gradient-to-r from-slate-600 to-gray-500 py-16'>
                    <div className='flex h-auto flex-col items-center justify-start gap-12'>
                        <div className='text-center text-lg font-normal leading-relaxed text-gray-300'>
                            Trusted by the biggest companies
                        </div>
                        <div className='inline-flex flex-wrap justify-center gap-6'>
                            <Image
                                src={adobe_logo}
                                width={180}
                                height={40}
                                alt=''
                            />
                            <Image
                                src={airbnb_logo}
                                width={180}
                                height={40}
                                alt=''
                            />
                            <Image
                                src={figma_logo}
                                width={180}
                                height={40}
                                alt=''
                            />
                            <Image
                                src={framer_logo}
                                width={180}
                                height={40}
                                alt=''
                            />
                            <Image
                                src={google_logo}
                                width={180}
                                height={40}
                                alt=''
                            />
                            <Image
                                src={dropbox_logo}
                                width={180}
                                height={40}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='inline-flex h-auto w-full flex-col items-center justify-start gap-12 border-b bg-white py-16'>
                    <div className='flex h-auto flex-col items-center justify-start gap-12'>
                        <div className='text-2xl font-semibold leading-loose text-slate-800'>Visit our Socials</div>
                        <div className='inline-flex flex-wrap items-start justify-center gap-6 '>
                            <div className='flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow'>
                                <Image
                                    src={google_colored_logo}
                                    width={24}
                                    height={24}
                                    alt=''
                                />
                                <div className='text-base font-semibold leading-normal text-slate-700'>fundamentals-ai.com</div>
                            </div>
                            <div className='flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow'>
                                <Image
                                    src={social_color_twitter}
                                    width={24}
                                    height={24}
                                    alt=''
                                />
                                <div className='text-base font-semibold leading-normal text-slate-700'>/fundamentals-ai</div>
                            </div>
                            <div className='flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow'>
                                <Image
                                    src={social_color_linkedin}
                                    width={24}
                                    height={24}
                                    alt=''
                                />
                                <div className='text-base font-semibold leading-normal text-slate-700'>Fundamentals AI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage
