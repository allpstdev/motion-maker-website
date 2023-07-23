import ContentDescription from '@/components/content/Description'
import EllipseComponent from '@/components/content/EllipseComponent'
import ContentHeader from '@/components/content/Header'
import Header from '@/components/Header'
import PageDescription from '@/components/PageDescription'
import SubHeader from '@/components/SubHeader'
import { dictionary } from '@/content'
import Image from 'next/image'

import demo from '../../../public/Fundamentals_logo_lg.png'

const TechnologyPage = ({ params }) => {
    const {
        page_header,
        page_sub_header,
        page_description,
        content_1_header,
        content_1_decription,
        content_2_header,
        content_2_decription,
        content_3_header,
        content_3_decription,
        content_4_header,
        content_4_decription
    } = dictionary[params.lang]?.technology
    return (
        <div>
            <Header text={page_header} />
            <SubHeader text={page_sub_header} />
            <PageDescription text={page_description} />
            <Image
                alt='demo'
                src={demo}
                width='0'
                height='0'
                className='w-full lg:w-1/2 mx-auto lg:mx-auto mb-72 mt-20 invisible'
            />
            <EllipseComponent />
            <section className='bg-[#FDF9F5] pt-20 px-4 xl:pt-40 xl:pb-12 xl:px-28'>
                <div className='mt-8 xl:mt-32 pb-48'>
                    <div className='mb-24 xl:mb-60'>
                        <ContentHeader text={content_1_header} />
                        <ContentDescription text={content_1_decription} />
                    </div>
                    <div className='mb-24 xl:mb-60'>
                        <ContentHeader text={content_2_header} />
                        <ContentDescription text={content_2_decription} />
                    </div>
                    <div className='mb-24 xl:mb-60'>
                        <ContentHeader text={content_3_header} />
                        <ContentDescription text={content_3_decription} />
                    </div>
                    <div className='mb-24 xl:mb-60'>
                        <ContentHeader text={content_4_header} />
                        <ContentDescription text={content_4_decription} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechnologyPage
