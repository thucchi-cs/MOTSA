import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center bg-zinc-50 font-sans dark:bg-[#040531]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">About Missouri TSA</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-12 gap-y-10">
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
              Missouri TSA is affiliated with national Technology Student Association (TSA), a non-profit, nationally recognized Career and Technical Student Organization (CTSO) devoted to the development of students in technology education.  Missouri TSA serves more than 2,200 middle and high school students in 90 local school chapters.
            </p>
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
              Our purpose is to prepare our student members for the challenges of our dynamic world by promoting technological literacy, leadership, problem-solving skills, and personal growth through relevant learning opportunities and experiences. Missouri TSA is aligned with and adheres to national TSA policies, guidelines, mission statement.
            </p>
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
              Our Mission: The Technology Student Association enhances personal development, leadership, and career opportunities in STEM, whereby  members apply and integrate these concepts through intracurricular activities, competitions, and related programs. TSA activities, competitions and leadership development initiatives support regular coursework to exten learning beyond the classroom. Visit our national website for more information about National TSA.
            </p>
          </div>
        </div>    
      </main>
    </div>
  );
}
