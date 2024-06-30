"use client";
import Image from "next/image";
import { Socials } from '@/constants';
import Link from 'next/link';

export default function Home() {

  return (
    <main className='w-screen h-screen overflow-hidden'
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url("montains.jpg")',
        backgroundSize: 'cover',
      }}>

      <div className='relative w-full h-full flex items-center justify-center'>
        <div className="flex items-center w-full h-full bg-cover bg-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col gap-5 max-w-[600px] text-center pb-20">
              <h1 className='text-4xl text-white text-center font-bold'>Welcome</h1>
              <h1 className='text-4xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500'>
  I&apos;M Asmae Moubarriz
</h1>
<div className='z-50 flex text-center justify-center flex-row gap-3 mb-2'>
        {Socials.map((social) =>(
         <Link href={social.link} 
         target="_blank" 
         rel="noopener noreferrer"
         key={social.name}>
         <Image
         src={social.src}
         alt={social.name}
         width={30}
         height={30}
         className='cursor-pointer object-contain hover:scale-110 transform transition duration-300 ease-in-out'
         style={{ filter: social.filter }}
        />
        </Link>
        ))}
      </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[10]">
          <Image
            src="/horse.png"
            alt="horse"
            height={100}
            width={100}
            className="absolute right-50 top-40"
          />
          <Image
            src="/cliff.webp"
            alt="cliff"
            height={300}
            width={300}
          />
        </div>

        <div className="absolute bottom-0 z-[5] w-full h-auto">
          <Image
            src="/trees.webp"
            alt="trees"
            height={2000}
            width={2000}
            className="w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
