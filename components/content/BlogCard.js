import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Badge } from '../ui/badge'

const BlogCard = ({
    imageSrc,
    imageAlt,
    author,
    date,
    title,
    content,
    isHorizontal = false,
    showArrow,
    showPill,
    pill_text,
    className
}) => {
    const cardLayoutClass = isHorizontal ? 'flex-col lg:flex-row' : 'flex-col'
    return (
        <div className={cn(`${cardLayoutClass} flex items-start justify-start gap-6`, className)}>
            <div className={`relative h-full w-full rounded-2xl ${isHorizontal ? ' flex-1' : ' w-full'}`}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                />
            </div>
            <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-6'>
                <div className='flex h-[136px] flex-col items-start justify-start gap-2 self-stretch'>
                    <div className='self-stretch text-sm font-semibold leading-tight text-violet-700'>
                        {author} • {date}
                    </div>
                    <div className='flex h-[108px] flex-col items-start justify-start gap-2 self-stretch'>
                        <div className='flex w-full items-center justify-between'>
                            <div className='self-stretch text-2xl font-semibold leading-7 text-gray-900'>{title}</div>
                            {showArrow && <ArrowUpRight className='h-6 w-6 transform' />}
                        </div>
                        <div className='self-stretch text-base font-normal leading-normal text-slate-600'>{content}</div>
                    </div>
                </div>
                <div className='inline-flex items-start justify-start gap-2 self-stretch'>
                    {showPill && (
                        <Badge
                            className={
                                'border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-center text-sm font-medium leading-tight text-violet-700'
                            }
                        >
                            {pill_text}
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BlogCard
