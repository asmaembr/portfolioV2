"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Projects } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
 const isMobile = (typeof window !== 'undefined') && window.matchMedia("(max-width: 768px)").matches;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, 
    slidesToScroll: 1
  };
  return (
    <div className='w-screen h-screen overflow-hidden'
    style={{       
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundImage: 'url("montains.jpg")',
      backgroundSize: 'cover',
           }}>

      
      <div className="h-full flex flex-col items-center justify-center text-center ">
      <div className="w-full">
      <div className="text-center mb-5">
        <h1 className='mr-5 ml-5 text-4xl text-white font-semibold mb-3'>
            Projects 
            </h1>
          <p className="ml-5 mr-5 text-white text-xl ">
          Here&apos;s some projects I enjoyed creating. Feel free to check them out on GitHub.
          </p>
          </div>
      <Slider {...settings}>
        {Projects.map((d) => (
          <div key={d.title} className=" text-white rounded-xl  ">
            <div className='flex flex-row justify-center items-center'>
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
              className="text-black text-lg px-6 py-1 rounded-xl "   
              target="_blank">
                  <Image
                  src={d.img}
                  alt={d.alt}
                  width={40}
                  height={40}
                  style={{filter : d.filter}}
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
