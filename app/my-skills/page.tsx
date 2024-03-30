"use client"
import React from 'react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'
import videoBg from '@/public/bg.mp4'

const Page = () => {
  return (
    <div
    className='pt-20 h-screen w-screen items-center justify-center bg-cover bg-center'>
      <video
      src={videoBg}
      loop
      autoPlay
      muted
      className='absolute object-cover w-full h-full z-[-1]'
      />
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
              tried my best to master each one of these skills
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
  )
}

export default Page 