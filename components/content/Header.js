import React from 'react'

import { Badge } from '../ui/badge'

const HighlightedHeader = ({ headerText, highlightedWord }) => {
    if (!headerText) return null

    const splitHeaderText = headerText.split(highlightedWord)
    const headerContent = splitHeaderText.map((part, index) => (
        <React.Fragment key={index}>
            {part}
            {index !== splitHeaderText.length - 1 && <span className='text-violet-700'>{highlightedWord}</span>}
        </React.Fragment>
    ))

    return <div className='mb-6 text-5xl font-semibold leading-[54px] text-slate-800'>{headerContent}</div>
}

const ContentHeader = ({ pill_text, description_text, header_text, variant, highlightHeaderWord, customClass }) => {
    return (
        <div className={customClass ? customClass : 'mx-auto flex w-full max-w-screen-md flex-col items-center pt-16 text-center'}>
            <Badge
                variant={variant}
                className='mb-8 flex h-8 w-fit rounded-[20px] px-2 py-1.5 text-center text-sm font-medium leading-tight'
            >
                {pill_text}
            </Badge>
            <HighlightedHeader
                headerText={header_text}
                highlightedWord={highlightHeaderWord}
            />
            <div className='max-w-2xl text-lg font-normal leading-relaxed text-slate-800 text-opacity-60'>{description_text}</div>
        </div>
    )
}

export default ContentHeader
