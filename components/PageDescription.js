import React from 'react'

const PageDescription = ({ text }) => {
    return (
        <h4 className='m-4 mt-10 xl:m-8 xl:mt-16 px-4 2xl:px-48 xl:px-36 lg:px-24 md:px-12 sm:px-8 text-center text-xl font-light tracking-[-0.0001em] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>
            {text}
        </h4>
    )
}

export default PageDescription
