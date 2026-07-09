import Header from "@/components/Header";

export default function Degree() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Missouri TSA Degree Program</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Develop and deepen your knowledge, understanding, and engagement in TSA!
          </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">The Missouri TSA Leadership Degree Program is designed for chapter members to develop and further their knowledge, understanding, and engagement in TSA. Four degree levels are offered with increasing levels of requirements. One degree may be earned per school year at the Fall Leadership Conference.</p>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Degree Levels</h2>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <h3 className="text-xl font-bold text-[#072c5c] mb-2">1. Basic Degree</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The first step in the Missouri TSA Degree Program is the Missouri TSA Basic Degree. This degree is available to all Missouri TSA members regardless of school grade level. The Basic Degree can be earned at the Fall Leadership Conference by completing the Basic Degree Application. The Basic Degree is awarded at the Fall Leadership Conference Award Session.
                        </p>
                        <a
                            href="/degrees/BasicDegree.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-red-500 font-semibold underline hover:text-red-700 text-lg"
                        >
                            Basic Degree Packet
                        </a>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <h3 className="text-xl font-bold text-[#072c5c] mb-2">2. Academic Degree</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The second step in the Missouri TSA Degree Program is the Missouri TSA Academic Degree. This degree is available for all Missouri TSA members regardless of school grade level upon completion of the Basic Degree requirements and the completion of the Academic Degree Application. The Academic Degree is awarded at the Fall Leadership Conference Award Session.
                        </p>
                        <a
                            href="/degrees/AcademicDegree.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-red-500 font-semibold underline hover:text-red-700 text-lg"
                        >
                            Academic Degree Packet
                        </a>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <h3 className="text-xl font-bold text-[#072c5c] mb-2">3. Collegiate Degree</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The third step in the Missouri TSA Degree Program is the Missouri TSA Collegiate Degree. This degree is available for all Missouri TSA members who have earned the Missouri TSA Academic Degree upon completion of the Collegiate Degree Application. The Collegiate Degree is awarded at the State Championships Conference Award Session.
                        </p>
                        <a
                            href="/degrees/CollegiateDegree.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-red-500 font-semibold underline hover:text-red-700 text-lg"
                        >
                            Collegiate Degree Packet
                        </a>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <h3 className="text-xl font-bold text-[#072c5c] mb-2">4. Scholar Degree</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The fourth step in the Missouri TSA Degree program is the Missouri TSA Scholar Degree. This degree is the highest degree issued by Missouri TSA. It is available for all Missouri TSA members who have earned the Missouri TSA Collegiate Degree upon completion of the Scholar Degree Application along with a professional portfolio demonstrating the candidate’s TSA experiences, and the Scholar Degree Interview at the State Championships Conference The Scholar Degree is awarded at the State Championships Conference Award Session.
                        </p>
                        <a
                            href="/degrees/ScholarDegree.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-red-500 font-semibold underline hover:text-red-700 text-lg"
                        >
                            Scholar Degree Packet
                        </a>
                    </div>
                </div>
            </div>
        </div>  
      </main>
    </div>
  );
}
