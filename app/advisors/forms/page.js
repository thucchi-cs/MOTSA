import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
          <h1 className="text-3xl md:text-5xl text-left px-[5%] pt-10 font-bold">Conference Forms</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-6 md:py-12 gap-y-10">
            <p className="text-lg md:text-2xl md:w-[70%] md:px-15 leading-relaxed">
                The 2025-2026 Multiple Release Form and Chapter Assurance Forms are below. You will only need the Multiple Release Form for your records. The Missouri TSA Chapter Assurance Form is to be completed by the Local Chapter Advisors prior to every state conference/event and turned into state staff prior to the conference/event.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-full">
                <div className="flex flex-col justify-center items-center gap-5 md:w-[30%] h-full">
                    <p className="text-md md:text-lg w-full text-center">
                        Chapter Advisors turn in the Chapter Assurance Form prior to each Missouri TSA conference/event
                    </p>
                    <a href="https://motsaweb.org/wp-content/uploads/2025/08/Missouri-TSA-2025-2026-Chapter-Assurance-Form.pdf" target="_blank" className="bg-red-500 w-full h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                        <h1 className="text-sm md:text-xl">2025-2026 Chapter Assurance Form &#8594;</h1>
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 md:w-[30%] h-full">
                    <p className="text-md md:text-xl w-full text-center">
                        Students fill out the below Multiple Release Form and give it to your Chapter Advisor
                    </p>
                    <a href="https://motsaweb.org/wp-content/uploads/2024/07/Missouri-TSA-2024-2025-Multiple-Release-Form.pdf" target="_blank" className="bg-blue-500 w-full h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#060852] cursor-pointer">
                        <h1 className="text-sm md:text-xl">2025-2026 Multiple Release Form &#8594;</h1>
                    </a>
                </div>
            </div>
          </div>
        </div>    
      </main>
    </div>
  );
}
