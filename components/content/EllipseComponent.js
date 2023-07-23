import Image from 'next/image'

import ellipse from '../../public/ellipse.svg'
import purple_ellipse from '../../public/purple_ellipse.svg'

const EllipseComponent = ({ variant }) => {
    const getEllipse = () => (variant === 'purple' ? purple_ellipse : ellipse)
    return (
        <div>
            <Image
                alt='demo'
                width={0}
                height={0}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{ width: '100%', height: 'auto' }}
                src={getEllipse()}
            />
        </div>
    )
}

export default EllipseComponent
