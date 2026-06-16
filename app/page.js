import Image from "next/image";
import BoxButton from "@/components/BoxButton";
import Header from "@/components/Header";
import NewsBox from "@/components/News";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
      <Header page={"home"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
        <div className="flex flex-col w-full relative">
            <Image
              className="object-cover object-center"
              src="/students2.JPG"
              alt="Next.js logo"
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

        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-white">
          <h1 className="text-3xl md:text-5xl px-[5%] pt-15 font-bold text-center">Recent Updates</h1>
          <div className="md:grid md:grid-cols-4 w-full justify-center items-center h-full px-6 py-3 md:px-10 md:py-12 gap-x-3 gap-y-5">
              <NewsBox link="/advisors/zoom" label={"Advisors Zoom Meetings"} content={"Chapter advisors Zoom Meetings will be held on the first Thursday of every month from 3:30pm-4:30pm"} date={"July 1, 2026"} img="/zoom.png"></NewsBox>
              <NewsBox link="/students/officers" label={"2026-2027 Officer Team"} content={"Meet your new 2026-2027 Missouri TSA State Officer Team!"} date={"July 1, 2026"} img="/officers.webp"></NewsBox>
              <NewsBox link="/events/national-conference" label={"2026 National Conference"} content={"The TSA National Championship Conference was held in Washington, DC on June 22 through June 26."} date={"July 1, 2026"} img="/nationals.jpg"></NewsBox>
              <NewsBox link="/advisors/affiliation" label={"Chapter Affiliation Opens"} content={"TSA Chapter Affilition will open on August 15th. Advisors should visit the website to affiliate their chapters."} date={"July 1, 2026"} img="/students6.png"></NewsBox>
          </div>
        </div> 

        <div className="flex flex-col w-full justify-between items-center h-full text-white md:pb-10 py-15">
          <div className="flex flex-col md:flex-row w-full px-10 justify-between items-center h-full">
            <Image
              className="object-cover"
              src="/students7.JPG"
              alt="Next.js logo"
              width={800}
              height={20}
              priority
              />
            <div className="flex flex-col justify-center items-start md:w-[70%] px-5 md:px-15 gap-y-5">
              <h1 className="text-3xl md:text-4xl text-left pb-3 font-bold">What is Missouri TSA?</h1>
              <hr className="h-1 bg-white w-[50%]" />
              <p className="text-md text-center md:text-left md:text-2xl w-full leading-relaxed">
                Missouri TSA, affiliated with national Technology Student Association (TSA), is devoted to the development of students in technology education.  Missouri TSA serves more than 2,200 middle and high school students in 90 local school chapters. Our purpose is to prepare our student members for the challenges of our dynamic world by promoting technological literacy, leadership, problem-solving skills, and personal growth through relevant learning opportunities and experiences.
              </p>
              <div className="grid grid-cols-3 gap-x-5 md:gap-y-auto w-full h-full">
                <a href="/about" className="bg-red-500 py-3 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-lg md:text-xl">Learn More &#8594;</h1>
                </a>
                <a href="/about/chapter-map" className="bg-red-500 py-3 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-lg md:text-xl">Find a Chapter &#8594;</h1>
                </a>
                <a href="/advisors/start-a-chapter" className="bg-red-500 py-3 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-lg md:text-xl">Start a Chapter &#8594;</h1>
                </a>
              </div>
            </div>
          </div>
        </div> 

        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold ">
          <h1 className="text-3xl md:text-5xl relative text-left px-[5%] pt-10">Quick Links</h1>
          <div className="grid grid-cols-2 w-full overflow-x-auto py-10 px-30 gap-x-15">
            <div className="flex flex-col justify-start items-center">
              <p className="text-3xl text-center underline">Students</p>
              <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-5 gap-y-5 py-5">
                <a href="/about" className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
                  <h1 className="text-md md:text-2xl text-center">Competitive Events</h1>
                </a>
                <a href="/about" className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
                  <h1 className="text-md md:text-2xl text-center">Dress Code</h1>
                </a>
                <a href="/about" className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
                  <h1 className="text-md md:text-2xl text-center">Degree Program</h1>
                </a>
                <a href="/about" className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
                  <h1 className="text-md md:text-2xl text-center">State Officers</h1>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center">
              <p className="text-3xl text-center underline">General</p>
              <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-5 gap-y-5 py-5">
                <a href="/about" className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
                  <h1 className="text-md md:text-2xl text-center">Calendar</h1>
                </a>
                <a href="/about" className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
                  <h1 className="text-md md:text-2xl text-center">Newsletter</h1>
                </a>
                <a href="/about" className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
                  <h1 className="text-md md:text-2xl text-center">Past Winners</h1>
                </a>
                <a href="/about" className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
                  <h1 className="text-md md:text-2xl text-center">Gallery</h1>
                </a>
              </div>
            </div>
            {/* <div className="flex min-w-max justify-center gap-5 md:w-full px-[5%] md:justify-between items-center h-full bg-white text-black py-4 md:py-10 overflow-x-auto">
              <BoxButton link="/about" title={"About TSA"} icon={"/motsalogo.png"}></BoxButton>
              <BoxButton link="https://motsaweb.org/wp-content/uploads/2025/11/Missouri-TSA-Calendar-of-Events-2025-2026-Unity-Through-Community-Schedule-PDF.pdf" title={"Calendar of Events"} icon={"/calendar.png"}></BoxButton>
              <BoxButton link="/resources/bylaws" title={"Missouri TSA Bylaws"} icon={"/book.png"}></BoxButton>
              <BoxButton link="/students/officers" title={"State Officer Team"} icon={"/team.png"}></BoxButton>
            </div>  */}
          </div>
        </div>
            
      </main>
    </div>
  );
}
