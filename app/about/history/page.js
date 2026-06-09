import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-20">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Our History</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-12 gap-y-10">
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
              The Technology Student Association (TSA), formerly AIASA, is the oldest student organization dedicated exclusively to students enrolled in technology education classes grades K-12. It has a rich history that spans nearly four decades. Three distinct periods may be found in TSA's history. During the period from 1958 to 1978, the American Industrial Arts Student Association (AIASA) was a sponsored activity of the American Industrial Arts Association (AIAA). In 1978, the nonprofit corporation, AIASA, Inc., was formed to oversee AIASA as a separate organization. During the decade that followed, the organization grew in size, strength, structure, and impact on students and secondary school programs. The summer of 1988 closed this third decade as AIASA reached another milestone, a change in the organization's name: the Technology Student Association (TSA).
            </p>
            <a href="https://tsaweb.org" target="_blank" className="bg-red-500 w-[20%] h-10 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                <h1 className="text-xl">Learn More {"->"}</h1>
            </a>
          </div>
        </div>    
      </main>
    </div>
  );
}
