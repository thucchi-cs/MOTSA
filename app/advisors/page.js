import Header from "@/components/Header";
import Image from "next/image";
import BoxButton from "@/components/BoxButton";

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

        <div className="flex flex-col w-full justify-between items-center h-full text-white md:pb-10 gap-y-10">
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

        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-white">
          <h1 className="text-3xl md:text-5xl text-left px-[5%] pt-5 md:pt-10 font-bold">Links & Resources</h1>
          <div className="w-full overflow-x-auto">
            <div className="flex min-w-max justify-center gap-5 md:w-full px-[5%] md:justify-between items-center h-full bg-white text-black py-4 md:py-10 overflow-x-scroll">
              <BoxButton link="/advisors/forms" title={"Conference Forms"} icon={"/forms.png"}></BoxButton>
              <BoxButton link="/advisors/start-a-chapter" title={"Starting a Chapter"} icon={"/motsalogo.png"}></BoxButton>
              <BoxButton link="/advisors/resources" title={"Chapter Resources"} icon={"/resources.png"}></BoxButton>
              <BoxButton link="/advisors/affiliation" title={"Affiliation Information"} icon={"/tsa.png"}></BoxButton>
            </div> 
          </div>
        </div>    
      </main>
    </div>
  );
}
