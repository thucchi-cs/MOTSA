import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-20">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Affiliation Information</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-12 gap-y-10">
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
                TSA membership runs for each school year.  The term of the 2025-2026 TSA membership begins when a chapter is affiliated, and ends at the conclusion of the 2026 National TSA Conference on June 26th, 2026. TSA offers three, curriculum-integrated membership programs. Chapters choose the program that works best for them:
            </p>
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
                <strong>Red Chapter Affiliation Program (Red CAP):</strong> A chapter affiliates up to 10 members by paying a flat fee (additional members may be added during the year for a fee). The membership fee for Red CAP is $120 at the national level, plus $70 state dues.
            </p>
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
                <strong>White Chapter Affiliation Program (White CAP):</strong> A chapter affiliates 11 or more members by paying a per member fee for state and national dues. The membership fee for White CAP is $12 per member at the national level, plus $7 state dues.
            </p>
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
                <strong>Blue Chapter Affiliation Program (Blue CAP):</strong> A chapter affiliates an unlimited number of members in a school for a flat fee. This option is popular among chapters where students rotate through a STEM class for a portion of the year to enable all students to be members. The membership fee for Blue CAP is $400 at the national level, plus $200 state dues.
            </p>
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
                You can find out more information about affiliation and dues at <a href="https://tsaweb.org/membership/affiliation-and-dues" target="_blank" className="inline underline">Affiliation and Dues (tsaweb.org)</a>. You can also contact the Missouri TSA State Advisor, Byekwaso Gilbert, at 573-751-7764 or byekwaso.gilbert@dese.mo.gov with any questions.
            </p>

            <a href="https://motsaweb.org/wp-content/uploads/2021/09/6-tsa-chapter-advisor-manual.pdf" target="_blank" className="bg-red-500 w-[50%] h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                <h1 className="text-xl">TSA Membership System Chapter Advisor Instructions {"->"}</h1>
            </a>

          </div>
        </div>    
      </main>
    </div>
  );
}
