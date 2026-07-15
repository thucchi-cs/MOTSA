import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import QuickLink from "@/components/QuickLink";

export default function SCC() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">State Championship</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Showcase your skills statewide in your chosen event!
          </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        Each year, Missouri TSA members get a chance to compete statewide in over 75 different competitive events across middle and high school. The State Championship is a three-day event held in the Spring and allows competitors to qualify to compete in the National Conference.
                    </p>
                </div>
            </div>
        </div>

        <div className="w-full max-w-7xl px-6 flex flex-col gap-y-14">
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">2026 State Championship Conference</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The 2026 Missouri TSA State Championship is complete! Congrats to all our competitors, finalists, and award recipients!
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The State Championship Conference was held at University of Central Missouri in Warrensburg, MO on April 12-14.
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                Thank you to all judges, volunteers, and event coordinators who made this event possible!
                            </p>
                        </div>
                        <div className="flex flex-col p-6 gap-y-5">
                            <Link href="/resources/gallery" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                                Photo Gallery
                            </Link>
                            {/* <Link href="/resources/winners" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                                Championship Results
                            </Link> */}
                            <Link href="/students/officers" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                                New State Officers for 2026-2027
                            </Link>
                        </div>
                    </div>

                    <Image
                        className="w-fit h-fit"
                        src="/students5.JPG"
                        alt="SCC"
                        width={500}
                        height={20}
                        priority
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Conference Registrations</h2>
                </div>

                <div className="flex flex-col p-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The 2026 State Championships Conference Registration fee is $90 per attendee.
                    </p>
                </div>
                <div className="flex flex-col p-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        Registration opens February 1, 2026 and closes March 1, 2026.
                    </p>
                </div>
                <div className="flex flex-col p-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        Registration fees must be paid to Missouri TSA, ATTN: Susan Kulyan-Light, 205 Jefferson Street, 11th Floor, P.O. Box 480, Jefferson City, MO 65102. In order to register, a chapter must be in good standing and all members must be affiliated.
                    </p>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Online Pre-Submissions</h2>
                </div>

                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The online submissions window for 2026 opens March 16 at 8:00 AM and closes March 27 at 11:59 PM. All required event submissions must be uploaded through JudgePro system within this timeframe.
                    </p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        Online submissions may include, but are not limited to: portfolios, design briefs, documentation, research papers, engineering notebooks, videos, digital presentations, and other event-specific digital materials as required in the TSA Competitive Events Guide.
                    </p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        <strong>Advisors and participants should carefully review event guidelines to ensure all required materials are submitted correctly and on time.</strong> There will be <strong>NO exceptions</strong> granted for participants or chapters that fail to complete their required submissions within the stated windows.
                    </p>
                </div>
                <div className="flex flex-col p-6 gap-y-5">
                    <Link target="_blank" href="https://motsaweb.org/wp-content/uploads/2026/01/2026-High-School-Events-Pre-Submissions.pdf" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                        2026 MO TSA high school events with pre-submissions
                    </Link>
                    <Link target="_blank" href="https://motsaweb.org/wp-content/uploads/2026/01/2026-Middle-School-Events-Pre-Submission.pdf" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                        2026 MO TSA middle school events with pre-submissions
                    </Link>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Online Testing</h2>
                </div>

                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The online testing window for the 2026 State Championships is on March 16th - 27th, 2026 and are only to be completed Monday-Friday from 8:00 am to 5:00 pm using the AnswerWrite Exam system.
                    </p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        All testing must be proctored by the chapter advisor or an approved school representative in accordance with TSA testing procedures.
                    </p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        There will be <strong>NO exceptions</strong> granted for participants or chapters that fail to complete their online testing within the stated windows.
                    </p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        High School Events with an online exam: Chapter Team, Coding, Forensic Science, and Technology Bowl
                    </p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        Middle School Events with an online exam: Chapter Team, Coding, Cybersecurity Foundations, Electrical Applications, Forensic Technology and Tech Bowl
                    </p>
                </div>
            </div>

            <div className="pb-20">
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Other Important Details</h2>
                </div>

                <div className="grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-5 py-10">
                    <QuickLink target={"_blank"} link={"https://motsaweb.org/wp-content/uploads/2025/09/2026-TSA-State-Championship-Conference-Hotel-List-2.pdf"} label={"2026 SCC Hotels in Warrensburg"}></QuickLink>
                    <QuickLink target={"_blank"} link={"https://motsaweb.org/wp-content/uploads/2025/09/2025-Missouri-TSA-State-Championships-Restaurants-1.pdf"} label={"2026 SCC Restaurants in Warrensburg"}></QuickLink>
                    <QuickLink target={"_blank"} link={"https://docs.google.com/spreadsheets/d/1nmmAd2OJf1TZaBzX_nagZHUNBMDPQVOv/edit?gid=1425924524#gid=1425924524"} label={"2026 Tentative Room List and Agenda"}></QuickLink>
                    <QuickLink target={""} link={"/advisors/forms"} label={"2026 Conference Forms"}></QuickLink>
                    <QuickLink target={""} link={"/students/competitive-events"} label={"Competitive Event Details"}></QuickLink>
                    <QuickLink target={"_blank"} link={"https://tsaweb.org/competitions"} label={"List of Competitive Events"}></QuickLink>
                </div>
            </div>
        </div>  
      </main>
    </div>
  );
}
