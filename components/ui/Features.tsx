import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='flex space-x-4 py-10'>
        <Image src={"/images/cardOne.png"} height={100} width={100} alt='CardOne' className='h-[200px] w-full'/>
        <Image src={"/images/cardTwo.png"} height={100} width={100} alt='CardTwo' className='h-[200px] w-full'/>
    </div>
  )
}

export default Features