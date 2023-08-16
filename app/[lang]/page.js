import ContentHeader from '@/components/content/Header'
import PinkGradientBackground from '@/components/PinkGradientBackground'
import SwiperComponent from '@/components/Swiper'
import { Button } from '@/components/ui/button'
import { dictionary } from '@/content'
import { Instagram } from 'lucide-react'
import Image from 'next/image'

import apple_white from '../../public/apple_white.svg'
import arrow_right from '../../public/arrow_right.svg'
import avatar_group from '../../public/avatar_group.svg'
import award_icon from '../../public/award_icon.svg'
import chevron_right_icon from '../../public/chevron_right_icon.svg'
import data_flow_icon from '../../public/data_flow_icon.svg'
import facebook_white from '../../public/facebook_white.svg'
import first_section_image from '../../public/first_section_image.png'
import google_play_white from '../../public/google_play_white.svg'
import imdb_socialnetwork from '../../public/imdb_socialnetwork.png'
import instagram_white from '../../public/instagram_white.svg'
import magic_wand_icon from '../../public/magic_wand_icon.svg'
import mic_icon from '../../public/mic_icon.svg'
import profile_1 from '../../public/profile_1.png'
import profile_2 from '../../public/profile_2.png'
import second_section_image from '../../public/second_section_image.png'
import windows_white from '../../public/windows_white.svg'
import zap_icon from '../../public/zap_icon.svg'

