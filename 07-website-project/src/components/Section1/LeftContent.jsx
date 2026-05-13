import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-[40%]'>
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent