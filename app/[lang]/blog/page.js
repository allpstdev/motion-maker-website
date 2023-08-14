import ContentHeader from '@/components/content/Header'

import BlogsWithPagination from './components/BlogsWithPagination'
import FeaturedBlogs from './components/FeaturedBlogs'

export default function BlogPage() {
    return (
        <>
            <section className='container mx-auto flex flex-col items-center py-24'>
                <ContentHeader
                    customClass={'mx-auto flex w-full max-w-screen-md flex-col items-center text-center px-6 lg:px-0'}
                    pill_color={'vanilla'}
                    pill_text={'Features'}
                    header_text={'Stories and interviews'}
                    description_text={
                        'Subscribe to learn about new product features and the latest in Motion Maker AI technology, solutions, and updates.'
                    }
                />
                <div className='mt-10 flex flex-col items-start justify-start gap-4 xl:flex-row'>
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
                        <div className='self-stretch text-sm font-normal leading-tight text-slate-600'>
                            We care about your data in our <span className='underline'>privacy policy</span>.
                        </div>
                    </div>
                    <button className='flex w-[125px] items-center justify-center gap-3 self-center rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 px-[18px] py-2.5 shadow xl:self-start'>
                        <div className='text-base font-semibold leading-normal text-white'>Get started</div>
                    </button>
                </div>
            </section>
            <section className='container mx-auto flex flex-col gap-8 px-6 lg:px-0'>
                <h3 className='text-2xl font-semibold leading-loose text-gray-900'>Recent blog posts</h3>
                <FeaturedBlogs />
                <h3 className='text-2xl font-semibold leading-loose text-gray-900'>All blog posts</h3>
                <BlogsWithPagination />
            </section>
        </>
    )
}
