import Header from "@/components/Header";

export default function Calendar() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white">
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-10 md:py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Calendar of Events</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            2026 - 2027
          </p>
        </div>        

        {/* Google Calendar */}
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-5 md:py-10">
          <iframe className="border-0 w-[90%] h-[90vh]" src="https://calendar.google.com/calendar/embed?src=f4794ece8161358cf35cdc8f4c95857d8cddb185583c616f6989da7a4fc67ae2%40group.calendar.google.com&ctz=America%2FChicago"></iframe>
        </div>   

        {/* Upcoming events & updates */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          <div>
              <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                  <span className="text-2xl"></span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Upcoming Events & Updates</h2>
              </div>

              <div className="flex flex-col p-6">
                  <p className="text-xl text-[#072c5c] leading-relaxed">
                    Chapter Affiliation and TEAMS Registration Opens: August 17th, 2026
                  </p>
              </div>
              <div className="flex flex-col p-6">
                  <p className="text-xl text-[#072c5c] leading-relaxed">
                    First Chapter Advisor Support Zoom Meeting: September 3rd, 2026
                  </p>
              </div>
              <div className="flex flex-col p-6">
                  <p className="text-xl text-[#072c5c] leading-relaxed">
                    September E-Newsletter Release: September 7th, 2026
                  </p>
              </div>
              <div className="flex flex-col p-6">
                  <p className="text-xl text-[#072c5c] leading-relaxed">
                    National TSA 48th Anniversary: September 14th, 2026
                  </p>
              </div>
              <div className="flex flex-col p-6">
                  <p className="text-xl text-[#072c5c] leading-relaxed">
                    Fall Leadership Conference Registration Deadline: October 1st, 2026
                  </p>
              </div>
              <div className="flex flex-col p-6">
                  <p className="text-xl text-[#072c5c] leading-relaxed">
                    Brand Design Concept Contest Deadline: October 1st, 2026
                  </p>
              </div>
          </div>
        </div> 
      </main>
    </div>
  );
}
