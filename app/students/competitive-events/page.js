import Header from "@/components/Header";
import { sql } from "@/lib/db";
import Tabs from "./tabs";
import Image from "next/image";
import QuickLink from "@/components/QuickLink";

export default async function CompetitiveEvents() {

  const hsEvents = await sql`SELECT * FROM events WHERE lvl='high' ORDER BY title`;
  const msEvents = await sql`SELECT * FROM events WHERE lvl='middle' ORDER BY title`;

  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col md:flex-row w-full justify-between items-start h-full text-[#040531] bg-white py-10 md:py-20 px-5">
          <div className="flex flex-col w-full h-full text-left px-[5%] gap-y-5">
            <h1 className="text-3xl md:text-5xl font-bold">Competitive Events</h1>
            <p className="text-2xl text-[#072c5c]">
              Technology Student Association offers student members an opportunity to compete in over 75 different competitions accross middle school and high school on three different levels: regional, state, and national. These competitive events take learning beyond the classroom and allow students to apply their technical skills into real projects for various career fields such as engineering, computer science, the arts, and leadership abilities. Most of these competitions also gives students a chance to practice their interpersonal skills as they interview with judges.
            </p>
          </div>
          <Image
            className="object-cover"
            src="/students9.JPG"
            alt="Next.js logo"
            width={700}
            height={200}
            priority
            />
        </div>

        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold">
          <h1 className="text-3xl md:text-5xl relative text-left px-[5%] pt-15">Resources</h1>
          <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 w-full overflow-x-auto py-5 md:py-10 px-5 md:px-30 md:gap-x-15 gap-y-5 md:gap-y-0">
            <div className="flex flex-col justify-start items-center">
              <p className="text-xl md:text-3xl text-center underline">Event Details</p>
              <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-5 gap-y-5 py-5">
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions"} label={"List of Events"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/themes-and-problems"} label={"Themes & Problems"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/competition-updates"} label={"Competition Updates"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/state-advisor-approval-events"} label={"National Eligibility"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://motsaweb.org/wp-content/uploads/2026/01/Missouri-TSA-2026-State-Competitive-Events-Eligibility-High-School-Updated-10-19-2025-1.pdf"} label={"HS Events Eligibility"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://motsaweb.org/wp-content/uploads/2026/01/Missouri-TSA-2026-Competitive-Events-Eligibility-Middle-School10-03-2025-1.pdf"} label={"MS Events Eligibility"}></QuickLink>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              <p className="text-xl md:text-3xl text-center underline">Event Submissions</p>
              <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-5 gap-y-5 py-5">
                <QuickLink target={"_blank"} link={"https://judgepro.registermychapter.com/org/jpmo-vsc/conf/jpmo-slc/student"} label={"Submission Upload"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://www.answerwrite.com/tsa/mo-s"} label={"Online Testing"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/docs/default-source/national-conferences/instructions/competition-component-upload-instructions.pdf?sfvrsn=bf4985e0_2"} label={"Upload Instructions"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/competitive-event-preconference-submission-requirements"} label={"National Submission Requirements"}></QuickLink>
                {/* <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions/competition-requirements"} label={"National Requirements"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://tsamembership.registermychapter.com/members#"} label={"Student Member Site"}></QuickLink> */}
                <QuickLink target={"_blank"} link={"https://motsaweb.org/wp-content/uploads/2026/01/2026-High-School-Events-Pre-Submissions.pdf"} label={"MO HS Submission Requirements"}></QuickLink>
                <QuickLink target={"_blank"} link={"https://motsaweb.org/wp-content/uploads/2026/01/2026-Middle-School-Events-Pre-Submission.pdf"} label={"MO MS Submission Requirements"}></QuickLink>
              </div>
            </div>
          </div>
        </div>

        <Tabs hsEvents={hsEvents} msEvents={msEvents}></Tabs>

      </main>
    </div>
  );
}
