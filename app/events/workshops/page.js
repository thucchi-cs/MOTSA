import Header from "@/components/Header";
import Image from "next/image";
import QuickLink from "@/components/QuickLink";

export default function CEW() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Competitive Events Workshops</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Learn all you need to know on how to suceed at the State Championship!
          </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The Competitive Events Workshops is a one-day event held each year in the Fall to prepare student members for their competitions in the Spring. At CEW, students learn all tips and tricks on how to suceed at their competitive events. They also get a practice round in the mock competition at CEW.
                    </p>
                </div>
            </div>
        </div>

        <div className="w-full max-w-7xl px-6 flex flex-col gap-y-14">
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">2025 Competitive Events Workshops</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The 2025 Missouri TSA Competitive Events Workshops is complete! Thank you to all student members who joined us and learned more about their competitive events!
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The Competitive Events Workshops was held at the Governor's Office Building in Jefferson City, MO on November 7th, 2025.
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

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Conference Registrations</h2>
                </div>

                <div className="flex flex-col p-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The 2025 Competitive Events Workshops Registration is $20 per attendee.
                    </p>
                </div>
                <div className="grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-5 py-10">
                    <QuickLink target={"_blank"} link={"https://www.registermychapter.com/tsa/mo-flc"} label={"Register for CEW"}></QuickLink>
                    <QuickLink target={"_blank"} link={"https://motsaweb.org/wp-content/uploads/2025/10/2025-Missouri-TSA-Competitive-Events-Preparation-Workshop-Agenda.pdf"} label={"CEW Tentative Agenda"}></QuickLink>
                </div>
            </div>
        </div>  
      </main>
    </div>
  );
}
