import GrayButton from "@/components/GrayButton";
import Header from "@/components/Header";

export default function Alumni() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"alumni"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-white">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">News & Updates</h1>
          <div className="flex flex-row w-full justify-between items-center h-100 px-10 py-12 gap-x-5">
            <div className="flex flex-col w-full justify-start items-center h-full gap-y-5">
              <GrayButton label={"2026-2027 State Officer Application Available"}></GrayButton>
              <GrayButton label={"Competitive Events Workshop Registration Deadline: November 1, 2025"}></GrayButton>
              <GrayButton label={"Meet your 2025-2026 State Officer Team"}></GrayButton>
            </div>
            <div className="flex flex-col w-full justify-start items-center h-full gap-y-5">
              <GrayButton label={"2025-2026 Calendar of Events Released"}></GrayButton>
              <GrayButton label={"2025-2026 Conference Forms Released"}></GrayButton>
            </div>
          </div>
        </div>    
      </main>
    </div>
  );
}
