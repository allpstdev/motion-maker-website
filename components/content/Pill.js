import React from 'react'

const Pill = ({ color, pill_text }) => {
    return (
        <>
            {color === 'primary' ? (
                <div className=' mb-8 flex h-8 w-fit rounded-[20px] bg-purple-100 px-2 py-1.5 text-center text-sm font-medium leading-tight text-violet-400'>
                    {pill_text}
                </div>
            ) : (
                <div className='mb-8 h-8 w-fit rounded-[20px] bg-slate-800 bg-opacity-5 px-2 py-1.5 text-center text-sm font-medium leading-tight text-slate-800'>
                    {pill_text}
                </div>
            )}
        </>
    )
}

export default Pill
