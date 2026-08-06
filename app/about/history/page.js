import Header from "@/components/Header";

export default function History() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our History</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Technology Student Association is dedicated to provide middle and high school students with STEM competitions, intracurricular activities, leadership opportunities, and community service.
          </p>
        </div>

        {/* Info section */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          <div>
            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">The Technology Student Association (TSA), formerly AIASA, is the oldest student organization dedicated exclusively to students enrolled in technology education classes grades K-12. It has a rich history that spans nearly four decades. Three distinct periods may be found in TSA's history. During the period from 1958 to 1978, the American Industrial Arts Student Association (AIASA) was a sponsored activity of the American Industrial Arts Association (AIAA). In 1978, the nonprofit corporation, AIASA, Inc., was formed to oversee AIASA as a separate organization. During the decade that followed, the organization grew in size, strength, structure, and impact on students and secondary school programs. The summer of 1988 closed this third decade as AIASA reached another milestone, a change in the organization's name: the Technology Student Association (TSA).</p>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between items-center h-full">
            <a href="https://tsaweb.org" target="_blank" className="bg-red-500 md:w-[20%] px-5 md:px-0 h-10 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
              <h1 className="text-md md:text-xl">Learn More &#8594;</h1>
            </a>
          </div>
        </div>  
      </main>
    </div>
  );
}
