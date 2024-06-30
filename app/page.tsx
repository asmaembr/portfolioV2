"use client";
import Image from "next/image";


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

      <div className='relative z-10 w-full h-full flex items-center justify-center'>
        <div className="flex items-center w-full h-full bg-cover bg-center">
          <div className="absolute inset-0 flex justify-center items-center z-[10]">
            <div className="flex flex-col gap-5 max-w-[600px] text-center pb-20">
              <h1 className='text-4xl text-white text-center font-bold'>Welcome</h1>
              <h1 className='text-3xl text-white text-center font-semibold'>I&apos;M <span className='text-black'></span></h1>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[10]">
          <Image
            src="/horse.png"
            alt="horse"
            height={160}
            width={160}
            className="absolute right-50 top-40"
          />
          <Image
            src="/cliff.webp"
            alt="cliff"
            height={340}
            width={340}
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
