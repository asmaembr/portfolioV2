import Image from "next/image";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div  style={{backgroundImage: "url(/main-bg.webp)"}}  
      className="flex items-center w-full h-full bg-cover bg-center"
       >
        <div className="absolute pl-10 md:pl-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[600px] top-40">
          <h1 className=" text-[50px] text-white font-semibold">
          Welcome , <br></br> I am   
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">
            {" "} Software Engineering student 
            </span>
          </h1>
        </div>
      </div>

           <div className="absolute bottom-0 right-0 z-[10]">
            <Image
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className="absolute right-50 top-40"/>
            <Image
            src="/cliff.webp"
            alt="cliff"
            height={480}
            width={480}
            />
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
