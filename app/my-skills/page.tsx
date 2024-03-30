"use client"
import React from 'react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
    <video
      autoPlay
      loop
      className='absolute top-0 left-0 min-w-full min-h-full object-cover'
    >
      <source src="/4K.mp4" type='video/mp4' />
    </video>

    <div className='relative z-10 w-full h-full flex items-center justify-center'>
    <div 
    className='pt-20 h-screen w-screen items-center justify-center bg-cover bg-center'>
      <div 
      className=' flex flex-col gap-10 max-w-[100%] max-h-[80%] text-center items-center'>
        <div
        className='flex flex-col  items-center gap-5'>
          <h1 className='font-semibold mr-5 ml-5 text-white text-[40px]'>
          Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">
            {" "}
            &
            {" "}
            </span>
            Technologies
            </h1>
            <p className="text-gray-400 mr-5 ml-5 text-[20px]">
            Here are some of the skills and technologies I have worked with. 
            </p>
          </div>

          <div className=" max-w-[80%] max-h-[80%] flex flex-wrap justify-center items-center gap-4">
  {SkillData.map((skill, index) => (
    <div key={index} className="overflow-hidden hover:scale-125 transition-transform duration-300">
      <Image
        src={skill.Image}
        alt={skill.name}
        width={skill.width}
        height={skill.height}
        className="object-contain"
      />
    </div>
  ))}
</div>


      </div>
      </div>
    </div>
  </div>

  )
}

export default Page 