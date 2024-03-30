import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'
import Link from 'next/link'

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
      <div className='flex text-white flex-row gap-3 mb-2'>
        {Socials.map((social) =>(
         <Link href={social.link} 
         target="_blank" 
         rel="noopener noreferrer"
         key={social.name}>
         <Image
         src={social.src}
         alt={social.name}
         width={30}
         height={30}
         className='cursor-pointer object-contain hover:scale-110 transform transition duration-300 ease-in-out'
         style={{ filter: 'brightness(0) invert(1)' }}
        />
        </Link>
        ))}
      </div>
  
    </div>
  )
}

export default Navbar