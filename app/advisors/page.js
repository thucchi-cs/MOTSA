import Header from "@/components/Header";
import Image from "next/image";
import QuickLink from "@/components/QuickLink";

export default function Advisors() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full relative">
            <Image
              className="object-cover object-center"
              src="/advisors2.JPG"
              alt="Next.js logo"
              width={5000}
              height={200}
              priority
              />
            <div className="absolute bg-black/40 z-0 w-full inset-0"></div>
        </div> 

        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-zinc-200 py-3 md:py-10">
          <a href="https://tsamembership.registermychapter.com/" target="_blank" className="bg-red-500 md:w-[25%] h-[5vh] md:h-[10vh] px-5 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
            <h1 className="text-xl md:text-3xl font-bold">National TSA Log In &#8594;</h1>
          </a>
        </div>

        <div className="flex flex-col w-full justify-between items-center h-full text-white md:pb-10 md:gap-y-10 py-5 md:py-10">
          <h1 className="text-3xl md:text-5xl text-left px-[5%] pt-10 pb-3 md:pb-0 font-bold">Being an Advisor</h1>
          <p className="text-md text-center md:text-left md:text-2xl md:w-[70%] px-5 md:px-15 leading-relaxed">
            Advisors are vital to the success of a local TSA Chapter. The Advisor needs to be aware of the responsibilities this entails, and become familiar with the local, state, and national structure of TSA. With a committed and enthusiastic advisor, students will grow as leaders and reap all the benefits that a TSA membership has to offer.
          </p>
          <p className="text-md text-center md:text-left md:text-2xl md:w-[70%] px-5 md:px-15 leading-relaxed">
            The Advisor is a teacher, a mentor, and a resource who assists TSA members in relating Chapter activities to their local STEM education curriculum and to a future technology career. Remember, above all, that TSA students look to their Advisor as a reference for how they should act and participate in TSA activities. If the Advisor is uncooperative and indifferent, the students will be as well. Please set the standard for Missouri TSA members high by increasing your involvement and enthusiasm in the organization!
          </p>
          <p className="text-md text-center md:text-left md:text-2xl md:w-[70%] px-5 md:px-15 leading-relaxed">
            The attitude, interest, enthusiasm, and commitment exhibited by the local TSA Chapter Advisor will be crucial as he/she conveys the values of TSA in the educational program in middle school, secondary, postsecondary and collegiate STEM and technology education programs. The Advisor, individually and with TSA Chapter members, must establish and maintain contacts with a variety of individuals and groups in publicizing and securing resources and support.
          </p>
        </div> 

        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold md:py-10">
          <h1 className="text-3xl md:text-5xl relative text-left px-[5%] pt-15">Links & Resources</h1>
            <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-7 gap-y-7 py-8 md:py-15 px-5 md:px-30">
              <QuickLink target={""} link={"/advisors/forms"} label={"Conference Forms"}></QuickLink>
              <QuickLink target={""} link={"/advisors/start-a-chapter"} label={"Start a Chapter"}></QuickLink>
              <QuickLink target={""} link={"/advisors/resources"} label={"Chapter Resources"}></QuickLink>
              <QuickLink target={""} link={"/advisors/affiliation"} label={"Affiliation Information"}></QuickLink>
              <QuickLink target={""} link={"/advisors/zoom"} label={"Monthly Zoom Meetings"}></QuickLink>
            </div>
        </div> 
      </main>
    </div>
  );
}
