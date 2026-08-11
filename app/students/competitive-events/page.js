import Header from "@/components/Header";
import Tabs from "./tabs";
import Image from "next/image";
import QuickLink from "@/components/QuickLink";
import { promises as fs } from 'fs';

export default async function CompetitiveEvents() {
  // Get all events from json db
  const fileContents = await fs.readFile('./data/events.json', 'utf8');
  const allEvents = JSON.parse(fileContents);

  // Categorize & Sort events
  const hsEvents = allEvents.find(group => group.lvl === "high").events.sort((a,b) => (a.title > b.title) ? 1 : (b.title > a.title) ? -1 : 0);
  const msEvents = allEvents.find(group => group.lvl === "middle").events.sort((a,b) => (a.title > b.title) ? 1 : (b.title > a.title) ? -1 : 0);

  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        {/* Overview */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start h-full text-[#040531] bg-white py-10 md:py-20 px-5">
          <div className="flex flex-col w-full h-full text-left px-[5%] gap-y-5">
            <h1 className="text-3xl md:text-5xl font-bold">Competitive Events</h1>
            <p className="text-2xl text-[#072c5c]">
              Technology Student Association offers student members an opportunity to compete in over 75 different competitions accross middle school and high school on three different levels: regional, state, and national. These competitive events take learning beyond the classroom and allow students to apply their technical skills into real projects for various career fields such as engineering, computer science, the arts, and leadership abilities. Most of these competitions also gives students a chance to practice their interpersonal skills as they interview with judges.
            </p>
            <p className="text-2xl text-[#072c5c]">
              <strong>Important:</strong> All links below are from the 2025-2026 school year. Updated information for 2026-2027 will come soon.
            </p>
          </div>
          <Image
            className="object-cover"
            src="/students9.JPG"
            alt="Students"
            width={700}
            height={200}
            priority
            />
        </div>

        {/* Resources & links */}
        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold">
          <h1 className="text-3xl md:text-5xl relative text-left px-[5%] pt-15">Resources</h1>
          {/* Event details */}
          <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 w-full overflow-x-auto py-5 md:py-10 px-5 md:px-30 md:gap-x-15 gap-y-5 md:gap-y-0">
            <div className="flex flex-col justify-start items-center">
              <p className="text-xl md:text-3xl text-center underline">Event Details</p>
              <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-5 gap-y-5 py-5">
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions"} label={"List of Events"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/themes-and-problems"} label={"Themes & Problems"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/competition-updates"} label={"Competition Updates"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/docs/default-source/competitions/events-eligibility-charts.pdf?sfvrsn=b09d590b_5"} label={"National Events Eligibility"}></QuickLink>
                <QuickLink target={"_blank"} link={"/pdf/Missouri-TSA-2026-State-Competitive-Events-Eligibility-High-School-Updated-10-19-2025-1.pdf"} label={"MO HS Events Eligibility"}></QuickLink>
                <QuickLink target={"_blank"} link={"/pdf/Missouri-TSA-2026-Competitive-Events-Eligibility-Middle-School10-03-2025-1.pdf"} label={"MO MS Events Eligibility"}></QuickLink>
              </div>
            </div>

            {/* Event submissions */}
            <div className="flex flex-col justify-start items-center">
              <p className="text-xl md:text-3xl text-center underline">Event Submissions</p>
              <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-5 gap-y-5 py-5">
                <QuickLink target={"_blank"} link={"https://judgepro.registermychapter.com/org/jpmo-vsc/conf/jpmo-slc/student"} label={"Submission Upload"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://www.answerwrite.com/tsa/mo-s"} label={"Online Testing"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/docs/default-source/national-conferences/instructions/competition-component-upload-instructions.pdf?sfvrsn=bf4985e0_2"} label={"National Upload Instructions"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/competitive-event-preconference-submission-requirements"} label={"National Submission Requirements"}></QuickLink>
                {/* <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/competition-requirements"} label={"National Requirements"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsamembership.registermychapter.com/members#"} label={"Student Member Site"}></QuickLink> */}
                <QuickLink target={"_blank"} link={"/pdf/2026-High-School-Events-Pre-Submissions.pdf"} label={"MO HS Submission Requirements"}></QuickLink>
                <QuickLink target={"_blank"} link={"/pdf/2026-Middle-School-Events-Pre-Submission.pdf"} label={"MO MS Submission Requirements"}></QuickLink>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs of events */}
        <Tabs hsEvents={hsEvents} msEvents={msEvents}></Tabs>

      </main>
    </div>
  );
}
