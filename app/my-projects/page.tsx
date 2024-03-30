"use client"
import React from 'react';

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
        <h1 className='text-white text-4xl font-bold'>Your Content Here</h1>
      </div>
    </div>
  );
};

export default Page;
