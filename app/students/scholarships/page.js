import Header from "@/components/Header";

export default function Scholarships() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Scholarships</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Missouri TSA offers scholarships to outstanding members to aid with their future education after high school.
          </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          <div>
            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Current and active high school senior Missouri TSA members that meet the qualification criteria may apply for a scholarship that will go towards their first year of college.</p>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Winners will be announced at the Missouri TSA Championship Conference. The deadline for scholarship applications is January 15th, 2027.</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
              <span className="text-2xl"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Available Scholarships</h2>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Caleb Crews Memorial Scholarship: $1,000</p>
            </div>
            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Robert Stokes Scholarship: $1,000</p>
            </div>
            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Legacy Scholarships (two available): $500</p>
            </div>
          </div>

          <a href="/pdf/Missouri_TSA_2026-2027_Scholarship_Application.pdf" target="_blank" className="bg-red-500 md:w-[50%] px-5 md:px-0 h-10 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
            <h1 className="text-sm md:text-xl">Scholarship Application &#8594;</h1>
          </a>
        </div>  
      </main>
    </div>
  );
}
