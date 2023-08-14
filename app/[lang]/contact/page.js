import { dictionary } from '@/content'

import { InputForm } from './components/Form'

const LoginPage = ({ params }) => {
    const {} = dictionary[params.lang]?.products
    return (
        <div className='flex h-auto min-h-[1108px] flex-col lg:flex-row 2xl:w-full'>
            <div className='w-full bg-login_image bg-cover lg:h-auto lg:w-1/2' />
            <div className='relative mx-auto flex h-full w-full flex-row items-center justify-center py-24 lg:w-1/2'>
                <div className='inline-flex h-auto w-2/3 flex-col items-start justify-start gap-12 lg:w-1/2'>
                    <div className='flex h-auto flex-col items-start justify-start gap-6 self-stretch'>
                        <div className='self-stretch text-5xl font-semibold leading-[60px] text-gray-900'>
                            Get in Contact with our Maker team
                        </div>
                        <div className='self-stretch'>
                            <span className='text-xl font-normal leading-[30px] text-slate-600'>You can reach us anytime via </span>
                            <span className='text-xl font-medium leading-[30px] text-violet-700'>hi@motionmaker.com</span>
                        </div>
                    </div>
                    <InputForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
