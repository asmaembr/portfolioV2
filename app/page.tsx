"use client"
import Image from "next/image";

export default function Home() {
  return (

    <main className='w-screen h-screen overflow-hidden'>
    <video
      autoPlay
      loop
      className='absolute top-0 left-0 min-w-full min-h-full object-cover'
    >
      <source src="/4K.mp4" type='video/mp4' />
    </video>

    <div className='relative z-10 w-full h-full flex items-center justify-center'>
    <div 
      className="flex items-center w-full h-full bg-cover bg-center"
       >
        <div className="absolute pl-10 md:pl-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[600px] top-40">
          <h1 className=" text-[40px] text-white font-semibold">
          Hello ,  <br></br>I&apos;m Asmae A
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600">
            {" "} Software Engineering Student 
            </span>
          </h1>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={220}
          width={220}
          className="absolute right-50 top-40"/> 
        <Image
          src="/cliff.webp"
          alt="cliff"
          height={400}
          width={400}
        /> {/* Cliff image with absolute positioning */}
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
            <Image
            src="/trees.webp"
            alt="trees"
            height={2000}
            width={2000}
            className="w-full h-full"/>
      </div>

      <Image src="/stars.png"
            alt="stars"
            width={300}
            height={300}
            className="absolute top-10 left-0 z-[10]"
      />
    </div>
  </main>

  );
}
