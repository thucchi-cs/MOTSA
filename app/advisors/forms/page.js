import Header from "@/components/Header";

export default function Forms() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Conference Forms</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            The 2025-2026 Multiple Release Form and Chapter Assurance Forms are below
          </p>
        </div>
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14 text-[#072c5c]">

        {/* Summary info */}
        <div>
            <div className="flex flex-col p-6">
                <p className="text-xl text-[#072c5c] leading-relaxed">You will only need the Multiple Release Form for your records. The Missouri TSA Chapter Assurance Form is to be completed by the Local Chapter Advisors prior to every state conference/event and turned into state staff prior to the conference/event.</p>
            </div>
        </div>

        {/* Forms */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-full">
              <div className="flex flex-col justify-center items-center gap-5 h-full">
                  <p className="text-md md:text-lg w-full text-center">
                      Chapter Advisors turn in the Chapter Assurance Form prior to each Missouri TSA conference/event
                  </p>
                  <a href="/pdf/Missouri-TSA-2026-2027-Chapter-Assurance-Form.pdf" target="_blank" className="bg-red-500 w-full h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                      <h1 className="text-sm md:text-xl">2026-2027 Chapter Assurance Form &#8594;</h1>
                  </a>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 h-full">
                  <p className="text-md md:text-xl w-full text-center">
                      Students fill out the below Multiple Release Form and give it to your Chapter Advisor
                  </p>
                  <a href="/pdf/Missouri-TSA-2024-2025-Multiple-Release-Form.pdf" target="_blank" className="bg-blue-500 w-full h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#072c5c] cursor-pointer">
                      <h1 className="text-sm md:text-xl">2025-2026 Multiple Release Form &#8594;</h1>
                  </a>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}
