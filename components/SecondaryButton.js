const SecondaryButton = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='w-36 h-8 px-3 py-1.5 bg-white rounded-lg shadow border border-slate-800 border-opacity-10 justify-center items-center gap-1 inline-flex'
        >
            <span className='text-center text-black text-sm font-medium leading-tight'>{text}</span>
        </button>
    )
}
export default SecondaryButton
