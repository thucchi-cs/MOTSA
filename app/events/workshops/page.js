import Header from "@/components/Header";
import Image from "next/image";
import QuickLink from "@/components/QuickLink";

export default function CEW() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Competitive Events Preparation Workshops</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Learn all you need to know on how to suceed at the State Championship!
          </p>
        </div>

        {/* Summary section */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The Competitive Events Preparation Workshops is a one-day event held each year in the Fall to prepare student members for their competitions in the Spring. At CEPW, students learn all tips and tricks on how to suceed in their competitive events. They will also get a practice round in the form of a mock competition on the day of.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">2026 Competitive Events Preparation Workshops</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The 2026 Missouri TSA Competitive Events Preparation Workshops will be held on October 27th, 2026 at University of Central Missouri in Warrensburg, MO.
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                Register your chapter by October 15th!
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                <strong>IMPORTANT: </strong>The 2026 Missouri <a href="/events/flc" className="text-blue-500 underline">Fall Leadership Conference</a> will take place immediately prior to CEPW on October 25th-26th, 2026 and will also be held at University of Central Missouri. FLC and CEPW require separate registrations. It is recommended for your chapter to attend both FLC and CEPW, but you may choose to only attend one out of the two. 
                            </p>
                        </div>
                    </div>

                    <Image
                        className="w-fit h-fit"
                        src="/cew.JPG"
                        alt="CEW"
                        width={500}
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
                        Registrations for the 2026 Competitive Events Preparation Workshops are $20. Your chapter must be affiliated with National TSA before registering. Registrations open on September 1st and will close at midnight on October 15th. You will be required to pay your invoice within 60 days after the closing date of the conference.
                    </p>
                </div>
                <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-x-5 gap-y-5 md:gap-y-0 py-10 pb-20">
                    <QuickLink target={"_blank"} link={"https://www.registermychapter.com/tsa/mo-flc"} label={"Register for CEPW"}></QuickLink>
                    <QuickLink target={"_blank"} link={"/pdf/MOTSA_CEPW_Agenda_2026.pdf"} label={"CEPW Tentative Agenda"}></QuickLink>
                </div>
            </div>
        </div>  
      </main>
    </div>
  );
}
