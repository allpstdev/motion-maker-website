import { dictionary } from '@/content'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

import motion_maker_logo from '../../../public/motion_maker_logo.svg'
import { InputForm } from './components/Form'

const LoginPage = ({ params }) => {
    const {} = dictionary[params.lang]?.products
    return (
        <div className='box-pattern flex h-auto min-h-[840px] flex-col lg:flex-row 2xl:w-full'>
            <div className='w-full bg-login_image bg-cover lg:w-1/2'>
                <div className='mx-10 mb-10 mt-[412px] inline-flex h-auto flex-col items-start justify-start gap-8 rounded-[10px] border border-neutral-500 border-opacity-50 bg-black bg-opacity-30 px-6 py-8 backdrop-blur-xl'>
                    <div className='self-stretch'>
                        <span className='text-4xl font-semibold leading-[2.75rem] text-white'>“We’ve been using </span>
                        <span className='text-4xl font-semibold leading-[2.75rem] text-violet-500'>Motion Maker</span>
                        <span className='text-4xl font-semibold leading-[2.75rem] text-white'>
                            {' '}
                            to kick start and streamline every new project and can’t imagine our pipeline working without it.”
                        </span>
                    </div>
                    <div className='flex h-[116px] flex-col items-start justify-start gap-4 self-stretch'>
                        <div className='inline-flex items-start justify-start gap-4 self-stretch'>
                            <div className='shrink grow basis-0 text-4xl font-semibold leading-[44px] text-white'>Michael Callaway</div>
                        </div>
                        <div className='inline-flex items-start justify-start gap-3 self-stretch'>
                            <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1'>
                                <div className='self-stretch text-lg font-semibold leading-7 text-white'>Founder, Blackbox</div>
                                <div className='self-stretch text-base font-medium leading-normal text-white'>Animation Studio</div>
                            </div>
                            <div className='flex items-start justify-start gap-8'>
                                <div className='flex h-14 w-14 items-center justify-center gap-3 rounded-[28px] border border-white border-opacity-50'>
                                    <ArrowLeft
                                        color='white'
                                        className='h-auto w-6'
                                    />
                                </div>
                                <div className='flex h-14 w-14 items-center justify-center gap-3 rounded-[28px] border border-white border-opacity-50'>
                                    <ArrowRight
                                        color='white'
                                        className='h-auto w-6'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative grid h-full w-full place-items-center py-[122px] lg:w-1/2'>
                <div className='absolute right-0 top-0 -z-20 h-full w-3/5 bg-top_right_pinkgradient bg-contain bg-no-repeat' />
                <div className='inline-flex h-[584px] w-[360px] flex-col items-center justify-center gap-8 '>
                    <div className='relative h-[50px] w-[50px] place-self-start rounded-[70px]'>
                        <Image
                            src={motion_maker_logo}
                            alt=''
                            height={50}
                            weight={50}
                        />
                    </div>
                    <div className='flex h-[74px] flex-col items-start justify-start gap-3 self-stretch'>
                        <div className='self-stretch text-3xl font-semibold leading-[38px] text-gray-900'>Welcome back</div>
                        <div className='self-stretch text-base font-normal leading-normal text-slate-600'>Please enter your details.</div>
                    </div>

                    <InputForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
