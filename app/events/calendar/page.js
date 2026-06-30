import Header from "@/components/Header";

export default function Calendar() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-10">
          <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">Calendar of Events</h1>
          <p className="text-lg md:text-2xl text-center px-[5%] pb-10 font-bold pt-5">2026 - 2027</p>
          <iframe className="border-0 w-[90%] h-[90vh]" src="https://calendar.google.com/calendar/embed?src=f4794ece8161358cf35cdc8f4c95857d8cddb185583c616f6989da7a4fc67ae2%40group.calendar.google.com&ctz=America%2FChicago"></iframe>
        </div>    
      </main>
    </div>
  );
}
