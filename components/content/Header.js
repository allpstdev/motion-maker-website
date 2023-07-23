import React from 'react'

const ContentHeader = ({ text }) => {
    return (
        <h3 className='mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
            {text}
        </h3>
    )
}

export default ContentHeader
