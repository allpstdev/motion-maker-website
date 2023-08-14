import BlogCard from '@/components/content/BlogCard'
import React from 'react'

const FeaturedBlogs = () => {
    return (
        <div className='grid h-auto w-full grid-cols-1 grid-rows-3 gap-8 lg:h-auto lg:grid-cols-2 lg:grid-rows-2'>
            {/* <div className='grid h-auto w-full grid-cols-1 grid-rows-3 gap-8 lg:h-auto lg:grid-cols-2 lg:grid-rows-2'> */}
            <BlogCard
                // className={'col-span-1 row-span-1 flex flex-col gap-6 lg:col-span-1 lg:row-span-2'}
                className={'col-span-2 h-[412px] lg:col-span-1  lg:row-span-2 lg:h-auto'}
                showArrow={true}
                imageSrc={'https://placehold.co/600x400/000000/FFFFFF/png'}
                imageAlt={'s'}
                title={'Motion Maker'}
                content={
                    'Lorem ipsum dolor sit amet consectetur. Vitae ut lectus dui pulvinar. Feugiat purus purus viverra cursus arcu imperdiet aliquam sed. Habitant morbi.'
                }
                author={'Olivia Rhye'}
                date={'20 Jan 2024'}
                pill_text={'Feature Update'}
                showPill={true}
            />
            <BlogCard
                // className={'col-span-1 row-span-1 flex h-auto w-full flex-row gap-6 lg:col-span-1 lg:row-span-1'}
                className={'col-span-2 h-[412px] lg:col-span-1 lg:h-auto'}
                isHorizontal={true}
                showArrow={true}
                imageSrc={'https://placehold.co/320x200/000000/FFFFFF/png'}
                imageAlt={'s'}
                title={'Motion Maker'}
                content={
                    'Lorem ipsum dolor sit amet consectetur. Vitae ut lectus dui pulvinar. Feugiat purus purus viverra cursus arcu imperdiet aliquam sed. Habitant morbi.'
                }
                author={'Olivia Rhye'}
                date={'20 Jan 2024'}
                pill_text={'Event'}
                showPill={true}
            />
            <BlogCard
                // className={'col-span-1 row-span-1 flex h-auto w-full flex-row gap-6 lg:col-span-1 lg:row-span-1'}
                className={'col-span-2 h-[412px] lg:col-span-1 lg:h-auto'}
                isHorizontal={true}
                showArrow={true}
                imageSrc={'https://placehold.co/320x200/000000/FFFFFF/png'}
                imageAlt={'s'}
                title={'Motion Maker'}
                content={
                    'Lorem ipsum dolor sit amet consectetur. Vitae ut lectus dui pulvinar. Feugiat purus purus viverra cursus arcu imperdiet aliquam sed. Habitant morbi.'
                }
                author={'Olivia Rhye'}
                date={'20 Jan 2024'}
                pill_text={'Bugfix'}
                showPill={true}
            />
        </div>
    )
}

export default FeaturedBlogs
