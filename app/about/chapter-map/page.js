import Header from "@/components/Header";

export default function ChapterMap() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Chapter Map</h1>
          <iframe className="my-10 h-[700] w-[90%] md:w-[50%]" src="https://www.google.com/maps/d/embed?mid=10rAmmPFg55P4RzzP-4IEEuw46cFXjTM&ehbc=2E312F"></iframe>
        </div>    
      </main>
    </div>
  );
}
