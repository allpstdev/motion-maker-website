import { dictionary } from '@/content'
import zoom_icon from '@/public/zoom_icon.svg'
import Image from 'next/image'

import { InputForm } from './components/Form'

const SignUpPage = ({ params }) => {
    const {} = dictionary[params.lang]?.products
    return (
        <div className='flex h-auto min-h-[1108px] flex-col lg:flex-row 2xl:w-full'>
            <div className=' w-full bg-login_image bg-cover lg:h-auto lg:w-1/2' />
            <div className='relative mx-auto flex h-full w-full flex-row items-center justify-center py-24 lg:w-1/2'>
                <div className='inline-flex h-auto w-2/3 flex-col items-start justify-start gap-12 lg:w-1/2'>
                    <div className='flex h-auto flex-col items-start justify-start gap-6 self-stretch'>
                        <div className='self-stretch text-5xl font-semibold leading-[60px] text-gray-900'>Try Motion Maker</div>
                        <div className='text-xl font-normal leading-[30px] text-slate-600'>
                            Lorem ipsum dolor sit amet consectetur. Commodo quisque tellus nunc libero mauris. Fusce a at lorem leo
                            faucibus. Eu integer facilisis sed vitae viverra velit.
                        </div>
                        <div className='flex flex-col items-start justify-start gap-6 rounded-3xl border border-slate-800 border-opacity-10 bg-white p-6'>
                            <div className='inline-flex items-center justify-start gap-2 self-stretch border-b pb-3'>
                                <Image
                                    src={zoom_icon}
                                    alt='zoom icon'
                                    height={32}
                                    width={32}
                                />
                                <div className='text-2xl font-semibold leading-loose text-slate-800'>Demo Zoom Call</div>
                                <div className='flex w-[100px] items-center justify-start gap-1 rounded-[20px] bg-green-100 px-2'>
                                    <div className='text-center text-sm font-medium leading-tight text-green-600'>Walkthrough</div>
                                </div>
                            </div>
                            <InputForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
