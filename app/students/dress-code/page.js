import Header from "@/components/Header";
import Image from "next/image";

export default function DressCode() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Dress Code</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Missouri TSA adheres to the National TSA Dress Code and Official Conference Attire Guidelines. Everyone, including parents, guests, and children, must be registered to attend the conference.
          </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Required Competition Attire</h2>
                </div>

                <Image
                    className=""
                    src="/dresscode_competition.png"
                    alt="Competition Dress Code"
                    width={500}
                    height={20}
                    priority
                />

                <div className="flex flex-col p-6 pb-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Shirt: official TSA shirt (royal blue)</p>
                    <p className="text-xl text-[#072c5c] leading-relaxed">Shirt (Missouri conferences only): Blue TSA polos</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Pants or skirt: gray</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Shoes: black dress shoes worn with black or dark blue socks, hosiery (optional); open-toe shoes or sandals are acceptable (unacceptable: athletic shoes; flip-flops; military boots; or work boots)</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Also required for the middle school or high school level Chapter Team event only (but may be worn for other competitions if preferred by participants)</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">*Blazer: navy blue with official TSA patch</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">*Tie: official TSA tie (males)</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">*Females are not penalized for wearing the official TSA tie to Chapter Team or any other competitive event.</p>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">General Session Attire</h2>
                </div>

                <Image
                    className=""
                    src="/dresscode_general.png"
                    alt="General Session Dress Code"
                    width={500}
                    height={20}
                    priority
                />

                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Shirt: the official TSA shirt (royal blue) is preferred, button-down shirt or a polo/golf shirt (unacceptable: t-shirts; halter tops; tank tops)</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Dress, skirt, or pants: (unacceptable: jeans; baggy pants; exterior pocket pants; shorts)</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Shoes: dress shoes worn with dark socks, hosiery (optional); open-toe shoes or sandals are acceptable (unacceptable: athletic shoes; flip-flops; military boots; or work boots)</p>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Casual Attire</h2>
                </div>

                <Image
                    className=""
                    src="/dresscode_casual.png"
                    alt="Casual Attire Dress Code"
                    width={500}
                    height={20}
                    priority
                />

                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Appropriate t-shirts, shorts, or jeans. Casual attire may not be worn at competitions or general sessions.</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Registered parents, guests, and children who are not compliant with General Session Attire and who wish to attend the Awards Ceremony, may be asked to sit in a designated section, if permitted entry.</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed italic">Approved by the TSA, Inc. Board of Directors</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed italic">The above supersedes any other dress code prior to November 6, 2017.</p>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center gap-y-5 py-5">
                <a href="https://tsastore.mybrightsites.com/" target="_blank" className="bg-red-500 w-full md:w-[50%] px-5 md:px-0 py-5 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-center text-sm md:text-xl">Official TSA Store &#8594;</h1>
                </a>
                <a href="https://tsaweb.org/docs/default-source/national-conferences/tsa-dress-code.pdf" target="_blank" className="bg-red-500 w-full md:w-[50%] px-5 md:px-0 py-5 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-center text-sm md:text-xl">National TSA Dress Code PDF &#8594;</h1>
                </a>
                <a href="https://tsaweb.org/docs/default-source/national-conferences/dress-code-infographic.pdf" target="_blank" className="bg-red-500 w-full md:w-[50%] px-5 md:px-0 py-5 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-center text-sm md:text-xl">National TSA Dress Code Infographic &#8594;</h1>
                </a>
            </div>
        </div>  
      </main>
    </div>
  );
}
