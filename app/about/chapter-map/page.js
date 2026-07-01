import Header from "@/components/Header";

export default function ChapterMap() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Chapter Map</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Find the nearest TSA chapter to you!
          </p>
        </div>
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white">
          <iframe className="my-10 h-[700] w-[90%] md:w-[50%]" src="https://www.google.com/maps/d/embed?mid=10rAmmPFg55P4RzzP-4IEEuw46cFXjTM&ehbc=2E312F"></iframe>
        </div>    
      </main>
    </div>
  );
}
