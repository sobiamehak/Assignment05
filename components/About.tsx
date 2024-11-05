import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div>
        <h1 className=' items-center text-center font-serif font-extrabold tracking-widest'>SHOP BY CATEGORIES</h1>
        <div className='flex px-10  text-center justify-center pt-4 font-sans'>
        <h1 className='ml-6'>Ring</h1>
        <h1 className='ml-20'> Earring</h1>
        <h1 className='ml-20'>Bracelet</h1>
        <h1 className='ml-20'>Nacklace</h1>
        </div>
        
    <div className='grid grid-cols-3 md:grid-cols-3 gap-6  p-4 m-2'>

   <Image src="/images/image1.jpeg" alt="" 
   width={800} height={500} className='w-20px h-60'/>   
      <Image src="/images/image2.jpeg" alt="" 
   width={300} height={600} className='  w-20px h-60'/> 
      <Image src="/images/image3.jpeg" alt="" 
   width={300} height={600} className='w-20px h-60'/> 
   
   <Image src="/images/image4.png" alt="" 
   width={400} height={600} className='w-full h-auto'/> 
      <Image src="/images/image5.jpg" alt="" 
   width={300} height={600}className='w-full h-auto'/> 
      <Image src="/images/images.jpeg" alt="" 
   width={300} height={600} className='w-20px h-auto'/>
   

</div>
</div>
  )
}

export default About
