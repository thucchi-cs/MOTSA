import Image from "next/image";
import BoxButton from "@/components/BoxButton";
import ArrowButton from "@/components/ArrowButton";
import GrayButton from "@/components/GrayButton";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center bg-zinc-50 font-sans dark:bg-[#040531]">
      <Header page={"home"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-[#060852] sm:items-start">
        <div className="flex flex-col w-full relative">
            <Image
              className="object-cover object-center"
              src="/students2.JPG"
              alt="Next.js logo"
              width={5000}
              height={20}
              priority
              />
            <div className="absolute bg-black/60 z-0 w-full h-full inset-0"></div>
          <div className="flex flex-col absolute bottom-10 px-30 py-10 w-full gap-6 text-center items-start text-left z-10">
            <h1 className="w-full text-8xl font-semibold text-black dark:text-zinc-50">
              Learning to Lead
            </h1>
            <h1 className="w-full text-8xl font-semibold text-black dark:text-zinc-50">
              in a Technical World
            </h1>
          </div>  
        </div> 
        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold">
          <h1 className="text-5xl text-left px-[5%] pt-10">Quick Links</h1>
          <div className="flex flex-row w-full px-[5%] justify-between items-center h-100 bg-white text-black py-10">
            <BoxButton link="/about" title={"About TSA"} icon={"/motsalogo.png"}></BoxButton>
            <BoxButton link="/resources/calendar" title={"Calendar of Events"} icon={"/calendar.png"}></BoxButton>
            <BoxButton link="/resources/bylaws" title={"Missouri TSA Bylaws"} icon={"/book.png"}></BoxButton>
            <BoxButton link="/students/officers" title={"State officer team"} icon={"/team.png"}></BoxButton>
          </div> 
        </div>  
        <div className="flex flex-col w-full justify-between items-center h-full text-white pb-10">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Mission</h1>
          <div className="flex flex-row w-full justify-between items-center h-80">
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
              Missouri TSA, affiliated with national Technology Student Association (TSA), is devoted to the development of students in technology education.  Missouri TSA serves more than 2,200 middle and high school students in 90 local school chapters. Our purpose is to prepare our student members for the challenges of our dynamic world by promoting technological literacy, leadership, problem-solving skills, and personal growth through relevant learning opportunities and experiences.
            </p>
            <div className="flex flex-col justify-between items-center w-[30%] h-full py-5">
              <ArrowButton link="/about/tsa-mission" label={"Learn More"}></ArrowButton>
              <ArrowButton link="/about/chapter-map" label={"Find a Chapter"}></ArrowButton>
              <ArrowButton link="/advisors/start-a-chapter" label={"Start a Chapter"}></ArrowButton>
            </div>
          </div>
        </div>    
        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-white">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">News & Updates</h1>
          <div className="flex flex-row w-full justify-between items-center h-100 px-10 py-12 gap-x-5">
            <div className="flex flex-col w-full justify-start items-center h-full gap-y-5">
              <GrayButton link="/students/apply" label={"2026-2027 State Officer Application Available"}></GrayButton>
              <GrayButton link="/events/workshops" label={"Competitive Events Workshop Registration Deadline: November 1, 2025"}></GrayButton>
              <GrayButton link="/students/officers" label={"Meet your 2025-2026 State Officer Team"}></GrayButton>
            </div>
            <div className="flex flex-col w-full justify-start items-center h-full gap-y-5">
              <GrayButton link="/resources/calendar" label={"2025-2026 Calendar of Events Released"}></GrayButton>
              <GrayButton link="/advisors/forms" label={"2025-2026 Conference Forms Released"}></GrayButton>
            </div>
          </div>
        </div>    
      </main>
    </div>
  );
}
