import Image from "next/image";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div  style={{backgroundImage: "url(/main-bg.webp)"}}  
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

      
      <div className="absolute bottom-0 right-0 z-[10]"> {/* Positioned div at bottom right */}
        <Image
          src="/horse.png"
          alt="horse"
          height={220}
          width={220}
          className="absolute right-50 top-40"/> {/* Horse image with absolute positioning */}
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
            <Image
            src="/stars.png"
            alt="stars"
            width={300}
            height={300}
            className="absolute top-10 left-0 z-[10]"
            />
    </main>
  );
}
