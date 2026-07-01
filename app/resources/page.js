import Header from "@/components/Header";
import QuickLink from "@/components/QuickLink";

export default function Resources() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"resources"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold md:py-10">
          <h1 className="text-3xl md:text-5xl relative text-left px-[5%] pt-15">Resources</h1>
            <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-7 gap-y-7 py-8 md:py-15 px-5 md:px-30">
              <QuickLink target={""} link={"/students/dress-code"} label={"Dress Code"}></QuickLink>
              <QuickLink target={""} link={"/students/competitive-events"} label={"Competitive Events"}></QuickLink>
              <QuickLink target={""} link={"/students/degree"} label={"Degree Program"}></QuickLink>
              <QuickLink target={""} link={"/resources/winners"} label={"Past Winners"}></QuickLink>
              <QuickLink target={""} link={"/resources/awards"} label={"Outstanding Awards"}></QuickLink>
              <QuickLink target={""} link={"/resources/newsletter"} label={"Newsletter"}></QuickLink>
              <QuickLink target={""} link={"/resources/billing"} label={"Billing/Late Fee"}></QuickLink>
              <QuickLink target={""} link={"/resources/bylaws"} label={"Bylaws"}></QuickLink>
              <QuickLink target={""} link={"/events/calendar"} label={"Calendar"}></QuickLink>
              <QuickLink target={""} link={"/resources/gallery"} label={"Gallery"}></QuickLink>
              <QuickLink target={""} link={"/advisors/resources"} label={"Chapter Resources & Tips"}></QuickLink>
              <QuickLink target={""} link={"/about/board"} label={"Board of Directors"}></QuickLink>
            </div>
        </div>    
      </main>
    </div>
  );
}
