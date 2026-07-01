import Header from "@/components/Header";

export default function About() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Missouri TSA</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Technology Student Association is dedicated to provide middle and high school students with STEM competitions, intracurricular activities, leadership opportunities, and community service.
          </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          <div>
            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Missouri TSA is affiliated with national Technology Student Association (TSA), a non-profit, nationally recognized Career and Technical Student Organization (CTSO) devoted to the development of students in technology education.  Missouri TSA serves more than 2,200 middle and high school students in 90 local school chapters.</p>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Our purpose is to prepare our student members for the challenges of our dynamic world by promoting technological literacy, leadership, problem-solving skills, and personal growth through relevant learning opportunities and experiences. Missouri TSA is aligned with and adheres to national TSA policies, guidelines, mission statement.</p>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Our Mission: The Technology Student Association enhances personal development, leadership, and career opportunities in STEM, whereby  members apply and integrate these concepts through intracurricular activities, competitions, and related programs. TSA activities, competitions and leadership development initiatives support regular coursework to exten learning beyond the classroom. Visit our national website for more information about National TSA.</p>
            </div>
          </div>
        </div>  
      </main>
    </div>
  );
}
