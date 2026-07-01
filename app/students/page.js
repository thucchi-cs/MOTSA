import Header from "@/components/Header";
import Image from "next/image";
import QuickLink from "@/components/QuickLink";

export default function Students() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full relative">
            <Image
              className="object-cover object-center"
              src="/students1.JPG"
              alt="Students"
              width={5000}
              height={200}
              priority
              />
            <div className="absolute bg-black/40 z-0 w-full h-full inset-0"></div>
          <div className="flex flex-col absolute bottom-0 px-5 md:px-30 w-full text-center items-start text-left z-10 py-10">
            <h1 className="w-full text-2xl md:text-7xl font-semibold text-zinc-50">
              Learn
            </h1>
            <h1 className="w-full text-2xl md:text-7xl font-semibold text-center text-zinc-50">
              Compete
            </h1>
            <h1 className="w-full text-2xl md:text-7xl font-semibold text-right text-zinc-50">
              Lead
            </h1>
          </div>  
        </div> 
        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-zinc-200 py-3 md:py-10">
          <a href="https://tsamembership.registermychapter.com/members" target="_blank" className="bg-red-500 md:w-[25%] h-[5vh] md:h-[10vh] px-5 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
            <h1 className="text-xl md:text-2xl font-bold">National TSA Log In &#8594;</h1>
          </a>
        </div>

        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold md:py-10">
          <h1 className="text-3xl md:text-4xl relative text-left px-[5%] pt-15">Links & Resources</h1>
            <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-7 gap-y-7 py-8 md:py-15 px-5 md:px-50">
              <QuickLink target={""} link={"/students/competitive-events"} label={"Competitive Events"}></QuickLink>
              <QuickLink target={""} link={"/students/dress-code"} label={"Dress Code"}></QuickLink>
              <QuickLink target={""} link={"/students/degree"} label={"Degree Program"}></QuickLink>
              <QuickLink target={""} link={"/students/officers"} label={"State Officers"}></QuickLink>
              <QuickLink target={""} link={"/students/scholarships"} label={"Scholarships"}></QuickLink>
              <QuickLink target={""} link={"/students/apply"} label={"Apply for Office"}></QuickLink>
            </div>
        </div> 

      </main>
    </div>
  );
}
