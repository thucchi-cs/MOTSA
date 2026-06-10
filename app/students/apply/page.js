import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-20">
            <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Apply for Office</h1>
            <div className="flex flex-row w-full justify-center items-center h-full px-40 py-10">
                <Image
                    className=""
                    src="/officers.webp"
                    alt="Next.js logo"
                    width={800}
                    height={200}
                    priority
                    />
                <div className="flex flex-col w-full justify-between items-start h-full gap-y-5 px-15">
                    <p className="text-2xl w-full leading-relaxed">
                      Are you a local leader who is interested in being more involved with Missouri TSA? Apply to become a State Officer for the 2026-2027 school year!
                    </p>
                    <p className="text-2xl w-full leading-relaxed">
                      Deadline: February 15th, 2026 (extended)
                    </p>
                    <p className="text-2xl w-full leading-relaxed">
                      Questions? Reach out to Byekwaso Gilbert via email or phone at Byekwaso.gilbert@dese.mo.gov or call 573-751-7664.
                    </p>
                    <a href="https://motsaweb.org/wp-content/uploads/2025/08/Missouri-TSA-2026-2027-State-Officer-Application-Packet.pdf" target="_blank" className="bg-red-500 w-[50%] h-10 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                        <h1 className="text-xl">Officer Candidate Packet {"->"}</h1>
                    </a>
                </div>
            </div>
        </div>    
      </main>
    </div>
  );
}
