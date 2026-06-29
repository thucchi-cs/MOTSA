import Header from "@/components/Header";
import { sql } from "@/lib/db";

export default async function CompetitiveEvents() {

  const hsEvents = await sql`SELECT * FROM events WHERE lvl='high' ORDER BY title`;
  const msEvents = await sql`SELECT * FROM events WHERE lvl='middle' ORDER BY title`;

  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-center items-center h-full text-[#040531] bg-white py-10 md:py-10">
          <h1 className="text-2xl md:text-5xl px-[5%] md:pt-10 font-bold text-center">High School Events (40)</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 w-[90%] md:place-items-center text-left md:text-center gap-y-15 py-10 md:py-20 gap-x-5 md:gap-x-0">
            {hsEvents.map((item, index) => (
              <a href={`/students/competitive-events/hs/${item.rubric.slice(0,-4)}-${item.id}`} key={index} className="whitespace-pre-wrap text-[15px] md:text-2xl leading-relaxed hover:underline hover:cursor-pointer">{`${item.title}`}</a> 
            ))}  
          </div>
          <h1 className="text-2xl md:text-5xl px-[5%] md:pt-10 font-bold text-center">Middle School Events (37)</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 w-[90%] md:place-items-center text-left md:text-center gap-y-15 py-10 md:py-20 gap-x-5 md:gap-x-0">
            {msEvents.map((item, index) => (
              <a href={`/students/competitive-events/ms/${item.rubric.slice(0,-4)}-${item.id}`} key={index} className="whitespace-pre-wrap text-[15px] md:text-2xl leading-relaxed hover:underline hover:cursor-pointer">{`${item.title}`}</a> 
            ))}  
          </div>
        </div>  
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-10 md:py-20">
          <h1 className="text-3xl md:text-5xl text-left px-[5%] md:pt-10 font-bold">Competitive Events</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-12 gap-y-10">
            <p className="text-lg md:text-2xl md:w-[70%] md:px-15 leading-relaxed">
                The 2025-2026 TSA Competitive Events Guidelines and any updates to the competitive events are continuously being posted on the National TSA website. Continue to check TOTAL TSA and <a href="https://tsaweb.org/competitions-programs/tsa/competition-updates" target="_blank" className="inline underline">https://tsaweb.org/competitions-programs/tsa/competition-updates</a> for more information.
            </p>
            <p className="text-lg md:text-2xl md:w-[70%] md:px-15 leading-relaxed">
                General event descriptions are available to anyone on the National TSA website. You will be able to download competitive event descriptions that include all specifications and judging criteria for each project from National TSA once your chapter is chartered and affiliated.
            </p>
            <div className="flex flex-row justify-center items-center gap-5 md:gap-20 w-full">
                <a href="https://tsaweb.org/competitions-programs/tsa/high-school-competitions#highschool" target="_blank" className="bg-red-500 md:w-[20%] h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-sm md:text-xl">High School Competitive Event Information &#8594;</h1>
                </a>
                <a href="https://tsaweb.org/competitions-programs/tsa/middle-school-competitions#middleschool" target="_blank" className="bg-blue-500 md:w-[20%] h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#072c5c] cursor-pointer">
                    <h1 className="text-sm md:text-xl">Middle School Competitive Event Information &#8594;</h1>
                </a>
            </div>
            <div className="flex flex-row justify-center items-center gap-5 md:gap-20 w-full">
                <a href="https://motsaweb.org/wp-content/uploads/2026/01/Missouri-TSA-2026-State-Competitive-Events-Eligibility-High-School-Updated-10-19-2025-1.pdf" target="_blank" className="bg-red-500 md:w-[20%] h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-sm md:text-xl">HS Competitive Events Elligibility Chart &#8594;</h1>
                </a>
                <a href="https://motsaweb.org/wp-content/uploads/2026/01/Missouri-TSA-2026-Competitive-Events-Eligibility-Middle-School10-03-2025-1.pdf" target="_blank" className="bg-blue-500 md:w-[20%] h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#072c5c] cursor-pointer">
                    <h1 className="text-sm md:text-xl">MS Competitive Events Elligibility Chart &#8594;</h1>
                </a>
            </div>
            <p className="text-lg md:text-2xl md:w-[70%] md:px-15 leading-relaxed">
                NOTE: The project descriptions found at this location are NOT the official descriptions, and do not include details needed to successfully complete the projects.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
