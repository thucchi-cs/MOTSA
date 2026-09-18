import Header from "@/components/Header";
import MemberDisp from "@/components/MemberDisp";
import { promises as fs } from 'fs';

export default async function Alumni() {

  // Get data from json db
  const fileContents = await fs.readFile('./data/officers.json', 'utf8');
  const officers = JSON.parse(fileContents);
  const pastOfficers = officers.filter(team => team.year_elected !== "26");

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
              <h1 className="text-2xl md:text-4xl text-center font-bold underline text-[#0b4188]">{`20${year.year_elected}-20${parseInt(year.year_elected)+1}`}</h1>
              <div className="md:grid md:grid-cols-2 gap-10 md:gap-15 items-center justify-center md:w-[70%]">
                {year.officers.map((officer, index) => (
                  <MemberDisp key={index} name={officer.name} lines={[officer.position, officer.school]}></MemberDisp>
                ))}
              </div>
            </div>
          ))}
        </div>  
      </main>
    </div>
  );
}