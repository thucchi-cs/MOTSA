import Header from "@/components/Header";

export default function BrandDesignContest() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Brand Design Contest</h1>
            <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
                Design this year's Missouri TSA t-shirts and pins!
            </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">The Contest</h2>
                </div>

                <div className="flex flex-col p-6 pb-3">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Are you a talented designer or artist who wants to be recognized state-wide? Every Missouri TSA member is invited to enter our annual brand design contest to come up with this year's state T-Shirt and Trading Pin. Both winning designs will be utilized at the State Championship Conference, and the winning Trading Pin will be utilized at the National Conference as well.</p>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Rules</h2>
                </div>

                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">Each member may only submit one entry per year.</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">All required design documents AND the submission form must be emailed to State Advisor Byekwaso Gilbert at <a className="underline text-blue-500" href="mailto:byekwaso.gilbert@dese.mo.gov">byekwaso.gilbert@dese.mo.gov</a> by <strong>Thursday, October 1, 2026 by 5:00 pm.</strong></p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">All designs should include the words "Missouri TSA" and "2027". Entries that do not meet the requirements listed will be disqualified. Submissions MAY include the Missouri TSA logo and/or the TSA 2026-2027 National Conference theme: "Forward to Fifty".</p>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Timeline</h2>
                </div>

                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>October 1st at 5pm</strong>: Deadline to submit your designs.</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>Fall Leadership Conference</strong>: All appropriate designs will be judged.</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>State Championship Conference</strong>: First place winner will be recognized at the opening ceremony. T-shirt with winning design will be available to members at the Conference.</p>
                </div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed"><strong>National Conference</strong>: Winning design for trading pins will be the official Missouri pin design for the National Pin Trading event.</p>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center gap-y-5 py-5">
                <a href="/pdf/2026-2027-Missouri-TSA-Brand-Design-Concept-Details.pdf" target="_blank" className="bg-red-500 w-full md:w-[50%] px-5 md:px-0 py-5 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-center text-sm md:text-xl">Rules & Submission Form&#8594;</h1>
                </a>
            </div>
        </div>  
      </main>
    </div>
  );
}
