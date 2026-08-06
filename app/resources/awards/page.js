import Header from "@/components/Header";

export default function Awards() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"resources"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        {/* Content */}
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
          <h1 className="text-3xl md:text-5xl text-left px-[5%] pt-10 font-bold">Outstanding Awards</h1>
          <div className="flex flex-col w-full justify-between items-center h-full md:px-10 py-12 gap-y-10 md:w-[70%]">
            {/* Overview */}
            <p className="text-lg md:text-2xl px-6 md:px-15 leading-relaxed">
                Missouri TSA wants to take the opportunity to recognize all of the outstanding work happening in our state! We hope that each of you can take the time to recognize someone - or yourself - for doing extraordinary work! Also, please share this information with your members, their parents, school administration and staff!
            </p>
            <p className="text-lg md:text-2xl px-6 md:px-15 leading-relaxed font-bold">
                2026 submission deadline: February 28th, 2027 by 5:00 p.m.
            </p>

            {/* Application link */}
            <h1 className="text-2xl md:text-3xl text-center font-bold pt-5">Applications</h1>
            <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-7 gap-y-7 px-5 md:px-30">
                <a href="/pdf/2027-Missouri-TSA-Middle-School-Advisor-of-the-Year-Application.pdf" target="_blank" className="bg-red-500 py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">MOTSA Middle School Advisor of the Year &#8594;</h1>
                </a>
                <a href="/pdf/2027_Missouri_TSA_High_School_Advisor_of_the_Year_Application.pdf" target="_blank" className="bg-red-500 py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">MOTSA High School Advisor of the Year &#8594;</h1>
                </a>
                <a href="/pdf/2027_Missouri_TSA_Outstanding_Recognition_Award_Application.pdf" target="_blank" className="bg-red-500 py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">Outstanding Recognition Award &#8594;</h1>
                </a>
                <a href="/pdf/MOTSA_26_27_Distinguished_Student_Award.pdf" target="_blank" className="bg-red-500 py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">Distinguished Student Award &#8594;</h1>
                </a>
                <a href="/pdf/Missouri-TSA-2026-2027-Chapter-Excellence-Award.pdf" target="_blank" className="bg-red-500 py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">Chapter Excellence Award &#8594;</h1>
                </a>
                <a href="https://motsaweb.org/wp-content/uploads/2025/09/2026-Missouri-TSA-Distinguished-Alumni-Award-Application.pdf" target="_blank" className="bg-red-500 py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">Distinguished Alumni Award &#8594;</h1>
                </a>
                <a href="/pdf/2027-Missouri-TSA-Distinguished-Service-Award.pdf" target="_blank" className="bg-red-500 py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                  <h1 className="text-xs md:text-xl">Distinguished Service Award &#8594;</h1>
                </a>
            </div>
          </div>
        </div>    
      </main>
    </div>
  );
}
