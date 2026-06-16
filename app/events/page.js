import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full relative">
            <Image
              className="object-cover object-center"
              src="/students3.JPG"
              alt="Next.js logo"
              width={5000}
              height={200}
              priority
              />
            <div className="absolute bg-black/40 z-0 w-full inset-0"></div>
        </div>   
      </main>
    </div>
  );
}
