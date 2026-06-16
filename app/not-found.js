import Image from "next/image";
import Header from "@/components/Header";

export default function construction() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
      <Header page={"home"}></Header>
      <main className="flex w-full flex-col items-center justify-between bg-white py-10">
            <h1 className="text-3xl md:text-5xl px-[5%] font-bold text-center text-black">Come back later!</h1>
            <Image
                className="object-cover object-center"
                src="/construction.png"
                alt="Next.js logo"
                width={500}
                height={20}
                priority
            />            
      </main>
    </div>
  );
}
