import Image from 'next/image'
import React from 'react'

const FeatureCardContent = ({ icon, header, description, image }) => {
    return (
        <>
            <div className='flex flex-col items-start justify-start gap-6 p-12'>
                {icon ? (
                    <Image
                        src={icon}
                        alt='feature icon'
                        width={64}
                        height={64}
                    />
                ) : (
                    <div className='relative h-16 w-16 rounded-xl bg-gradient-to-bl from-[#8A88FB] to-[#D079EE]' />
                )}
                <div className='flex flex-col items-start justify-start gap-4'>
                    <div className='text-2xl font-semibold leading-loose text-slate-800'>{header}</div>
                    <div className='text-base font-normal leading-normal text-slate-800 text-opacity-60'>{description}</div>
                </div>
            </div>
            <div className='relative mt-6 h-64 w-full lg:mt-0 lg:h-[320px] xl:h-[380px]'>
                <Image
                    src={image}
                    alt=''
                    fill
                    className='rounded-ee-3xl'
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </div>
        </>
    )
}

export default FeatureCardContent
