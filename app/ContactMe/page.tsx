"use client"
import React from 'react';
import Head from 'next/head';

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
           }}>

      <div className='relative z-15 w-full h-full flex items-center justify-center'>
      <div className="text-center text-white p-5 w-[650px] rounded-xl left-10">
      <div className='flex flex-col max-w-[600px] text-center'>
        <h2 className="mt-5 mr-5 ml-5 text-4xl text-white font-semibold">Contact Me</h2>
        <p className="ml-5 mr-5 text-white text-xl mb-5">I am always open to questions and internship interviews.</p>
      </div>
      <div className="">
        <form action="https://formspree.io/f/xvojynjw" encType="multipart/form-data" method="POST" className="text-black mx-auto max-w-md">
          <input type="text" name="name" placeholder="Your Name" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />
          <input type="email" name="email" placeholder="Your Email" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />
          <input type="text" name="subject" placeholder="Your Request" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" required />
          <textarea name="message" placeholder="Your Message" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 resize-none" required></textarea>
          <button type="submit" className=" bg-purple-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-400 transition duration-300">Send</button>
        </form>
      </div>
    </div>
            </div>
          
 


    </div>
  );
};

export default Page;
