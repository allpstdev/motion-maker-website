const Header = ({ text }) => {
    return (
        <h1 className='p-8 xl:p-10 text-center text-4xl font-bold tracking-widest sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl'>
            {text}
        </h1>
    )
}

export default Header
