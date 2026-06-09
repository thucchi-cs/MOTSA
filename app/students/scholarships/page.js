import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-20">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Scholarships</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-12 gap-y-10">
            <p className="text-2xl w-[60%] px-15 leading-relaxed">
              Current and active high school senior Missouri TSA members that meet the qualification criteria may apply for a scholarship that will go towards their first year of college. Winners will be announced at the Missouri TSA Championship Conference. The scholarships available are Caleb Crews Memorial Scholarship ($1,000), Robert Stokes Scholarship ($1,000), and two Legacy Scholarships ($500). The deadline for scholarship applications is January 15th, 2026.
            </p>
            <a href="https://motsaweb.org/wp-content/uploads/2025/09/Missouri-TSA-2025-2026-Scholarship-Application-1-1.pdf" target="_blank" className="bg-red-500 w-[20%] h-10 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                <h1 className="text-xl">Scholarship Application {"->"}</h1>
            </a>
          </div>
        </div>    
      </main>
    </div>
  );
}
