import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { SlPeople } from "react-icons/sl";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {
  return (
    <div className='bg-primary  h-18 pb-0 '>

      
      <div><h1 className=' pl-10  pt-4 items-center size-6 font-extrabold text-3xl font-serif tracking-wide text-white'>Purity </h1>
  
      </div>
       
      <div className='flex-1 items-center justify-center  '>
       <input type="text"
       placeholder='search for gold,diamond...' className=" flex-grow  
         bg-white px-[10%] 
      rounded-md   max-w-fit mx-[40%] text-slate-400 justify-end" />
      </div >
      <div className='flex justify-end pr-[100px]  items-center  '>
      <CiHeart  className='  font-bold size-8  text-center text-white '/>
      <SlPeople className=' pl-2 ml-2 font-bold size-8  text-center text-white ' />
      <AiOutlineShoppingCart  className=' pl-2 ml-2 font-bold size-8  text-center text-white '/>
     
      </div> 


  </div>
    
    
  )
}

export default Header
