import Image from "next/image";
import Header from "@/components/Header";
import QuickLink from "@/components/QuickLink";

export default function events() {
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

        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-zinc-200 py-3 md:py-10">
          <div className="w-[50%] py-5">
            <QuickLink target={""} link={"/events/calendar"} label={"Calendar of Events 2026- 2027"}></QuickLink>
          </div> 
        </div>

        <div className="flex flex-col w-full justify-between items-center h-full text-white md:pb-10 md:gap-y-10 py-5 md:py-10">
          <h1 className="text-3xl md:text-4xl text-center px-[5%] pt-10 pb-3 md:pb-0 font-bold">TSA Conferences and Events</h1>
          <p className="text-md text-center md:text-left md:text-xl md:w-[70%] px-5 md:px-15 leading-relaxed">
            Throughout the school year, Missouri TSA offers many different events that allows student members to enhance their leadership and technical skills. These events are open to all middle and high school student members, as well as any volunteers that would like to help run the events.
          </p>
          <p className="text-md text-center md:text-left md:text-xl md:w-[70%] px-5 md:px-15 leading-relaxed">
            The Regional Conferences, State Championship, and National Conference allows students to compete in various competitions of different career interests. These competitions requires students to apply their technical skills to create projects and solve problems according to the annual themes.
          </p>
          <p className="text-md text-center md:text-left md:text-xl md:w-[70%] px-5 md:px-15 leading-relaxed">
            The Fall Leadership Conference and Competitive Events Workshops are hosted in the Fall each year for students to explore what it means to be in TSA. Both these events give students a chance to learn leadership and STEM skills and discover which competitive events they would like to choose to compete in the Spring.
          </p>
        </div>  

        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold md:py-15">        
          <h1 className="text-3xl md:text-4xl relative text-left px-[5%] pt-10">Conferences & Events</h1>
          <div className="grid grid-rows-2 grid-cols-2 w-[80%] gap-x-5 gap-y-5 py-5">
            <QuickLink target={""} link={"/events/scc"} label={"State Championship"}></QuickLink>
            <QuickLink target={""} link={"/events/regional-conferences"} label={"Regional Conferences"}></QuickLink>
            <QuickLink target={""} link={"/events/flc"} label={"Fall Leadership Conference"}></QuickLink>
            <QuickLink target={""} link={"/events/national-conference"} label={"National Conference"}></QuickLink>
            <QuickLink target={""} link={"/events/workshops"} label={"Competitive Events Workshops"}></QuickLink>
            <QuickLink target={""} link={"/events/national-tsa-week"} label={"National TSA Week"}></QuickLink>
          </div>
        </div>

      </main>
    </div>
  );
}
