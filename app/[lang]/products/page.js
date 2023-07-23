import EllipseComponent from '@/components/content/EllipseComponent'
import Header from '@/components/Header'
import SubHeader from '@/components/SubHeader'
import { dictionary } from '@/content'
import Image from 'next/image'

import demo from '../../../public/Fundamentals_logo_lg.png'
import products_interface from '../../../public/products_interface.png'
import products_motion_maker from '../../../public/products_motion_maker.png'

const ProductsPage = ({ params }) => {
    const { page_header, page_sub_header } = dictionary[params.lang]?.products
    return (
        <div>
            <Header text={page_header} />
            <SubHeader text={page_sub_header} />

            <Image
                alt='demo'
                src={demo}
                width='0'
                height='0'
                className='w-full lg:w-1/2 mx-auto lg:mx-auto mb-72 mt-20 invisible'
            />
            <EllipseComponent />

            <section className='bg-[#FDF9F5] pt-20 px-4 xl:pt-40 xl:pb-12 xl:px-28'>
                <div className='mt-12 xl:mt-32 '>
                    <div className='flex w-full flex-col items-center justify-center  gap-10 xl:gap-32'>
                        <div className='flex w-100 items-center justify-center rounded-[12px] xl:rounded-[32px] border-2 border-black'>
                            <Image
                                src={products_motion_maker}
                                alt='product motion maker'
                                width='0'
                                height='0'
                                className='w-100 h-auto'
                            />
                        </div>
                        <div className='flex w-100 items-center justify-center rounded-[12px] xl:rounded-[32px] border-2 border-black mb-12 xl:mb-0'>
                            <Image
                                src={products_interface}
                                alt='product motion maker'
                                width='0'
                                height='0'
                                className='w-100 h-auto'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductsPage
