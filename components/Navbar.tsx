import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
      <div className='flex flex-row gap-3 items-center'>
      <Image 
      src="/mypic.ico" 
      alt='logo' 
      width={100} 
      height={100} 
      />
      </div>
    </div>
  )
}

export default Navbar