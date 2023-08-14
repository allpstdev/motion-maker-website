import { dictionary } from '@/content'

import { InputForm } from './components/Form'

const WaitlistPage = ({ params }) => {
    const {} = dictionary[params.lang]?.products
    return (
        <div className='flex h-auto min-h-[858px] w-full items-center justify-center gap-16 bg-waitlist_image bg-cover bg-no-repeat py-24'>
            <div className='mx-6 flex w-full flex-col items-center justify-center gap-6 lg:mx-auto lg:w-1/2'>
                <p className='text-center text-5xl font-semibold leading-[60px] text-white'>
                    Unlock the Future with One Click: Join the Waitlist for Motion Maker Today!
                </p>
                <div className='inline-flex w-auto max-w-[515px] flex-col items-start justify-start gap-6 rounded-3xl border border-slate-800 border-opacity-10 bg-gray-50 bg-opacity-90 p-6 backdrop-blur-xl'>
                    <InputForm />
                </div>
            </div>
        </div>
    )
}

export default WaitlistPage