const HomePage = ({ params }) => {
    const {} = dictionary[params.lang]?.home

    return (
        <>
            <PinkGradientBackground />
            {/* <section className='box-pattern py-16 flex flex-row justify-items-end'>
                <div className='w-1/12'></div>
                <div className='w-5/12 h-max flex flex-col gap-8 mr-6'>
                    <div className='items-center bg-white w-fit pl-1.5 pr-2 py-1.5 inline-flex gap-2  rounded-full border'>
                        <div className='bg-[#DCDAE2] rounded-full py-0.5 px-2 text-slate-800 text-sm font-medium leading-tight'>
                            Early 2023 Release
                        </div>
                        <div className='text-slate-800 text-sm font-medium leading-tight inline-flex gap-2'>
                            Join the waitlist
                            <Image
                                src={arrow_right}
                                alt='arrow right'
                            />
                        </div>
                    </div>
                    <div className='text-slate-800 text-[64px] font-semibold leading-[68px]'>
                        {`Your vision,`}
                        <br />
                        {`created by AI,`}
                        <br />
                        {`tailored by You!`}
                    </div>
                    <div className='text-slate-800 text-opacity-60 text-xl font-normal leading-7'>
                        Lorem ipsum dolor sit amet consectetur. Faucibus ut orci in tincidunt. Id eget elit tincidunt imperdiet odio
                        pellentesque purus. Pellentesque amet nunc.
                    </div>
                    <div className='flex gap-3'>
                        <button className='text-white bg-gradient-to-r from-violet-500 to-violet-400 rounded-xl shadow-inner py-3 px-4 inline-flex gap-2 items-center'>
                            <Image
                                src={zap_icon}
                                alt='zap_icon'
                            />
                            Get started
                        </button>
                        <button className='px-4 py-3 bg-white rounded-xl shadow border border-slate-800 border-opacity-10 justify-center items-center gap-2 inline-flex text-center text-black text-base font-medium leading-normal'>
                            Free Motion Maker trial
                        </button>
                    </div>
                    <div className='text-slate-800 text-opacity-60 text-sm font-normal leading-tight inline-flex items-center gap-3'>
                        <Image
                            src={avatar_group}
                            alt='avatar group'
                        />
                        Over 10k happy users
                    </div>
                </div>
                <div className='w-6/12 h-max'>
                    <div className='relative border h-full bg-red-100'>
                        <Image
                            fill
                            objectFit='contain'
                            src={first_section_image}
                            alt='first_section_image'
                            // className='min-h-full'
                        />
                    </div>
                </div>
            </section> */}
            <section className='box-pattern relative top-0 float-right flex flex-col gap-6 bg-[radial-gradient(at_center_top,_#d7c6f7,_#b3e6f1,_#ffffff)] py-0 lg:w-full lg:flex-row lg:py-16 xl:mb-0 xl:w-11/12'>
                <div className='flex h-auto flex-col gap-8 px-6 lg:h-[524px] lg:w-11/12 xl:pl-0'>
                    <div className='inline-flex w-fit items-center gap-2 rounded-full border bg-white py-1.5 pl-1.5 pr-2'>
                        <div className='rounded-full bg-gray-100 px-2 py-0.5 text-sm font-medium leading-tight text-slate-800'>
                            Early 2023 Release
                        </div>
                        <div className='inline-flex gap-2 text-sm font-medium leading-tight text-slate-800'>
                            Join the waitlist
                            <Image
                                src={arrow_right}
                                alt='arrow right'
                            />
                        </div>
                    </div>
                    <h2 className='text-5xl font-semibold leading-tight text-slate-800 lg:text-[4rem] lg:leading-[4.25rem]'>
                        {`Your vision,`}
                        <br />
                        {`created by AI,`}
                        <br />
                        {`tailored by You!`}
                    </h2>
                    <div className='text-xl font-normal leading-7 text-slate-800 text-opacity-60'>
                        Lorem ipsum dolor sit amet consectetur. Faucibus ut orci in tincidunt. Id eget elit tincidunt imperdiet odio
                        pellentesque purus. Pellentesque amet nunc.
                    </div>
                    <div className='flex gap-3'>
                        <Button
                            variant='secondary'
                            className='inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm shadow lg:text-base'
                        >
                            <Image
                                src={zap_icon}
                                alt='zap_icon'
                            />
                            Get started
                        </Button>
                        <Button
                            variant='tertiary'
                            className='rounded-xl px-4 py-3 text-center text-sm font-medium leading-normal shadow lg:text-base'
                        >
                            Free Motion Maker trial
                        </Button>
                    </div>
                    <div className='inline-flex items-center gap-3 text-sm font-normal leading-tight text-slate-800 text-opacity-60'>
                        <Image
                            src={avatar_group}
                            alt='avatar group'
                        />
                        Over 10k happy users
                    </div>
                </div>
                <div className='relative aspect-auto min-h-[32.75rem] w-full'>
                    <Image
                        fill
                        objectFit='contain'
                        objectPosition='right'
                        src={first_section_image}
                        alt='first_section_image'
                    />
                </div>
            </section>

            <section className='container mx-auto px-6 xl:px-0'>
                <ContentHeader
                    variant={'secondary'}
                    pill_text={'Features'}
                    header_text={'Boost your next animation project with AI'}
                    description_text={
                        'Lorem ipsum dolor sit amet consectetur. Urna id purus in convallis elementum tellus vehicula. Facilisis vitae in sit pellentesque in.'
                    }
                />
                {/* TODO:new mobile design needed for image component */}
                <div className='py-16'>
                    <div className='mb-6 flex aspect-video h-screen w-full flex-col rounded-[32px] border bg-gradient-to-b from-[#C7CCFF] via-[#E4EFFF] to-white py-4 lg:h-[600px] lg:flex-row lg:py-0'>
                        <div className='relative h-full w-full lg:w-3/5'>
                            <Image
                                src={second_section_image}
                                alt='second section image'
                                fill
                                objectFit='contain'
                            />
                        </div>
                        <div className='flex h-full w-full place-items-center px-6 lg:w-2/5 lg:px-0'>
                            <div className='flex w-5/6 flex-col'>
                                <Image
                                    src={data_flow_icon}
                                    alt='book_closed_icon'
                                    width={64}
                                    height={64}
                                    className='mb-6'
                                />
                                <div className='mb-4 text-2xl font-semibold leading-relaxed text-slate-800'>{`Auto-generated storyboards`}</div>
                                <div className='mb-4 text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                    Lorem ipsum dolor sit amet consectetur. Feugiat amet est diam rutrum commodo. Ipsum sit consectetur.
                                </div>
                                <div className='mb-6 text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                    Lorem ipsum dolor sit amet consectetur. Netus pellentesque dictum mauris sed amet lacus urna sed semper.
                                    In sit aliquam pretium elit nunc diam felis eu.
                                </div>
                                <Button className='h-10 w-fit rounded-xl px-4 py-2 text-base font-medium leading-normal'>
                                    Learn more
                                    <Image
                                        alt='chevron_right_icon'
                                        src={chevron_right_icon}
                                        className='ml-2'
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                        <div className='rounded-3xl border p-12'>
                            <Image
                                src={data_flow_icon}
                                alt='data flow icon'
                                width={64}
                                height={64}
                                className='mb-6'
                            />
                            <div className='mb-4 text-2xl font-semibold leading-relaxed text-slate-800'>{`AI-powered animatic builder`}</div>
                            <div className='mb-4 text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                Lorem ipsum dolor sit amet consectetur. Integer varius gravida.
                            </div>
                            <Button
                                variant='link'
                                className='text-base font-medium leading-normal text-slate-800'
                            >
                                Learn more
                            </Button>
                        </div>
                        <div className='rounded-3xl border p-12'>
                            <Image
                                src={magic_wand_icon}
                                alt='magic wand icon'
                                width={64}
                                height={64}
                                className='mb-6'
                            />
                            <p className='mb-4 text-2xl font-semibold leading-relaxed text-slate-800'>{`Auto-generated characters`}</p>
                            <div className='mb-4 text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                Lorem ipsum dolor sit amet consectetur. Integer varius gravida.
                            </div>
                            <Button
                                variant='link'
                                className='text-base font-medium leading-normal text-slate-800'
                            >
                                Learn more
                            </Button>
                        </div>
                        <div className='rounded-3xl border p-12'>
                            <Image
                                src={mic_icon}
                                alt='mic icon'
                                width={64}
                                height={64}
                                className='mb-6'
                            />
                            <div className='mb-4 text-2xl font-semibold leading-relaxed text-slate-800'>{`AI voices & lip-sync`}</div>
                            <div className='mb-4 text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                                Lorem ipsum dolor sit amet consectetur. Integer varius gravida.
                            </div>
                            <Button
                                variant='link'
                                className='text-base font-medium leading-normal text-slate-800'
                            >
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-6 xl:px-0'>
                <ContentHeader
                    pill_text={'Subheading'}
                    header_text={'Developed with Industry Leaders'}
                    description_text={
                        'Lorem ipsum dolor sit amet consectetur. Urna id purus in convallis elementum tellus vehicula. Facilisis vitae in sit pellentesque in.'
                    }
                />

                <div className='my-16 flex min-h-[486px] w-full flex-col lg:flex-row'>
                    <div className='order-last inline-flex h-full w-full flex-col items-start justify-center gap-8 px-6 lg:order-last lg:w-1/2 lg:px-0'>
                        <div className='inline-flex items-start justify-start gap-2'>
                            <div className='w-[352px] text-xl font-bold leading-7 text-slate-800'>
                                3x academy award winner for Lord of the Rings VFX
                            </div>
                        </div>
                        <div className='self-stretch text-4xl font-medium leading-[42px] text-slate-800'>
                            “ I believe that AI can solve one of the most pressing issues of the animation industry. ”
                        </div>
                        <div className='flex h-12 flex-col items-start justify-start gap-1'>
                            <div className='self-stretch text-base font-medium leading-normal text-slate-800'>Jim Rygiel</div>
                            <div className='self-stretch text-sm font-normal leading-tight text-slate-800 text-opacity-60'>
                                Special Effects pioneer, Senior Advisor{' '}
                            </div>
                        </div>
                        <div className='inline-flex items-center justify-between gap-4 self-stretch'>
                            <div className='flex flex-row gap-4'>
                                <div className='relative h-11 w-6'>
                                    <Image
                                        src={award_icon}
                                        alt=''
                                        fill
                                    />
                                </div>
                                <div className='relative h-11 w-6'>
                                    <Image
                                        src={award_icon}
                                        alt=''
                                        fill
                                    />
                                </div>
                                <div className='relative h-11 w-6'>
                                    <Image
                                        src={award_icon}
                                        alt=''
                                        fill
                                    />
                                </div>
                            </div>

                            <Button
                                variant='tertiary'
                                className='inline-flex h-11 w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-normal leading-tight text-slate-600'
                            >
                                <div className='h-2.5 w-2.5 rounded-full bg-green-500' />
                                Visit on
                                <Image
                                    className='h-6 w-[39px] rounded-md'
                                    alt=''
                                    src={imdb_socialnetwork}
                                />
                            </Button>
                        </div>
                    </div>
                    <div className='order-first flex h-full w-full flex-row justify-start lg:order-first lg:w-1/2'>
                        <div className='conatiner relative h-96 w-96 lg:h-[420px] lg:w-[420px]'>
                            <Image
                                src={profile_1}
                                alt=''
                                width='0'
                                height='0'
                                sizes='100vw'
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
                <div className='my-16 flex min-h-[486px] w-full flex-col lg:flex-row'>
                    <div className='order-last inline-flex h-full w-full flex-col items-start justify-center gap-8 px-6 lg:order-first lg:w-1/2 lg:px-0'>
                        <div className='inline-flex items-start justify-start gap-2'>
                            <div className='w-[352px] text-xl font-bold leading-7 text-slate-800'>
                                Award winning VFX artist - Spiderman, The Boys.
                            </div>
                        </div>
                        <div className='self-stretch text-4xl font-medium leading-[42px] text-slate-800'>
                            “ Motion Maker is the tool, generations of animation artists have waited for. It takes away time consuming and
                            repetitive tasks and equips creatives with all the possibilities of AI-generated artworks. ”
                        </div>
                        <div className='flex h-12 flex-col items-start justify-start gap-1'>
                            <div className='self-stretch text-base font-medium leading-normal text-slate-800'>Jim Rygiel</div>
                            <div className='self-stretch text-sm font-normal leading-tight text-slate-800 text-opacity-60'>
                                Special Effects pioneer, Senior Advisor{' '}
                            </div>
                        </div>
                        <div className='inline-flex items-center justify-between gap-4 self-stretch'>
                            <div className='relative h-11 w-6'>
                                <Image
                                    src={award_icon}
                                    alt=''
                                    fill
                                />
                            </div>

                            <Button
                                variant='tertiary'
                                className='inline-flex h-11 w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-normal leading-tight text-slate-600'
                            >
                                <div className='h-2.5 w-2.5 rounded-full bg-green-500' />
                                Visit on
                                <Image
                                    className='h-6 w-[39px] rounded-md'
                                    alt=''
                                    src={imdb_socialnetwork}
                                />
                            </Button>
                        </div>
                    </div>
                    <div className='order-first flex h-full w-full flex-row justify-end lg:order-last lg:w-1/2'>
                        <div className='conatiner relative h-96 w-96 lg:h-[420px] lg:w-[420px]'>
                            <Image
                                src={profile_2}
                                alt=''
                                width='0'
                                height='0'
                                sizes='100vw'
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-6 lg:px-0'>
                <ContentHeader
                    variant={'secondary'}
                    pill_text={'User Groups'}
                    header_text={'Built with a purpose'}
                    description_text={
                        'Lorem ipsum dolor sit amet consectetur. Urna id purus in convallis elementum tellus vehicula. Facilisis vitae in sit pellentesque in.'
                    }
                />
                <div className='grid-col-1 mt-6 grid gap-6 rounded-3xl border bg-gradient-to-b from-[#CAD2FF] via-[#ECCCFF] to-white p-12 lg:grid-cols-3'>
                    <div className='inline-flex shrink grow basis-0 flex-col items-center justify-start gap-4 self-stretch'>
                        <div className='self-stretch text-center text-5xl font-semibold leading-[54px] text-slate-800'>
                            Animation studios
                        </div>
                        <div className='self-stretch text-center text-xl font-medium leading-7 text-slate-800'>
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className='self-stretch text-center text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur. Eleifend sit nunc habitant quis arcu posuere.
                        </div>
                    </div>
                    <div className='inline-flex shrink grow basis-0 flex-col items-center justify-start gap-4 self-stretch'>
                        <div className='self-stretch text-center text-5xl font-semibold leading-[54px] text-slate-800'>
                            Animation Artists
                        </div>
                        <div className='self-stretch text-center text-xl font-medium leading-7 text-slate-800'>
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className='self-stretch text-center text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur. In consequat mi sit facilisis scelerisque. Etiam.
                        </div>
                    </div>
                    <div className='inline-flex shrink grow basis-0 flex-col items-center justify-start gap-4 self-stretch'>
                        <div className='self-stretch text-center text-5xl font-semibold leading-[54px] text-slate-800'>
                            Animation Students
                        </div>
                        <div className='self-stretch text-center text-xl font-medium leading-7 text-slate-800'>
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className='self-stretch text-center text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur. In mauris dignissim feugiat nulla vestibulum.
                        </div>
                    </div>
                </div>
                <div className='mt-6 h-96 gap-6 rounded-3xl border bg-gradient-to-b from-[#ECCCFF] via-[#D7F0FF] to-white px-6 py-10 sm:py-16 lg:h-auto xl:px-52'>
                    <div className='flex flex-col gap-6'>
                        <div className='text-center text-5xl font-semibold leading-[54px] text-slate-800'>
                            Animation and previs services
                        </div>
                        <div className='text-center text-lg font-normal leading-relaxed text-slate-800 text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur. Tempor rhoncus est cras convallis maecenas eleifend dignissim sed
                            convallis. Mi nam nunc.
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-6'>
                <div className='flex max-w-3xl flex-col pt-16'>
                    <div className='mb-8 h-8 w-fit rounded-[20px] bg-purple-100 px-2 py-1.5 text-sm font-medium leading-tight text-violet-400'>
                        Key Benefits
                    </div>
                    <div className='mb-6 text-5xl font-semibold leading-[54px] text-slate-800'>Lorem Ipsum </div>
                    <div className='text-lg font-normal leading-relaxed text-slate-800 text-opacity-60'>
                        Lorem ipsum dolor sit amet consectetur. Massa pharetra at nullam pharetra id tincidunt arcu cursus. Lectus elit
                        facilisi diam neque.
                    </div>
                </div>
                <div className='grid-col-1 grid gap-6 py-16 lg:grid-cols-4'>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 self-stretch'>
                        <div className='self-stretch text-5xl font-semibold leading-[54px] text-slate-800'>50%</div>
                        <div className='self-stretch text-xl font-medium leading-7 text-slate-800'>
                            Decrease <br />
                            production budget{' '}
                        </div>
                        <div className='self-stretch text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur. Senectus arcu amet.
                        </div>
                    </div>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 self-stretch'>
                        <div className='self-stretch text-5xl font-semibold leading-[54px] text-slate-800'>80%</div>
                        <div className='self-stretch text-xl font-medium leading-7 text-slate-800'>
                            Reduction of <br />
                            production time{' '}
                        </div>
                        <div className='self-stretch text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur. Nunc nullam risus eget.
                        </div>
                    </div>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 self-stretch'>
                        <div className='self-stretch text-5xl font-semibold leading-[54px] text-slate-800'>2x</div>
                        <div className='self-stretch text-xl font-medium leading-7 text-slate-800'>
                            Production <br />
                            Team Size
                        </div>
                        <div className='self-stretch text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur. Eu in parturient ultrices.
                        </div>
                    </div>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 self-stretch'>
                        <div className='self-stretch text-5xl font-semibold leading-[54px] text-slate-800'>100%</div>
                        <div className='self-stretch text-xl font-medium leading-7 text-slate-800'>
                            Creative <br />
                            Control
                        </div>
                        <div className='self-stretch text-base font-normal leading-normal text-slate-800 text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur. Sed sit eu neque tempor.
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full bg-[radial-gradient(at_center_top,_#d7c6f7,_#b3e6f1,_#ffffff)] py-32'>
                <div className='flex flex-col items-center justify-start gap-8'>
                    <div className='flex flex-col items-center justify-start gap-8'>
                        <div className='flex flex-col items-center justify-start gap-6 self-stretch'>
                            <div className='self-stretch text-center text-5xl font-semibold leading-[54px] text-slate-800'>
                                Join the growing community
                            </div>
                            <div className='w-2/3 text-center text-xl font-normal leading-[30px] text-slate-600'>
                                Subscribe to learn about new product features and the latest in Motion Maker AI technology, solutions, and
                                updates.
                            </div>
                        </div>
                        <div className='inline-flex items-start justify-center gap-4 self-stretch'>
                            <Button
                                variant='tertiary'
                                className='inline-flex gap-2 rounded-xl border-none bg-blue-600 px-4 py-3 text-base font-medium leading-normal text-white shadow'
                            >
                                <Image
                                    src={facebook_white}
                                    alt=''
                                    width={20}
                                    height={20}
                                />
                                Facebook
                            </Button>
                            <Button
                                variant='secondary'
                                className='inline-flex gap-2 rounded-xl border-none bg-gradient-to-r from-amber-600 via-red-500 to-fuchsia-500 px-4 py-3 text-base font-medium leading-normal text-white shadow'
                            >
                                <Image
                                    src={instagram_white}
                                    alt=''
                                    width={20}
                                    height={20}
                                />
                                Instagram
                            </Button>
                        </div>
                    </div>
                    <div className='text-center text-lg font-normal leading-relaxed text-slate-800 text-opacity-60'>
                        Feel free to join our Waitinglist
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4 xl:flex-row'>
                        <div className=' inline-flex flex-col items-start justify-start gap-1.5'>
                            <div className='flex h-12 flex-col items-start justify-start gap-1.5 self-stretch'>
                                <div className='inline-flex items-center justify-start gap-2 self-stretch rounded-lg border border-gray-300 bg-white px-3.5 py-3 shadow'>
                                    <div className='flex h-6 shrink grow basis-0 items-center justify-start gap-2'>
                                        <input
                                            className='shrink grow basis-0 text-base font-normal leading-normal text-gray-500'
                                            type='email'
                                            autoComplete='on'
                                            placeholder='Enter your email'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='self-stretch'>
                                <span className='text-sm font-normal leading-tight text-slate-600'>We care about your data in our </span>
                                <span className='text-sm font-normal leading-tight text-slate-600 underline'>privacy policy</span>
                                <span className='text-sm font-normal leading-tight text-slate-600'>.</span>
                            </div>
                        </div>
                        <Button
                            variant='secondary'
                            className='self-center rounded-xl px-[18px] py-2.5 text-base font-semibold leading-normal xl:self-start'
                        >
                            Get started
                        </Button>
                    </div>
                </div>
            </section>
            <section className='flex flex-col px-6 py-8 md:flex-row xl:py-16 xl:pl-48'>
                <div className='h-[600px] lg:h-auto lg:w-1/2'>
                    <ContentHeader
                        customClass={'flex flex-col mb-6 max-w-lg items-left text-left'}
                        pill_text={'AI Assistant'}
                        header_text={'Finny: Your Virtual Assistant'}
                        description_text={
                            'Lorem ipsum dolor sit amet consectetur. Urna id purus in convallis elementum tellus vehicula. Facilisis vitae in sit pellentesque in.'
                        }
                    />
                    {/* <div className='mb-8 h-8 w-fit max-w-lg rounded-[20px] bg-purple-100 px-2 py-1.5 text-sm font-medium leading-tight text-violet-400'>
                        AI Assistant
                    </div>
                    <div className='mb-6 max-w-lg text-5xl font-semibold leading-[54px] text-slate-800'>Finny: Your Virtual Assistant</div>
                    <div className='mb-8 max-w-lg text-lg font-normal leading-relaxed  text-slate-800 text-opacity-60'>
                        Lorem ipsum dolor sit amet consectetur. Velit dapibus auctor aenean lacus. Viverra molestie risus pharetra.
                    </div> */}
                    <div className='grid-col-3 grid h-12 max-w-lg items-start justify-start gap-4 xl:flex'>
                        <Button
                            variant='tertiary'
                            className='inline-flex gap-2 rounded-xl border-none bg-slate-800 px-4 py-3 text-base font-medium leading-normal text-white shadow'
                        >
                            <Image
                                src={windows_white}
                                alt=''
                                width={20}
                                height={20}
                            />
                            Windows
                        </Button>
                        <Button
                            variant='tertiary'
                            className='inline-flex gap-2 rounded-xl border-none bg-slate-800 px-4 py-3 text-base font-medium leading-normal text-white shadow'
                        >
                            <Image
                                src={apple_white}
                                alt=''
                                width={20}
                                height={20}
                            />
                            Mac OS
                        </Button>
                        <Button
                            variant='tertiary'
                            className='inline-flex gap-2 rounded-xl border-none bg-slate-800 px-4 py-3 text-base font-medium leading-normal text-white shadow'
                        >
                            <Image
                                src={google_play_white}
                                alt=''
                                width={20}
                                height={20}
                            />
                            Google Play
                        </Button>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <SwiperComponent />
                </div>
            </section>
        </>
    )
}

export default HomePage
