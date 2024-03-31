"use client"
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
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

    

      <div className='relative z-15 w-full h-full flex items-center justify-center'>
      <div
  style={{backgroundImage: `url('/bg.jpg')`, 
  backgroundSize: 'cover', 
  backgroundPosition: 'center'}}
  className="text-center text-white p-5 w-[650px] rounded-xl left-10">
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className='mb-5'>
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">I am always open to questions and internship interviews.</p>
      </div>
      <div className="">
        <form action="https://formspree.io/f/xvojynjw" encType="multipart/form-data" method="POST" className="text-black mx-auto max-w-md">
          <input type="text" name="name" placeholder="Your Name" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />
          <input type="email" name="email" placeholder="Your Email" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />
          <input type="text" name="subject" placeholder="Your Request" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />
          <textarea name="message" placeholder="Your Message" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 resize-none" required></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300">Send</button>
        </form>
      </div>
    </div>
            </div>
          
 


    </div>
  );
};

export default Page;
