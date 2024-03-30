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

      <div className='relative z-10 w-full h-full flex items-center justify-center'>
      <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {Projects.map((d) => (
          <div key={d.title} className="bg-[#32174D] h-[450px] text-white rounded-xl">
            <div className='flex justify-center items-center'>
              <Image
               src={d.src}
                alt={d.title} 
                width={d.width}
                height={d.height}
                className='h-40 w-40'
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
                  alt=""
                  width={30}
                  height={30}/>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
      </div>
    </div>
  );
};

export default Page;
