import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div  className='container h-screen ' >
        <div className='flex justify-end'>
      <div className=' flex  flex-col justify-center  ml-10 lg:mx-[250] md:text-lg lg:text-xl md:ml-20 lg:ml-32'>
        <h1 className=' font-serif font-extrabold  my-16 size-9'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className='font-serif  mt-10 text-gray-600'>An example of intricate workmanship and detail, elegant <br /> necklaces and long and short chains form a part of our <br />
         desirable collection.</p>

         <button className='bg-primary text-gray-700  py-2 rounded w-40'>Explore Now</button>
      </div>
      
      <div className='md:flex-col mt-10 '> <Image src="/images/hero.png" alt="image" className='justify-end content-end'
      width={462} height={647}/> </div>
    </div>
    </div>
  )
}

export default Hero
