import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
      <div className='flex flex-row gap-3 items-center'>
      <Image 
      src="/mypic.png" 
      alt='logo' 
      width={100} 
      height={100} 
      />
      </div>
      <h1 className="text-white text-[25px] font-semibold">
        My Portfolio
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">
            {" "}
            Dev
            {" "}
            </span>
      </h1>
      <div className='flex text-white flex-row gap-5 mb-2'>
         {Socials.map((social) =>(
          <Image
          key={social.name}
          src={social.src}
          alt={social.name}
          width={30}
          height={30}
          className='cursor-pointer object-contain hover:scale-110 transform transition duration-300 ease-in-out'
          style={{ filter: 'brightness(0) invert(1)' }}
        />

         ))}
      </div>
  
    </div>
  )
}

export default Navbar