import Header from "@/components/Header";

export default function Calendar() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white">
        <div className="w-full bg-[#072c5c] py-10 md:py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Calendar of Events</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            2026 - 2027
          </p>
        </div>        
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-5 md:py-10">
          <iframe className="border-0 w-[90%] h-[90vh]" src="https://calendar.google.com/calendar/embed?src=f4794ece8161358cf35cdc8f4c95857d8cddb185583c616f6989da7a4fc67ae2%40group.calendar.google.com&ctz=America%2FChicago"></iframe>
        </div>    
      </main>
    </div>
  );
}
