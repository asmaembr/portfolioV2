"use client"
import React from 'react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = "https://drive.google.com/file/d/1uE6p-SS30sBpHgapEM5qEfZ5Z3BppXwh/view?usp=sharing";
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Page = () => {
  return (
    <div
      className='w-screen h-screen overflow-hidden'
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url("montains.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <div className='relative z-10 w-full h-full flex items-center justify-center'>
        <div className='h-screen w-screen flex items-center justify-center bg-cover bg-center'>
          <div className='flex flex-row  max-w-[100%] max-h-[80%] text-center items-center'>
        <div className='flex flex-col gap-5 max-w-[50%] text-left'>
            <h1 className='text-4xl text-white text-center font-semibold'>
        About Me
      </h1>
      <p className='ml-10 mr-10 text-center text-white text-xl'>
        I&apos;m a computer engineering student with a strong interest in technology and management.
        I&apos;m also a team player who is active and skilled at finding relevant solutions to problems.
      </p>
      <div className="text-center">

        <button
          onClick={handleDownload}
          className=" bg-purple-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-400 transition duration-300"
        >

          Download CV
        </button>
        </div>
            </div>
         
            <div className='flex flex-col gap-5 max-w-[50%] text-left'>
              <div className="max-w-[80%] max-h-[80%] flex flex-wrap justify-center gap-3">
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
    </div>

  )
}

export default Page 