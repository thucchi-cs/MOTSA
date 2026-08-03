import MemberDisp from "@/components/MemberDisp";
import Header from "@/components/Header";

export default function Board() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Board of Directors</h1>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          <div>
            <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
              <span className="text-2xl"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Executive Committee</h2>
            </div>
            <div className="md:grid md:grid-cols-2 text-center flex flex-col justify-center items-center h-full py-5 gap-y-10">
              <MemberDisp name="Christina King" lines={["President (2026-2027)", "cking@rolla31.org"]}></MemberDisp>
              <MemberDisp name="Marsha McCorkle" lines={["Immediate Past President (2026-2027)", "MMcCorkle@cjr1.org"]}></MemberDisp>
              <MemberDisp name="Jen Martin" lines={["President - Elect (2026-2027)", "jmartin3@bssd.net"]}></MemberDisp>
              <MemberDisp name="Shannon Winkler" lines={["Secretary/Treasurer (2026-2027)", "shannon.winkler@lps53.org"]}></MemberDisp>
              <MemberDisp name="Byekwaso Gilbert" lines={["Missouri TSA State Advisor", "byekwaso.gilbert@dese.mo.gov"]}></MemberDisp>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
              <span className="text-2xl"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Corporate Board Members</h2>
            </div>

            <div className="md:grid md:grid-cols-2 text-center flex flex-col justify-center items-center h-full py-5 gap-y-10">
              <MemberDisp name="Jen Martin" lines={["High School Representative (2025-2028)", "jmartin3@bssd.net"]}></MemberDisp>
              <MemberDisp name="Marsha McCorkle" lines={["Middle School Representative (2026-2029)", "MMcCorkle@cjr1.org"]}></MemberDisp>
              <MemberDisp name="Byekwaso Gilbert" lines={["Missouri TSA State Advisor", "byekwaso.gilbert@dese.mo.gov"]}></MemberDisp>
              <MemberDisp name="Susan Kulyan" lines={["Missouri TSA Assistant State Advisor", "susan.kulyan@dese.mo.gov"]}></MemberDisp>
              <MemberDisp name="Mariah Boshears" lines={["State Officer Advisor", "MBoshears@cjr1.org"]}></MemberDisp>
              <MemberDisp name="Axumait Yared" lines={["Student President (2026-2027)", "motsa@gmail.com"]}></MemberDisp>
              <MemberDisp name="Shannon Winkler" lines={["Corporate Board Member (2026-2029)", "shannon.winkler@lps53.org"]}></MemberDisp>
              <MemberDisp name="Russell Juengel" lines={["Corporate Member (2025-2028)", "rjuengel@hazelwoodschools.org"]}></MemberDisp>
              <MemberDisp name="Chris Huhn" lines={["Corporate Board Member (2026-2029)", "chuhn@cjr1.org"]}></MemberDisp>
              <MemberDisp name="Dr. Jim Kreyling" lines={["Corporate Board Member (2026-2029)", "kreylingj@msdr9.org"]}></MemberDisp>
              <MemberDisp name="Christina King" lines={["Corporate Member (2025-2028)", "cking@rolla31.org"]}></MemberDisp>
              <MemberDisp name="Louis Breinin" lines={["Corporate Board Member (2026-2029)", "louis.breinin@nkcschools.org"]}></MemberDisp>
            </div>
          </div>
        </div>  
      </main>
    </div>
  );
}
