import Image from "next/image";
import Header from "@/components/Header";
import NewsBox from "@/components/News";
import QuickLink from "@/components/QuickLink";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
      <Header page={"home"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">

        {/* Big image section at the top */}
        <div className="flex flex-col w-full relative">
            <Image
              className="object-cover object-center h-60 md:h-auto"
              src="/students2.JPG"
              alt="Students"
              width={5000}
              height={20}
              priority
              />
            <div className="absolute bg-black/60 z-0 w-full h-full inset-0"></div>
          <div className="flex flex-col absolute bottom-5 px-5 md:bottom-10 md:px-30 md:py-10 w-full md:gap-6 text-center items-center md:items-start md:text-left z-10">
            <h1 className="w-full text-3xl md:text-8xl font-semibold text-zinc-50">
              Learning to Lead
            </h1>
            <h1 className="w-full text-3xl md:text-8xl font-semibold text-zinc-50">
              in a Technical World
            </h1>
          </div>  
        </div> 

        {/* Recent Updates Section */}
        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-white md:py-15">
          <h1 className="text-3xl md:text-5xl px-[5%] pt-10 md:pt-15 font-bold text-center">Recent Updates</h1>
          <div className="w-full overflow-x-auto md:overflow-x-hidden">
            <div className="grid grid-cols-4 min-w-max md:min-w-full justify-center items-center h-full px-6 py-3 md:px-10 md:py-12 gap-x-3 gap-y-5">
              <NewsBox link="/students/brand-design-contest" label={"Brand Design Contest is open!"} content={"Submit your design for the 2027 Missouri TSA shirt and pin!"} date={"August 3rd, 2026"} img="/pins.jpg"></NewsBox>
              <NewsBox link="/advisors/affiliation" label={"Chapter Affiliation Opens"} content={"TSA Chapter Affilition will open on September 1st. Advisors should visit the website to affiliate their chapters."} date={"July 1, 2026"} img="/students6.png"></NewsBox>
              <NewsBox link="/advisors/zoom" label={"Advisors Zoom Meetings"} content={"Chapter advisors Zoom Meetings will be held on the first Thursday of every month from 3:30pm-4:30pm"} date={"July 1, 2026"} img="/zoom.png"></NewsBox>
              <NewsBox link="/students/officers" label={"2026-2027 Officer Team"} content={"Meet your new 2026-2027 Missouri TSA State Officer Team!"} date={"July 1, 2026"} img="/officers3.jpg"></NewsBox>
            </div>
          </div>
        </div>

        {/* Short Intro Section */}
        <div className="flex flex-col w-full justify-between items-center h-full text-white py-15 md:py-30">
          <div className="flex flex-col md:flex-row w-full px-5 md:px-10 justify-between items-center h-full">
            <Image
              className="object-cover"
              src="/students8.JPG"
              alt="Students"
              width={600}
              height={20}
              priority
              />
            <div className="flex flex-col justify-center items-start md:w-[70%] px-0 md:px-15 gap-y-5">
              <h1 className="text-2xl md:text-4xl text-left pt-5 md:pt-0 md:pb-3 font-bold">What is Missouri TSA?</h1>
              <hr className="h-1 bg-white w-[50%] hidden md:block" />
              <p className="text-md text-left md:text-2xl w-full leading-relaxed">
                Missouri TSA, affiliated with national Technology Student Association (TSA), is devoted to the development of students in technology education.  Missouri TSA serves more than 2,200 middle and high school students in 90 local school chapters. Our purpose is to prepare our student members for the challenges of our dynamic world by promoting technological literacy, leadership, problem-solving skills, and personal growth through relevant learning opportunities and experiences.
              </p>
              <div className="grid grid-cols-3 gap-x-2 md:gap-x-5 md:gap-y-auto w-full h-full">
                <a href="/about" className="bg-red-500 py-3 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">Learn More &#8594;</h1>
                </a>
                <a href="/about/chapter-map" className="bg-red-500 py-3 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">Find a Chapter &#8594;</h1>
                </a>
                <a href="/advisors/start-a-chapter" className="bg-red-500 py-3 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">Start a Chapter &#8594;</h1>
                </a>
              </div>
            </div>
          </div>
        </div> 
        
        {/* Quick Links Section */}
        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold md:py-15">
          <h1 className="text-3xl md:text-5xl relative text-left px-[5%] pt-15">Quick Links</h1>
          <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 w-full overflow-x-auto py-5 md:py-10 px-5 md:px-30 md:gap-x-15 gap-y-5 md:gap-y-0">
            <div className="flex flex-col justify-start items-center">
              <p className="text-xl md:text-3xl text-center underline">Students</p>
              <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-5 gap-y-5 py-5">
                <QuickLink target={""} link={"/students/competitive-events"} label={"Competitive Events"}></QuickLink>
                <QuickLink target={""} link={"/students/dress-code"} label={"Dress Code"}></QuickLink>
                <QuickLink target={""} link={"/students/degree"} label={"Degree Program"}></QuickLink>
                <QuickLink target={""} link={"/students/officers"} label={"State Officers"}></QuickLink>
                {/* <QuickLink target={""} link={"/students/apply"} label={"Apply for Office"}></QuickLink> */}
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              <p className="text-xl md:text-3xl text-center underline">General</p>
              <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-5 gap-y-5 py-5">
                <QuickLink target={""} link={"/events/calendar"} label={"Calendar"}></QuickLink>
                <QuickLink target={""} link={"/resources/newsletter"} label={"ENewsletter"}></QuickLink>
                {/* <QuickLink target={""} link={"/resources/winners"} label={"Past Winners"}></QuickLink> */}
                <QuickLink target={""} link={"/resources/gallery"} label={"Gallery"}></QuickLink>
                <QuickLink target={""} link={"/advisors/resources"} label={"Chapter Resources"}></QuickLink>
              </div>
            </div>
          </div>
        </div>
            
      </main>
    </div>
  );
}
