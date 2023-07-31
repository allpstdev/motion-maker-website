import Image from 'next/image'
import React from 'react'

import data_flow_icon from '../../public/data_flow_icon.svg'

const Card = ({ header, description, isSelected }) => {
    return (
        <div
            className={`relative h-full items-center rounded-3xl border p-4 text-center ${
                isSelected ? 'border-violet-400 bg-purple-100' : 'border bg-gray-50'
            }`}
        >
            {isSelected ? (
                <div className='absolute right-5 top-4 h-6 w-6 rounded-3xl bg-violet-400'>
                    <div className='absolute left-[8px] top-[8px] h-2 w-2 rounded-full bg-white' />
                </div>
            ) : (
                <div className='absolute right-5 top-4 h-6 w-6 rounded-3xl border border-slate-800 border-opacity-10 bg-white' />
            )}
            {/* Rest of the card content */}
            <Image
                src={data_flow_icon}
                alt='data flow icon'
                width={64}
                height={64}
                className='mx-auto mb-3'
            />
            <div className='mb-4 text-2xl font-semibold leading-relaxed text-slate-800'>{header}</div>
            <div className='mb-4 text-base font-normal leading-normal text-slate-800 text-opacity-60'>{description}</div>
        </div>
    )
}

export default Card
