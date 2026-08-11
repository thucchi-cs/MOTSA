import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import QuickLink from "@/components/QuickLink";

export default function Apply() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Apply for Office</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Become a leader for the Missouri TSA community!
          </p>
        </div>

        {/* Info section */}
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
          <div className="flex flex-col md:flex-row w-full justify-center items-center h-full md:px-40 py-10">
            <Image
                className=""
                src="/officers2.jpeg"
                alt="State Officers"
                width={400}
                height={200}
                priority
                />
            <div className="flex flex-col w-full justify-between items-start h-full gap-y-8 px-5 md:px-15">
                <p className="text-lg md:text-xl text-[#072c5c] leading-relaxed">
                  Are you a local leader who is interested in being more involved with Missouri TSA? Apply to become a State Officer for the 2027-2028 school year!
                </p>
                <p className="text-lg md:text-xl text-[#072c5c] leading-relaxed">
                  Application Opens: November 1st, 2026
                </p>
                <p className="text-lg md:text-xl text-[#072c5c] leading-relaxed">
                  Deadline: February 14th, 2027
                </p>
                <p className="text-lg md:text-xl text-[#072c5c] leading-relaxed">
                  Questions? Reach out to our email at contactmotsa@gmail.com.
                </p>
                {/* <a href="/pdf/Missouri-TSA-2027-2028-State-Officer-Application-Packet.pdf" target="_blank" className="bg-red-500 md:w-[50%] px-5 md:px-0 h-10 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-sm md:text-xl">Officer Candidate Packet &#8594;</h1>
                </a> */}
            </div>
          </div>
        </div>  

        {/* Detailed info section */}
        <div className="w-full max-w-7xl px-6 flex flex-col gap-y-14">         
            {/* Officer Responsibilities */}
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Officer Responsibilities</h2>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Being part of the Missouri TSA State Officer team means engaging and enhancing members' experiences to the best of your abilities. Your responsibilities may include:
                    </p>
                    <ul className="mt-2 flex flex-col gap-y-1">
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Planning the Fall Leadership Conference, Competitive Events Preparation Workshops, and State Championship Conference.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Managing all Missouri TSA Social Media pages.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Publish monthly E-Newsletters for students.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Maintaining accurate and updated information on this website.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Plan new activities and ways to engage members all over the state.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Eligibility */}
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Eligibility</h2>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        You are eligible to run for a State Office if you meet all the following requirements:
                    </p>
                    <ul className="mt-2 flex flex-col gap-y-1">
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Enrolled as a full time 9th-12th grade student that is or has taken a Technology Education, Industrial Technology, Engineering, Or STEM course.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Must be an active TSA Member for at least one year prior to seeking the state office.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Must have completed the 8th grade, and is not yet in his or her senior year. Note: Candidates can be elected at the end of eight grade.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Must be holding or have held an elected chapter or state delegation office.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Must have the ability to express opinions, make decisions, and be neat in business like appearance.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Must have completed the Missouri TSA Basic Degree at the Fall Leadership Conference prior to submitting the application.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Must attend all state officer candidate meetings at the State Championship Conference.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Must submit all required materials by February 14, 2027.
                        </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed text-lg mt-5">
                        The following are further restrictions on who can run for which office:
                    </p>
                    <ul className="mt-2 flex flex-col gap-y-1">
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Each chapter is limited to Three (3) State Officer Candidates.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            State Officers may not serve for more than 3 consecutive terms. Returning officers may not seek the same office.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            No president can serve two consecutive terms from the same chapter.
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            May seek only one office. However, those who fail to get elected to their initial office are eligible to run for Regional Vice President.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Application Requirements */}
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Application Requirements</h2>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        In order to be considered as a candidate for a State Officer, you must submit all of the following:
                    </p>
                    <ol className="mt-2 flex flex-col gap-y-1">
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            The Missouri TSA State Officer Team Candidate Application Form
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            All supplemental forms attached to the Missouri TSA State Officer Application Packet
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Official Transcript mailed from your school
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Professional resume
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            2-4 minutes Candidate Introduction Video
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            One page personal essay on "Why I Want to be a Missouri TSA State Officer"
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            A headshot of the candidate in Official TSA Business Dress
                        </li>
                        <li className="text-gray-600 leading-relaxed text-lg list-disc list-inside">
                            Three (3) letters of recommendations from the list of possible recommenders (found in the application packet)
                        </li>
                    </ol>
                </div>
            </div>

            {/* Election Process */}
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Election Process</h2>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <h1 className="font-bold text-[#072c5c] mb-2 text-lg">Campaigning</h1>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Candidates are allowed to pass out brochures and set up a poster board at the State Championship Conference. Campaigning restrictions are outlined in the application packet. At the Meet the Candidates Session, candidates get a chance to speak to student members who will be casting votes.
                        </p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <h1 className="font-bold text-[#072c5c] mb-2 text-lg">Delegates Session</h1>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            At the Delegates Session, each candidate will give a 3 minute speech to all Missouri TSA members. After the speeches, the members will vote for the State President, At-Large Officer team, then lastly the 4 Regional Vice Presidents (in exact order).
                        </p>

                        <h1 className="underline text-gray-600 my-2 mt-4 text-lg">Presidential Election</h1>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            All presidential candidates must state their wish to run for State President on their application. The State President will be elected by a simple majority of the votes. All remaining unelected presidential candidates will be placed in the At-Large candidates pool.
                        </p>

                        <h1 className="underline text-gray-600 my-2 mt-4 text-lg">At-Large Election</h1>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            All non-presidential candidates and unelected presidential candidates are placed in the At-Large Officer candidates pool. Members will vote for the officers they wish to be elected. Candidates will choose their desired office in order of the highest vote getter. The At-Large Offices include Vice President, Secretary, Treasurer, Reporter, and Sergeant-at-Arms.
                        </p>

                        <h1 className="underline text-gray-600 my-2 mt-4 text-lg">Regional Vice Presidents Election</h1>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            After the Presidential Election and the At-Large Election, any remaining unelected candidates may choose to run for Regional Vice President. A member does not have to be a candidate for State Office to run for Regional Vice President. All four Missouri TSA Regional Vice Presidents are elected by their respective regions and approved by the State Advisor. The four regions are Northeast, Northwest, Southeast, and Southwest.
                        </p>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="mb-10">
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Timeline</h2>
                </div>

                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>November 1st, 2026</strong>: Application opens</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>February 14th, 2027</strong>: Applications closed, all materials must be submitted</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>February-April, 2027</strong>: Applicants notified of qualifications and eligibilities of being a candidate</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>April 11, 2027</strong>: Candidates announced at State Championships opening ceremony</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>April 12, 2027</strong>: Meet the Candidates Session</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>April 12, 2027</strong>: Candidate speeches followed by election</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>April 13, 2027</strong>: Elected officers announced</p>
                </div>
            </div>
        </div>  
      </main>
    </div>
  );
}
