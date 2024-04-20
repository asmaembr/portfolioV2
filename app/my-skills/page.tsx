"use client"
import React from 'react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'
    style={{       
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundImage: 'url("lightbg.jpg")',
      backgroundSize: 'cover',
           }}>


    <div className='relative z-10 w-full h-full flex items-center justify-center'>
    <div 
    className='pt-20 h-screen w-screen items-center justify-center bg-cover bg-center'>
      <div 
      className=' flex flex-col gap-5 max-w-[100%] max-h-[80%] text-center items-center'>
        <div
        className='flex flex-col gap-5 max-w-[600px] text-center'>
          <h1 className='mt-5 mr-5 ml-5 text-4xl text-white font-semibold'>
            Skills
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">
            {" "}
            &amp;
            {" "}
            </span>
            Technologies
            </h1>
          <p className='ml-5 mr-5 text-white text-xl '>
          Here&apos;s some of the technologies and skills I&apos;ve been working with recently
          </p>
          </div>

          <div className=" max-w-[80%] max-h-[80%] flex flex-wrap justify-center gap-3">
  {SkillData.map((skill, index) => (
    <div key={index} className="hover:scale-125 transition-transform duration-300">
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