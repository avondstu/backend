import Image from 'next/image'
import React from 'react'
type IconProps = React.HTMLAttributes<SVGElement>
const ImageLogo = (props: IconProps) => {
    return (
        <>
            <Image
            src='/images/logo/avond.png'
            width={100}
            height={100}
            alt='Logo Avond'
            className='w-[2vw]'
            />

        </>
    )
}

export default ImageLogo