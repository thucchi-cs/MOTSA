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

        <div className="w-full max-w-6xl px-6 py-14 flex flex-col gap-y-14">
          <div className="md:grid md:grid-cols-2 text-center flex flex-col justify-center items-center h-full py-5 gap-y-10">
            <MemberDisp name="Marsha McCorkle" line1="President (2023-2026)" line2="MMcCorkle@cjr1.org"></MemberDisp>
            <MemberDisp name="Shannon Winkler" line1="Secretary/Treasurer (2024-2026)" line2="shannon.winkler@lps53.org"></MemberDisp>
            <MemberDisp name="Russell Juengel" line1="Immediate Past President (2025-2028)" line2="rjuengel@hazelwoodschools.org"></MemberDisp>
            <MemberDisp name="Chris Huhn" line1="Corporate Board Member (2024-2026)" line2="chuhn@cjr1.org"></MemberDisp>
            <MemberDisp name="Dr. Jim Kreyling" line1="Corporate Board Member (2024-2026)" line2="kreylingj@msdr9.org"></MemberDisp>
            <MemberDisp name="Axumait Yared" line1="Student President (2026-2027)" line2="motsa@gmail.com"></MemberDisp>
            <MemberDisp name="Jen Martin" line1="High School Representative (2025-2028)" line2="jmartin3@bssd.net"></MemberDisp>
            <MemberDisp name="Mariah Boshears" line1="State Officer Advisor" line2="MBoshears@cjr1.org"></MemberDisp>
            <MemberDisp name="Laura Lee" line1="Middle School Representative (2024-2026)" line2="Laura.Lee@nkcschools.org"></MemberDisp>
            <MemberDisp name="Byekwaso Gilbert" line1="Missouri TSA State Advisor" line2="byekwaso.gilbert@dese.mo.gov"></MemberDisp>
            <MemberDisp name="Christina King" line1="President - Elect (2025-2028)" line2="cking@rolla31.org"></MemberDisp>
            <MemberDisp name="Susan Kulyan" line1="Missouri TSA Assistant State Advisor" line2="susan.kulyan@dese.mo.gov"></MemberDisp>
            <MemberDisp name="Louis Breinin" line1="Corporate Board Member (2023-2026)" line2="louis.breinin@nkcschools.org"></MemberDisp>
            <MemberDisp name="Dr. Mike Pantleo" line1="University Representative" line2=""></MemberDisp>
          </div>
        </div>  
      </main>
    </div>
  );
}
