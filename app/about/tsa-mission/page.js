import Header from "@/components/Header";

export default function Mission() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
          <h1 className="text-3xl md:text-5xl text-center md:text-left px-[5%] pt-10 font-bold">TSA Mission, Creed, & Motto</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 md:py-12 gap-y-3 md:gap-y-10">
            <h1 className="text-xl md:text-4xl text-left px-[5%] pt-10 font-bold">Mission</h1>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed text-center">
                The Technology Student Association enhances personal development, leadership, and career opportunities in STEM.  Members apply and integrate these concepts through intracurricular activities, competitions, and related programs.
            </p>
            <h1 className="text-xl md:text-4xl text-left px-[5%] md:pt-10 font-bold">Creed</h1>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed text-center md:text-left">
                I believe that Technology Education holds an important place in my life in the technical world.  I believe that there is a need for the development of good attitudes concerning work, tools, materials, experimentation and processes of industry..
            </p>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed text-center md:text-left">
                Guided by my teachers, artisans from industry, and my own initiative, I will strive to do my best in making my school, community; state and nation better places in which to live.
            </p>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed text-center md:text-left">
                I will accept the responsibilities that are mine.  I will accept the theories that are supported by proper evidence.  I will explore on my own for safer, more effective methods of working and living.
            </p>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed text-center md:text-left">
                I will strive to develop a cooperative attitude and will exercise tact and respect for other individuals.
            </p>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed text-center md:text-left">
                Through the work of my hands and mind, I will express my ideas to the best of my ability.
            </p>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed text-center md:text-left">
                I will make it my goal to do better each day the task before me and to be steadfast in my belief in my God and my fellow Americans.
            </p>
            <h1 className="text-xl md:text-4xl text-left px-[5%] md:pt-10 font-bold">Motto</h1>
            <p className="text-md md:text-2xl md:w-[70%] md:px-15 leading-relaxed text-center md:text-center pb-5 md:pb-0">
                Learning to lead in a technical world.
            </p>
          </div>
        </div>    
      </main>
    </div>
  );
}
