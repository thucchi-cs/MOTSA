import Header from "@/components/Header";
import Image from "next/image";
import QuickLink from "@/components/QuickLink";
import Link from "next/link";

export default function FLC() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Fall Leadership Conference</h1>
            <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
                Learn to be a leader in your community!
            </p>
        </div>

        {/* Summary section */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The Fall Leadership Conference is a two-day event held each year to help student members build leadership skills and prepare to lead their peers in and outside of TSA. FLC is led by our state officer team and is designed to encourage students across the state to become leaders in their community.
                    </p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The purpose of the State Fall Leadership Conference is to equip TSA members with the tools they need for leadership and success in their education and future.  And while students are developing their leadership and technical skills, chapter advisors also receive training on how to effectively manage and grow their local TSA Chapters. This combination of leadership training, skill development, and strategic planning help set the stage for a successful year in TSA and helps our students grow into future leaders in the technology and engineering fields! 
                    </p>
                </div>
            </div>
        </div>

        {/* This year's info section */}
        <div className="w-full max-w-7xl px-6 flex flex-col gap-y-14">
            {/* Overview */}
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">2025 Fall Leadership Conference</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The 2025 Missouri TSA Fall Leadership Conference is complete! Thank you to all leaders that joined us and congrats to all who earned a Missouri TSA Degree!
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The Fall Leadership Conference was held at University of Central Missouri in Warrensburg, MO on October 12th-13th.
                            </p>
                        </div>
                    </div>

                    <Image
                        className="w-full h-fit"
                        src="/flc.jpg"
                        alt="FLC"
                        width={700}
                        height={20}
                        priority
                    />
                </div>
            </div>

            {/* Registrations */}
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Conference Registrations</h2>
                </div>

                <div className="flex flex-col p-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The 2025 State Fall Leadership Conference Registration fee is $75 per attendee.
                    </p>
                </div>
                <div className="grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-5 pt-10">
                    <QuickLink target={"_blank"} link={"https://www.registermychapter.com/tsa/mo-flc"} label={"Register for FLC"}></QuickLink>
                    <QuickLink target={"_blank"} link={"/pdf/Missouri-TSA-2025-State-Fall-Leadership-Conference-Agenda-1.pdf"} label={"FLC Tentative Agenda"}></QuickLink>
                </div>
            </div>

            {/* Degree program */}
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Degree Program</h2>
                </div>

                <div className="flex flex-col p-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        Missouri TSA recognizes students for developing their knowledge and engagement within TSA through our Degree Program. Each year, students can earn a new degree at the Fall Leadership Conference. There are four degrees in total that student members can earn.
                    </p>
                </div>
                <div className="flex flex-col p-6 gap-y-5 pb-10">
                    <Link href="/students/degree" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                        Degree Program Information
                    </Link>
                </div>
            </div>
        </div>  
      </main>
    </div>
  );
}
