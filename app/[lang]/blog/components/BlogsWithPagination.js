'use client'

import BlogCard from '@/components/content/BlogCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

const BlogsWithPagination = ({
    blogData = [
        87, 23, 56, 12, 98, 34, 65, 29, 73, 41, 5, 88, 17, 52, 39, 64, 20, 76, 31, 58, 93, 14, 67, 45, 81, 25, 70, 10, 94, 47, 82, 16, 61,
        28, 75, 49, 84, 22, 59, 37, 72, 8, 1, 28, 75, 49, 84, 22, 59, 37, 72, 8, 1, 87, 23, 56, 12, 98, 34, 65, 29, 73, 41, 5, 88, 17, 52,
        39, 64, 20, 76, 31, 58, 93, 14, 67, 45, 81, 25, 70, 10, 94, 47, 82, 16, 61, 28, 75, 49, 84, 22, 59, 37, 72, 8, 1, 28, 75, 49, 84,
        22, 59, 37, 72, 8, 1
    ]
}) => {
    const cardsPerPage = 6
    const totalPages = Math.ceil(blogData.length / cardsPerPage)

    const [currentPage, setCurrentPage] = useState(1)

    const startIndex = (currentPage - 1) * cardsPerPage
    const endIndex = startIndex + cardsPerPage

    const currentCards = blogData.slice(startIndex, endIndex)

    const goToPage = pageNumber => {
        if (pageNumber < 1 || pageNumber > totalPages) return
        setCurrentPage(pageNumber)
    }

    const goToPreviousPage = () => {
        goToPage(currentPage - 1)
    }

    const goToNextPage = () => {
        goToPage(currentPage + 1)
    }

    const getPageButtons = () => {
        const pageButtons = []

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pageButtons.push(i)
            }
        } else {
            if (currentPage <= 2) {
                for (let i = 1; i <= 3; i++) {
                    pageButtons.push(i)
                }
                pageButtons.push('...')
                pageButtons.push(totalPages - 2)
                pageButtons.push(totalPages - 1)
                pageButtons.push(totalPages)
            } else if (currentPage >= totalPages - 3) {
                pageButtons.push(1)
                pageButtons.push('...')
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pageButtons.push(i)
                }
            } else {
                pageButtons.push(1)
                pageButtons.push('...')
                pageButtons.push(currentPage - 1)
                pageButtons.push(currentPage)
                pageButtons.push(currentPage + 1)
                pageButtons.push('...')
                pageButtons.push(totalPages)
            }
        }

        return pageButtons
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                {currentCards.map((card, index) => (
                    <BlogCard
                        key={index}
                        className={'flex h-[412px] w-auto flex-col gap-6'}
                        showArrow={true}
                        imageSrc={'https://placehold.co/600x400/000000/FFFFFF/png'}
                        imageAlt={'s'}
                        title={'Motion Maker'}
                        content={
                            'Lorem ipsum dolor sit amet consectetur. Vitae ut lectus dui pulvinar. Feugiat purus purus viverra cursus arcu imperdiet aliquam sed. Habitant morbi.'
                        }
                        author={'Olivia Rhye'}
                        date={'20 Jan 2024'}
                    />
                ))}
            </div>
            <div className='my-6 flex w-full flex-col items-center justify-between gap-6 lg:flex-row'>
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className='inline-flex items-center gap-2 text-sm font-semibold leading-tight text-slate-600'
                >
                    <ArrowLeft
                        color='#475467'
                        className='h-auto w-5'
                    />
                    Previous
                </button>
                <div className=''>
                    {getPageButtons().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => (typeof page === 'number' ? goToPage(page) : null)}
                            className={`rounded px-3 py-1 ${
                                currentPage === page && typeof page === 'number'
                                    ? 'bg-violet-700 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className='inline-flex items-center gap-2 text-sm font-semibold leading-tight text-gray-600'
                >
                    Next
                    <ArrowRight
                        color='#475467'
                        className='h-auto w-5'
                    />
                </button>
            </div>
        </div>
    )
}

export default BlogsWithPagination
