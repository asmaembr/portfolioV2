"use client"
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import { SkillData } from '@/constants';
import Image from 'next/image';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1uE6p-SS30sBpHgapEM5qEfZ5Z3BppXwh/view?usp=sharing';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 768; // Adjust this value as per your design requirements
      setIsMobile(window.innerWidth < mobileWidth);
    };

    // Initial check
    checkIfMobile();

    // Listen to window resize for responsiveness
    window.addEventListener('resize', checkIfMobile);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div
      className='w-screen h-screen overflow-hidden flex items-center justify-center'
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url("montains.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <div className='relative z-10 w-full h-full flex flex-col items-center justify-center'>
        <div className='h-full w-full flex flex-col items-center justify-center rounded-xl bg-cover bg-center text-center'>
          <h1 className='text-4xl text-white font-semibold'>About Me</h1>
          <div className="flex flex-col max-w-[80%] max-h-[80%] items-center">
            <p className='m-4 text-white text-xl'>
              I&apos;m a computer engineering student with a strong interest in technology and management.
              I&apos;m also a team player who is active and skilled at finding relevant solutions to problems.
            </p>          
             
            <div className='max-w-[80%] flex flex-wrap justify-center gap-3'>
            {SkillData.map((skill, index) => (
              <div key={index} className='hover:scale-125 transition-transform duration-300'>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className='object-contain'
                />
              </div>
            ))}
          </div>
   <div className='text-center p-3'>
              <button
                onClick={handleDownload}
                className='bg-purple-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-400 transition duration-300'
              >
                Download CV
              </button>
            </div>   
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Page;
