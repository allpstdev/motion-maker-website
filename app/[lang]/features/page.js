'use client'

import Card from '@/components/content/Card'
import FeatureCardContent from '@/components/content/FeatureCardContent'
import ContentHeader from '@/components/content/Header'
import PinkGradientBackground from '@/components/PinkGradientBackground'
import { dictionary } from '@/content'
import Image from 'next/image'
import { useState } from 'react'

import arrow_right_primary from '../../../public/arrow_right_primary.svg'
import check_verified_icon from '../../../public/check-verified-icon.svg'
import chevron_right_icon from '../../../public/chevron_right_icon.svg'
import feature_continuity_engine from '../../../public/feature_continuity_engine.png'
import feature_motion_cycler from '../../../public/feature_motion_cycler.png'
import feature_video_editor from '../../../public/feature_video_editor.png'
import features_demo_1 from '../../../public/features_demo_1.png'
import features_demo_2 from '../../../public/features_demo_2.png'
import features_lip_sync from '../../../public/features_lip_sync.png'
import features_text_prompt from '../../../public/features_text_prompt.png'
import features_visual_presets from '../../../public/features_visual_presets.png'
import trial_image from '../../../public/trial_image.png'

const FeaturesPage = ({ params }) => {
    const {} = dictionary[params.lang]?.features
    const [isSelected, setIsSelected] = useState(false)

    const handleCardClick = () => {
        setIsSelected(!isSelected)
    }

    const [selectedCard, setSelectedCard] = useState(null)

    const handleCardSelect = cardHeader => {
        setSelectedCard(cardHeader)
    }

    return (
        <>
            <PinkGradientBackground className={'left-0 right-0 top-0'} />
            <section className='relative left-0 right-0 top-0'>
                <ContentHeader
                    customClass={'mx-auto flex flex-col max-w-screen-md items-center text-center px-6 lg:px-0'}
                    pill_color={'primary'}
                    pill_text={'Features'}
                    header_text={'Boost your next animation project with AI'}
                    highlightHeaderWord={'project'}
                    description_text={
                        'The core functions of Motion Maker, allowing animation teams to achieve better results in significantly less time, are based on a set of our fundamental key technologies.'
                    }
                />
                <div className='container mx-auto px-6 pb-6 pt-16 lg:px-0'>
                    <div className='mb-6 flex h-screen w-full flex-col rounded-3xl border bg-[radial-gradient(at_center_top,_#FCD6FF,_#FFFDD7,_#FFFFFF)] lg:h-[600px] lg:min-w-full lg:flex-row'>
                        <div className='inline-flex h-full w-full flex-col items-start justify-between gap-6 rounded-s-3xl px-12 pb-0 pt-12 lg:w-1/3 lg:px-12 lg:pb-12 lg:pt-12 xl:w-2/5'>
                            <div className='flex flex-col items-start justify-start gap-4'>
                                <div className='inline-flex w-full items-start justify-start gap-2.5 border-b border-slate-800 border-opacity-10 pb-4'>
                                    <div className='text-sm font-medium leading-tight text-slate-800'>Studio</div>
                                </div>
                                <div className='w-auto text-3xl font-semibold leading-[42px] text-slate-800 xl:text-4xl'>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-6'>
                                <div className='flex flex-col items-start justify-start gap-4'>
                                    <div className='flex h-36 flex-col items-start justify-start gap-4 self-stretch'>
                                        <div className='inline-flex items-start justify-start gap-3 self-stretch'>
                                            <div className='flex items-start justify-start gap-2.5 pt-0.5'>
                                                <Image
                                                    src={check_verified_icon}
                                                    height={20}
                                                    width={20}
                                                    alt='verified icon'
                                                />
                                            </div>
                                            <div className='inline-flex flex-col items-start justify-start'>
                                                <div className='text-base font-semibold leading-normal text-slate-800'>
                                                    Shared asset libraries
                                                </div>
                                            </div>
                                        </div>
                                        <div className='inline-flex items-start justify-start gap-3 self-stretch'>
                                            <div className='flex items-start justify-start gap-2.5 pt-0.5'>
                                                <Image
                                                    src={check_verified_icon}
                                                    height={20}
                                                    width={20}
                                                    alt='verified icon'
                                                />
                                            </div>
                                            <div className='inline-flex flex-col items-start justify-center'>
                                                <div className='text-base font-semibold leading-normal text-slate-800'>
                                                    Notes and approvals
                                                </div>
                                            </div>
                                        </div>
                                        <div className='inline-flex items-start justify-start gap-3 self-stretch'>
                                            <div className='flex items-start justify-start gap-2.5 pt-0.5'>
                                                <Image
                                                    src={check_verified_icon}
                                                    height={20}
                                                    width={20}
                                                    alt='verified icon'
                                                />
                                            </div>
                                            <div className='inline-flex flex-col items-start justify-center'>
                                                <div className='text-base font-semibold leading-normal text-slate-800'>
                                                    Virtual project manager
                                                </div>
                                            </div>
                                        </div>
                                        <div className='inline-flex items-start justify-start gap-3 self-stretch'>
                                            <div className='flex items-start justify-start gap-2.5 pt-0.5'>
                                                <Image
                                                    src={check_verified_icon}
                                                    height={20}
                                                    width={20}
                                                    alt='verified icon'
                                                />
                                            </div>
                                            <div className='inline-flex flex-col items-start justify-center'>
                                                <div className='text-base font-semibold leading-normal text-slate-800'>
                                                    Effortless pipeline integration
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 bg-opacity-5 px-4 py-3'>
                                    <div className='flex items-center justify-start gap-2'>
                                        <div className='text-center text-base font-medium leading-normal text-black'>Learn more</div>
                                        <Image
                                            alt='chevron_right_icon'
                                            src={chevron_right_icon}
                                            className='ml-2'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative h-full w-full pt-0 lg:w-2/3 lg:pt-12 xl:w-3/5'>
                            <Image
                                src={features_demo_1}
                                alt='features_demo_1'
                                fill
                                sizes='100vw'
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'bottom right'
                                }}
                                className='h-full w-full rounded-ee-3xl rounded-es-3xl pt-0 lg:rounded-es-none lg:pt-12'
                            />
                        </div>
                    </div>
                    <div className='grid h-full grid-cols-1 gap-6 lg:grid-cols-3'>
                        <Card
                            header='Studio'
                            description={`Powerful collaborative tools for teams in a studio environment. Equipped with tools for artists, progress tracking for producers and custom libraries for big projects.`}
                            isSelected={true} // Pass isSelected prop
                        />
                        <Card
                            header='Artist'
                            description={`Studies your personal artistic style first, then starts boosting your productivity to unprecedented levels. Your virtual assistant will introduce you to using AI in animation.`}
                            isSelected={false} // Pass isSelected prop
                        />
                        <Card
                            header='Student'
                            description={`Full functionality, low subscription fees, only for students. Helps with your first projects, developing a personal style, teaches you techniques and styles, improves your results.`}
                            isSelected={false} // Pass isSelected prop
                        />
                    </div>
                </div>
            </section>
            <section className='container mx-auto pt-24'>
                <div className='mb-20 inline-flex h-40 w-full flex-col items-start justify-start gap-5 px-6 lg:mb-0 lg:w-3/5 lg:px-1'>
                    <div className='flex h-20 flex-col items-start justify-start gap-3 self-stretch'>
                        <div className='self-stretch text-base font-semibold leading-normal text-violet-700'>Motion Maker</div>
                        <div className='self-stretch text-4xl font-semibold leading-[44px] text-gray-900'>Core features</div>
                    </div>
                    <div className='self-stretch text-xl font-normal leading-[30px] text-slate-600'>
                        Lorem ipsum dolor sit amet consectetur. Quam lacus auctor nec nulla nunc pretium. Semper sem dignissim id interdum
                        libero sit tortor. Elementum.
                    </div>
                </div>
                <div className='flex-col-1 mt-16 flex flex-col gap-16 px-6 lg:flex-row lg:px-0'>
                    <div className='w-full'>
                        <div className='self-stretch-l-2 flex flex-col items-start justify-start gap-5 border-l-2 border-violet-500 py-4 pl-6'>
                            <div className='flex flex-col items-center justify-start gap-2 self-stretch'>
                                <div className='self-stretch text-xl font-semibold leading-[30px] text-gray-900'>The Storyboarder </div>
                                <div className='self-stretch text-base font-normal leading-normal text-slate-600'>
                                    Convert any text file into a beautiful storyboard! Motion Maker suggests all characters, camera angles,
                                    duration of shots, and backgrounds.{' '}
                                </div>
                            </div>
                            <div className='inline-flex items-center justify-center gap-2'>
                                <div className='text-base font-semibold leading-normal text-violet-700'>Learn more</div>
                                <Image
                                    src={arrow_right_primary}
                                    alt=''
                                    color='blue'
                                />
                            </div>
                        </div>
                        <div className='self-stretch-l-2 border-gray-100border-gray-100 flex flex-col items-start justify-start  gap-5 border-l-2 py-4 pl-6'>
                            <div className='flex flex-col items-center justify-start gap-2 self-stretch'>
                                <div className='self-stretch text-xl font-semibold leading-[30px] text-gray-900'>The Animatic Builder </div>
                                <div className='self-stretch text-base font-normal leading-normal text-slate-600'>
                                    Convert any text file into a beautiful storyboard! Motion Maker suggests all characters, camera angles,
                                    duration of shots, and backgrounds.{' '}
                                </div>
                            </div>
                            <div className='inline-flex items-center justify-center gap-2'>
                                <div className='text-base font-semibold leading-normal text-violet-700'>Learn more</div>
                                <Image
                                    src={arrow_right_primary}
                                    alt=''
                                />
                            </div>
                        </div>
                        <div className='self-stretch-l-2 border-gray-100border-gray-100 flex flex-col items-start justify-start  gap-5 border-l-2 py-4 pl-6'>
                            <div className='flex flex-col items-center justify-start gap-2 self-stretch'>
                                <div className='self-stretch text-xl font-semibold leading-[30px] text-gray-900'>The Asset Library </div>
                                <div className='self-stretch text-base font-normal leading-normal text-slate-600'>
                                    Convert any text file into a beautiful storyboard! Motion Maker suggests all characters, camera angles,
                                    duration of shots, and backgrounds.{' '}
                                </div>
                            </div>
                            <div className='inline-flex items-center justify-center gap-2'>
                                <div className='text-base font-semibold leading-normal text-violet-700'>Learn more</div>
                                <Image
                                    src={arrow_right_primary}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <div className='relative h-96 w-full lg:h-auto'>
                        <Image
                            src={features_demo_2}
                            alt=''
                            fill
                            style={{
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </section>
            <section className='container mx-auto'>
                <div className='mt-16 inline-flex h-auto w-full flex-col items-start justify-start gap-5 px-6 lg:mb-6 lg:w-3/5 lg:px-0'>
                    <div className='flex flex-col items-start justify-start gap-3 self-stretch'>
                        <div className='self-stretch text-4xl font-semibold leading-[44px] text-gray-900'>Additional features</div>
                    </div>
                    <div className='self-stretch text-xl font-normal leading-[30px] text-slate-600'>
                        Lorem ipsum dolor sit amet consectetur. Quam lacus auctor nec nulla nunc pretium. Semper sem dignissim id interdum
                        libero sit tortor. Elementum.
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-6 px-6 lg:flex-row lg:px-0'>
                    <div className='h-full w-full rounded-3xl border bg-[radial-gradient(at_center_top,_#CAF9FF,_#FFF7CC,_#FFFFFF)] lg:w-1/2'>
                        <FeatureCardContent
                            header={'The Text Prompt Editor'}
                            description={`Lorem ipsum dolor sit amet consectetur. Et urna a sapien egestas egestas. Pellentesque amet molestie
                                    nunc et. Risus lorem lobortis duis porttitor platea.`}
                            image={features_text_prompt}
                        />
                    </div>
                    <div className='h-full w-full rounded-3xl border lg:w-1/2'>
                        <FeatureCardContent
                            header={'Visual Presets for the perfect shot'}
                            description={`Lorem ipsum dolor sit amet consectetur. Et urna a sapien egestas egestas. Pellentesque amet molestie
                                    nunc et. Risus lorem lobortis duis porttitor platea.`}
                            image={features_visual_presets}
                        />
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-6 px-6 lg:flex-row lg:px-0'>
                    <div className='flex h-screen w-full flex-col rounded-3xl border bg-[radial-gradient(at_center_top,_#FCD6FF,_#FFFDD7,_#FFFFFF)] lg:h-[600px] lg:flex-row'>
                        <div className='inline-flex h-full w-full flex-col items-start justify-between gap-6 rounded-s-3xl px-12 pb-0 pt-16 lg:w-2/5 lg:px-12 lg:pb-[132px] lg:pt-[132px] xl:w-2/5'>
                            <div className='inline-flex flex-col items-start justify-start gap-6'>
                                <div className='relative h-16 w-16 rounded-xl bg-gradient-to-br from-violet-200 to-violet-600' />
                                <div className='flex h-auto flex-col gap-4'>
                                    <div className='text-2xl font-semibold leading-loose text-slate-800'>The Animation Timeline</div>
                                    <div className='text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                        Lorem ipsum dolor sit amet consectetur. Amet scelerisque ac a etiam convallis ac. Eget nullam.
                                    </div>
                                    <div className='text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                        Lorem ipsum dolor sit amet consectetur. Sem nisi sed parturient placerat tempus fermentum. Neque
                                        tincidunt aenean duis mollis amet tincidunt. A lacus sollicitudin.
                                    </div>
                                </div>
                                <div className='inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 bg-opacity-5 px-4 py-2'>
                                    <div className='flex items-center justify-start gap-2'>
                                        <div className='text-center text-base font-medium leading-normal text-black'>Learn more</div>
                                        <Image
                                            src={chevron_right_icon}
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative h-full w-full pt-0 lg:w-3/5 lg:pt-12 xl:w-3/5'>
                            <Image
                                src={features_demo_1}
                                alt='features_demo_1'
                                fill
                                sizes='100vw'
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'bottom right'
                                }}
                                className='h-full w-full rounded-ee-3xl rounded-es-3xl pt-0 lg:rounded-es-none lg:pt-12'
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-6 px-6 lg:flex-row lg:px-0'>
                    <div className='h-full w-full rounded-3xl border lg:w-1/3'>
                        <FeatureCardContent
                            header={'Lip-Synch & AI voices'}
                            description={`Lorem ipsum dolor sit amet consectetur. Et urna a sapien egestas egestas. Pellentesque amet molestie
                                    nunc et. Risus lorem lobortis duis porttitor platea.`}
                            image={features_lip_sync}
                        />
                    </div>
                    <div className='h-full w-full rounded-3xl border lg:w-2/3'>
                        <FeatureCardContent
                            header={'Continuity Engine & Tweener'}
                            description={`Lorem ipsum dolor sit amet consectetur. Et urna a sapien egestas egestas. Pellentesque amet molestie
                                    nunc et. Risus lorem lobortis duis porttitor platea.`}
                            image={feature_continuity_engine}
                        />
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-6 px-6 lg:flex-row lg:px-0'>
                    <div className='h-full w-full rounded-3xl border bg-[radial-gradient(at_center_top,_#CAF9FF,_#FFF7CC,_#FFFFFF)] lg:w-1/2'>
                        <div className='flex flex-col items-start justify-start gap-6 p-12'>
                            <div className='relative h-16 w-16 rounded-xl bg-gradient-to-br from-[#E0C3FC] to-[#8EC5FC]' />
                            <div className='flex flex-col items-start justify-start gap-4 self-stretch'>
                                <div className='self-stretch text-2xl font-semibold leading-loose text-slate-800'>The Motion Cycler</div>
                                <div className='self-stretch text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                    Lorem ipsum dolor sit amet consectetur. Et urna a sapien egestas egestas. Pellentesque amet molestie
                                    nunc et. Risus lorem lobortis duis porttitor platea.
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-6 h-64 w-full lg:mt-0 lg:h-[320px] xl:h-[380px]'>
                            <Image
                                src={feature_motion_cycler}
                                alt=''
                                fill
                                className='rounded-ee-3xl'
                                style={{
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                    <div className='h-full w-full rounded-3xl border lg:w-1/2'>
                        <div className='flex flex-col items-start justify-start gap-6 p-12'>
                            <div className='relative h-16 w-16 rounded-xl bg-gradient-to-bl from-[#8A88FB] to-[#D079EE]' />
                            <div className='flex flex-col items-start justify-start gap-4 self-stretch'>
                                <div className='self-stretch text-2xl font-semibold leading-loose text-slate-800'>The Video Editor</div>
                                <div className='self-stretch text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                    Lorem ipsum dolor sit amet consectetur. Neque volutpat nec cras semper lorem cursus convallis nunc. Diam
                                    urna tortor purus pellentesque ultricies. Sed ac.
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-6 h-64 w-full lg:mt-0 lg:h-[320px] xl:h-[380px]'>
                            <Image
                                src={feature_video_editor}
                                alt=''
                                fill
                                className='rounded-ee-3xl'
                                style={{
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='container mx-auto flex flex-col px-6 py-16 lg:flex-row lg:px-0'>
                <div className='my-32 w-full lg:w-1/2'>
                    <ContentHeader
                        pill_color={'primary'}
                        pill_text={'Get Started'}
                        header_text={'Start you free trial'}
                        description_text={
                            'Lorem ipsum dolor sit amet consectetur. Mauris egestas posuere id quis lobortis id nisl sociis tristique. Enim urna.'
                        }
                        customClass={'flex flex-col'}
                    />
                    <div className='mt-6 inline-flex h-[60px] w-full max-w-lg items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 px-7 py-4 shadow'>
                        <div className='text-lg font-semibold leading-7 text-white'>Start your 30-day free trail</div>
                        <div className='relative h-6 w-6' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='relative mx-auto aspect-square h-auto w-full lg:w-[528px]'>
                        <Image
                            src={trial_image}
                            alt=''
                            fill
                            objectFit='contain'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturesPage
