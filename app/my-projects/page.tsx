"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Projects } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <video
        autoPlay
        loop
        className='absolute top-0 left-0 min-w-full min-h-full object-cover'
      >
        <source src="/4K.mp4" type='video/mp4' />
      </video>
      
      <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className=" w-full mt-20">
      <div className=" relative mt-5 text-center ">
      <h1 className='font-semibold mr-5 ml-5 text-white text-[30px]'>
            Projects 
            </h1>
          <p className="ml-5 mr-5 text-gray-400 text-lg ">
          Here&apos;s some projects I enjoyed working on
          </p>
          </div>
      <Slider {...settings}>
        {Projects.map((d) => (
          <div key={d.title} className=" text-white rounded-xl ">
            <div className='h-40 flex justify-center items-center'>
              <Image
               src={d.src}
                alt={d.title} 
                width={d.width}
                height={d.height}
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4 ">
              <h2 className="text-xl font-semibold">{d.title}</h2>
              <p className="text-center">{d.text}</p>
              <Link 
              key={d.title}
              href={d.link}
              className=' text-white text-lg px-6 py-1 rounded-xl'>
                  <Image
                  src='/github.svg'
                  alt='git repository'
                  width={40}
                  height={40}
                 />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
      </div>
 
  );
};

export default Page;
