const SubHeader = ({ text }) => {
    return (
        <h2
            className={`m-8 xl:m-10 text-center text-2xl font-medium tracking-widest sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl`}
        >
            {text}
        </h2>
    )
}

export default SubHeader
