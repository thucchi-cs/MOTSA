import BoardMember from "@/components/BoardMember";
import Header from "@/components/Header";

export default function Board() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
            <h1 className="text-3xl md:text-5xl text-center md:text-left px-[5%] py-10 font-bold">Missouri TSA Board of Directors</h1>

            <div className="md:grid md:grid-cols-2 text-center w-[70%] flex flex-col justify-center items-center h-full py-5 md:py-20 gap-y-10">
                <BoardMember name="Marsha McCorkle" position="President (2023-2026)" email="MMcCorkle@cjr1.org"></BoardMember>
                <BoardMember name="Shannon Winkler" position="Secretary/Treasurer (2024-2026)" email="shannon.winkler@lps53.org"></BoardMember>
                <BoardMember name="Russell Juengel" position="Immediate Past President (2025-2028)" email="rjuengel@hazelwoodschools.org"></BoardMember>
                <BoardMember name="Chris Huhn" position="Corporate Board Member (2024-2026)" email="chuhn@cjr1.org"></BoardMember>
                <BoardMember name="Dr. Jim Kreyling" position="Corporate Board Member (2024-2026)" email="kreylingj@msdr9.org"></BoardMember>
                <BoardMember name="Axumait Yared" position="Student President (2026-2027)" email="motsa@gmail.com"></BoardMember>
                <BoardMember name="Jen Martin" position="High School Representative (2025-2028)" email="jmartin3@bssd.net"></BoardMember>
                <BoardMember name="Mariah Boshears" position="State Officer Advisor" email="MBoshears@cjr1.org"></BoardMember>
                <BoardMember name="Laura Lee" position="Middle School Representative (2024-2026)" email="Laura.Lee@nkcschools.org"></BoardMember>
                <BoardMember name="Byekwaso Gilbert" position="Missouri TSA State Advisor" email="byekwaso.gilbert@dese.mo.gov"></BoardMember>
                <BoardMember name="Christina King" position="President - Elect (2025-2028)" email="cking@rolla31.org"></BoardMember>
                <BoardMember name="Susan Kulyan" position="Missouri TSA Assistant State Advisor" email="susan.kulyan@dese.mo.gov"></BoardMember>
                <BoardMember name="Louis Breinin" position="Corporate Board Member (2023-2026)" email="louis.breinin@nkcschools.org"></BoardMember>
                <BoardMember name="Dr. Mike Pantleo" position="University Representative" email=""></BoardMember>
            </div>
        </div>    
      </main>
    </div>
  );
}
