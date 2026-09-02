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
                        The Fall Leadership Conference is a two-day event held each year to help student members build leadership skills and prepare to lead their peers in and outside of TSA. The purpose of the State Fall Leadership Conference is to equip TSA members with the tools they need for leadership and success in their education and future. FLC is led by our state officer team and is designed to encourage students across the state to become leaders in their community.
                    </p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        And while students are developing their leadership and technical skills, chapter advisors also receive training on how to effectively manage and grow their local TSA Chapters. This combination of leadership training, skill development, and strategic planning help set the stage for a successful year in TSA and helps our students grow into future leaders in the technology and engineering fields! 
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">2026 Fall Leadership Conference</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex flex-col md:max-w-[50%]">
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The 2026 Missouri TSA Fall Leadership Conference will be held on October 25th-26th at University of Central Missouri in Warrensburg, MO. 
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                Register your chapter by October 15th!
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                <strong>IMPORTANT: </strong>The 2026 Missouri <a href="/events/workshops" className="text-blue-500 underline">Competitive Events Preparation Workshop</a> will immediately follow FLC on October 27th, 2026 and will also be held at University of Central Missouri. FLC and CEPW require separate registrations. It is recommended for your chapter to attend both FLC and CEPW, but you may choose to only attend one out of the two. 
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

            {/* Degree program */}
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Degree Program</h2>
                </div>

                <div className="flex flex-col p-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        Missouri TSA recognizes students for developing their knowledge and engagement within TSA through our Degree Program. Each year, students can earn a new degree at the Fall Leadership Conference. There are four degrees in total that student members can earn. Student members must have at least the Basic Degree to run for State Office.
                    </p>
                </div>
                <div className="flex flex-col p-6 gap-y-5">
                    <Link href="/students/degree" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                        Degree Program Information
                    </Link>
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
                        Registrations for the 2026 State Fall Leadership Conference are $75. Your chapter must be affiliated with National TSA before registering. Registrations open on September 1st and will close at midnight on October 15th. You will be required to pay your invoice within 60 days after the closing date of the conference.
                    </p>
                </div>
                <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-x-5 gap-y-5 md:gap-y-0 py-10 pb-20">
                    <QuickLink target={"_blank"} link={"https://www.registermychapter.com/tsa/mo-flc"} label={"Register for FLC"}></QuickLink>
                    {/* <QuickLink target={"_blank"} link={"/pdf/Missouri-TSA-2025-State-Fall-Leadership-Conference-Agenda-1.pdf"} label={"FLC Tentative Agenda"}></QuickLink> */}
                </div>
            </div>
        </div>  
      </main>
    </div>
  );
}
