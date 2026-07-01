import Header from "@/components/Header";

export default function Mission() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">TSA Mission, Creed, & Motto</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Technology Student Association is dedicated to provide middle and high school students with STEM competitions, intracurricular activities, leadership opportunities, and community service.
          </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          <div>
            <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
              <span className="text-2xl"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Mission</h2>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">The Technology Student Association enhances personal development, leadership, and career opportunities in STEM. Members apply and integrate these concepts through intracurricular activities, competitions, and related programs.</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
              <span className="text-2xl"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Creed</h2>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">I believe that Technology Education holds an important place in my life in the technical world. I believe that there is a need for the development of good attitudes concerning work, tools, materials, experimentation and processes of industry.</p>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Guided by my teachers, artisans from industry, and my own initiative, I will strive to do my best in making my school, community; state and nation better places in which to live.</p>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">I will accept the responsibilities that are mine. I will accept the theories that are supported by proper evidence. I will explore on my own for safer, more effective methods of working and living.</p>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">I will strive to develop a cooperative attitude and will exercise tact and respect for other individuals.</p>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Through the work of my hands and mind, I will express my ideas to the best of my ability.</p>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">I will make it my goal to do better each day the task before me and to be steadfast in my belief in my God and my fellow Americans.</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
              <span className="text-2xl"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Motto</h2>
            </div>

            <div className="flex flex-col p-6">
              <p className="text-xl text-[#072c5c] leading-relaxed">Learning to lead in a technical world.</p>
            </div>
          </div>
        </div>  
      </main>
    </div>
  );
}
