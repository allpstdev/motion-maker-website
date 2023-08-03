import Image from 'next/image'
import React from 'react'

import check_line from '../../public/check_line.svg'

const PricingCard = ({ isCustom, isGradient, price, currency, header, pill_text, description, perks, button_color }) => {
    return (
        <div
            className={
                'flex h-[502px] w-96 flex-col items-start justify-between rounded-3xl border p-6 ' +
                (isGradient ? 'bg-[radial-gradient(at_center_top,_#CAD2FF,_#ECCCFF,_#ffffff)]' : '')
            }
        >
            <div className='flex h-auto w-full flex-col justify-between gap-12 pb-6'>
                <div className='flex h-16 flex-col items-start justify-start gap-2'>
                    <div className='flex h-8 items-center justify-start gap-2'>
                        <div className='text-2xl font-semibold leading-loose text-slate-800'>{header}</div>
                        {pill_text && (
                            <div className='flex h-6 items-center justify-start gap-1 rounded-[20px] bg-white px-2 py-0.5'>
                                <div className='text-center text-sm font-medium leading-tight text-slate-800'>{pill_text}</div>
                            </div>
                        )}
                    </div>
                    <div className='h-6 text-base font-normal leading-normal text-slate-800 text-opacity-60'>{description}</div>
                </div>
                <div className='flex h-12 items-baseline justify-start gap-1.5'>
                    <span className='text-5xl font-semibold text-slate-800'>{isCustom ? 'Custom' : price}</span>
                    {currency && <span className='text-base font-semibold text-slate-800'>{currency}</span>}
                    <div className='text-base font-normal leading-normal text-slate-800 text-opacity-60'>/month</div>
                </div>
            </div>
            <div className='flex h-full w-full flex-col items-start justify-start gap-3 border-y border-slate-600 border-opacity-20 pt-6'>
                {perks?.map(e => (
                    <div
                        key={e}
                        className='inline-flex items-center justify-start gap-3 '
                    >
                        <Image
                            src={check_line}
                            alt='check icon'
                            width={24}
                            height={24}
                        />
                        <div className='text-base font-medium leading-normal text-slate-800'>{e}</div>
                    </div>
                ))}
            </div>
            <div className='w-full pt-6'>
                <div
                    className={
                        'flex items-center justify-center self-stretch rounded-xl px-4 py-3 ' +
                        (button_color === 'primary'
                            ? 'border border-slate-800 border-opacity-10 bg-gradient-to-r from-violet-500 to-violet-400 shadow'
                            : button_color === 'secondary'
                            ? 'bg-slate-800'
                            : 'border border-slate-800')
                    }
                >
                    {/* <div className='flex items-start justify-start gap-2'> */}
                    <div className='text-center text-base font-medium leading-normal text-white'>
                        {isCustom ? (
                            <>
                                <span className='text-base font-bold leading-normal text-black'>Contact us</span>
                                <span className='text-base font-medium leading-normal text-black'> for your offer</span>
                            </>
                        ) : (
                            'Get started'
                        )}
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default PricingCard
