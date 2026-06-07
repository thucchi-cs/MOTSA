import Header from "@/components/Header";
import Image from "next/image";
import GrayButton from "@/components/GrayButton";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center bg-zinc-50 font-sans dark:bg-[#040531]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-20">
            <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Student Dress Code</h1>
            <div className="flex flex-col w-full justify-between items-center h-full px-10 py-12 gap-y-10">
                <p className="text-2xl w-[60%] px-15 leading-relaxed text-center">
                    Missouri TSA adheres to the National TSA Dress Code and Official Conference Attire Guidelines. Everyone, including parents, guests, and children, must be registered to attend the conference. All must comply with the TSA dress code policy.* All registrants must wear official conference identification name badges at all times.
                </p>
                
                <h1 className="text-3xl text-left px-[5%] pt-5 font-bold">REQUIRED COMPETITION ATTIRE</h1>
                <p className="text-xl w-[50%] leading-relaxed">
                    Shirt: official TSA shirt (royal blue)
                </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    Pants or skirt: gray
                </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    Shoes: black dress shoes worn with black or dark blue socks, hosiery (optional); open-toe shoes or sandals are acceptable (unacceptable: athletic shoes; flip-flops; military boots; or work boots)
                </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    Also required for the middle school or high school level Chapter Team event only (but may be worn for other competitions if preferred by participants):
                </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    *Blazer: navy blue with official TSA patch
                </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    *Tie: official TSA tie (males)            </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    *Females are not penalized for wearing the official TSA tie to Chapter Team or any other competitive event.
                </p>
            
                <h1 className="text-3xl text-left px-[5%] pt-5 font-bold">GENERAL SESSION ATTIRE</h1>
                <p className="text-xl w-[50%] leading-relaxed">
                    Shirt: the official TSA shirt (royal blue) is preferred, button-down shirt or a polo/golf shirt (unacceptable: t-shirts; halter tops; tank tops)
                </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    Dress, skirt, or pants: (unacceptable: jeans; baggy pants; exterior pocket pants; shorts)
                </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    Shoes: dress shoes worn with dark socks, hosiery (optional); open-toe shoes or sandals are acceptable (unacceptable: athletic shoes; flip-flops; military boots; or work boots)
                </p>

                <h1 className="text-3xl text-left px-[5%] pt-5 font-bold">CASUAL ATTIRE</h1>
                <p className="text-xl w-[50%] leading-relaxed">
                    Appropriate t-shirts, shorts, or jeans. Casual attire may not be worn at competitions or general sessions.
                </p>
                <p className="text-xl w-[50%] leading-relaxed">
                    *Registered parents, guests, and children who are not compliant with General Session Attire and who wish to attend the Awards Ceremony, may be asked to sit in a designated section, if permitted entry.
                </p>

                <p className="text-xl w-[50%] leading-relaxed pt-7 italic">
                    Approved by the TSA, Inc. Board of Directors
                </p>
                <p className="text-xl w-[50%] leading-relaxed italic">
                    The above supersedes any other dress code prior to November 6, 2017.
                </p>
            </div>
            <div className="flex flex-col w-[60%] justify-between items-center h-50 px-10 gap-y-5">
                <GrayButton height="full" link="https://tsaweb.org/docs/default-source/national-conferences/tsa-dress-code.pdf?sfvrsn=43f32d78_11" label={"National TSA Dress Code PDF"}></GrayButton>
                <GrayButton height="full" link="https://tsaweb.org/docs/default-source/national-conferences/dress-code-infographic.pdf" label={"National TSA Dress Code Infographic"}></GrayButton>
            </div>
        </div>    
      </main>
    </div>
  );
}
