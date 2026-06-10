import GrayButton from "@/components/GrayButton";
import Header from "@/components/Header";
import Image from "next/image";
import BoxButton from "@/components/BoxButton";
import ArrowButton from "@/components/ArrowButton";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531] overflow-x-hidden">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full relative">
            <Image
              className="object-cover object-center"
              src="/students1.JPG"
              alt="Next.js logo"
              width={5000}
              height={200}
              priority
              />
            <div className="absolute bg-black/40 z-0 w-full inset-0"></div>
          <div className="flex flex-col absolute bottom-0 px-30 w-full text-center items-start text-left z-10 py-10">
            <h1 className="w-full text-8xl font-semibold text-zinc-50">
              Learn
            </h1>
            <h1 className="w-full text-8xl font-semibold text-center text-zinc-50">
              Compete
            </h1>
            <h1 className="w-full text-8xl font-semibold text-right text-zinc-50">
              Lead
            </h1>
          </div>  
        </div> 
        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-zinc-200 py-10">
          <a href="https://tsamembership.registermychapter.com/members" target="_blank" className="bg-red-500 w-[25%] h-[10vh] rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
            <h1 className="text-3xl font-bold">National TSA Log In {"->"}</h1>
          </a>
        </div>
        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-white">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Links & Resources</h1>
          <div className="w-full overflow-x-auto">
            <div className="flex min-w-max justify-center gap-5 md:w-full px-[5%] md:justify-between items-center h-full bg-white text-black py-4 md:py-10 overflow-x-scroll">
              <BoxButton link="/students/competitive-events" title={"Competitive Events"} icon={"/medal.png"}></BoxButton>
              <BoxButton link="/students/scholarships" title={"Scholarships"} icon={"/scholarship.png"}></BoxButton>
              <BoxButton link="/students/dress-code" title={"Dress Code"} icon={"/dresscode.png"}></BoxButton>
              <BoxButton link="/students/officers" title={"State Officer Team"} icon={"/team.png"}></BoxButton>
              <BoxButton link="/students/apply" title={"Apply for Office"} icon={"/gavel.png"}></BoxButton>
            </div> 
          </div>
        </div>    

      </main>
    </div>
  );
}
