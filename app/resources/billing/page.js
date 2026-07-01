import Header from "@/components/Header";
import Image from "next/image";

export default function Awards() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"resources"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
            <h1 className="text-3xl md:text-5xl text-left px-[5%] pt-10 font-bold">Billing and Late Fee Policy and Procedures</h1>
            <div className="flex flex-col w-full justify-between items-center h-full md:px-10 py-12 gap-y-10">
                <Image
                    className=""
                    src="/billing.webp"
                    alt="Next.js logo"
                    width={1100}
                    height={20}
                    priority
                />
                <Image
                    className=""
                    src="/billing2.webp"
                    alt="Next.js logo"
                    width={1100}
                    height={20}
                    priority
                />
            </div>
        </div>    
      </main>
    </div>
  );
}
