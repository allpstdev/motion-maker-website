const ContentButton = ({ text }) => {
    return (
        <div
            className='mt-8 xl:mt-20 bg-white w-5/6 xl:w-1/2 h-full py-5 xl:py-14 text-lg xl:text-4xl text-center mx-auto border border-black rounded-3xl'
            role='button'
            tabIndex={0}
        >
            {text}
        </div>
    )
}

export default ContentButton
