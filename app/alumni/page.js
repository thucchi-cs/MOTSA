import Header from "@/components/Header";
import MemberDisp from "@/components/MemberDisp";
import { sql } from "@/lib/db";

export default async function Alumni() {

  const years = await sql `SELECT DISTINCT year_elected FROM officers WHERE year_elected<26 ORDER BY year_elected DESC`;
  console.log(years);
  const allOfficers = await sql `SELECT * FROM officers WHERE year_elected<26 ORDER BY id`;
  let pastOfficers = [];
  for (const year of years) {
    pastOfficers.push({year:year.year_elected, officers:allOfficers.filter(o => o.year_elected === year.year_elected)});
  }
  console.log(pastOfficers);
  for (const year of pastOfficers) {
    console.log(year.officers)
  }

  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"alumni"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Alumni</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            All your past Student State Officers since 2024-2025
          </p>
        </div>

        <div className="w-full max-w-6xl px-6 py-14 flex flex-col gap-y-14">
          {pastOfficers.map((year, index) => (
            <div key={index} className="flex flex-col w-full justify-center items-center h-full px-10 py-6 gap-y-5 md:gap-y-10">
              <h1 className="text-2xl md:text-4xl text-center font-bold underline text-[#0b4188]">{`20${year.year}-20${parseInt(year.year)+1}`}</h1>
              <div className="md:grid md:grid-cols-2 gap-10 md:gap-25 items-center justify-center md:w-[80%]">
                {year.officers.map((officer, index) => (
                  <MemberDisp key={index} name={officer.name} line1={officer.position} line2={officer.school}></MemberDisp>
                ))}
              </div>
            </div>
          ))}
        </div>  
      </main>
    </div>
  );
}