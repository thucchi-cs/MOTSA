import Header from "@/components/Header";

export default function Scholarships() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
          <h1 className="text-3xl md:text-5xl text-left px-[5%] pt-10 font-bold">Scholarships</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-6 md:py-12 gap-y-6 md:gap-y-10">
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed">
              Current and active high school senior Missouri TSA members that meet the qualification criteria may apply for a scholarship that will go towards their first year of college.
            </p>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed">
              Winners will be announced at the Missouri TSA Championship Conference. The deadline for scholarship applications is January 15th, 2026.
            </p>
            <li className="text-md md:text-2xl md:w-[40%] px-5 leading-relaxed">
              Caleb Crews Memorial Scholarship: $1,000
            </li>
            <li className="text-md md:text-2xl md:w-[40%] px-5 leading-relaxed">
              Robert Stokes Scholarship: $1,000
            </li>
            <li className="text-md md:text-2xl md:w-[40%] px-5 leading-relaxed">
              Legacy Scholarships (two available): $500
            </li>
            <a href="https://motsaweb.org/wp-content/uploads/2025/09/Missouri-TSA-2025-2026-Scholarship-Application-1-1.pdf" target="_blank" className="bg-red-500 md:w-[20%] px-5 md:px-0 h-10 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                <h1 className="text-sm md:text-xl">Scholarship Application &#8594;</h1>
            </a>
          </div>
        </div>    
      </main>
    </div>
  );
}
