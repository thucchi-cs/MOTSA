import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Regional Map</h1>
          <Image 
            className=""
            src="/regional-map.webp"
            alt="Next.js logo"
            width={1000}
            height={500}
            priority
          />
        </div>    
      </main>
    </div>
  );
}
