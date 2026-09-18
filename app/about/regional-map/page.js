import Header from "@/components/Header";
import Image from "next/image";

export default function RegionalMap() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Regional Map</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Find out which Missouri region your TSA chapter belongs to!
          </p>
        </div>

        {/* Map */}
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white">
          <Image 
            className=""
            src="/regional-map.webp"
            alt="Regional Map"
            width={1000}
            height={500}
            priority
          />
        </div>    
      </main>
    </div>
  );
}
