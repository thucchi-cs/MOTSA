import MemberDisp from "@/components/MemberDisp";
import Header from "@/components/Header";
import { promises as fs } from 'fs';

export default async function Board() {

  // Get data from json db
  const fileContents = await fs.readFile('./data/board.json', 'utf8');
  const board = JSON.parse(fileContents);
  const executives = board["executive"];
  const members = board["members"];

  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"about"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Board of Directors</h1>
        </div>

        {/* Info section */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          
          {/* Executive Committee */}
          <div>
            <div className="flex items-center mb-6 justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c] underline decoration-red-500 decoration-4 underline-offset-8">Executive Committee</h2>
            </div>
            <div className="md:grid md:grid-cols-2 text-center flex flex-col justify-center items-center h-full py-5 gap-y-10">
              {executives.map((member, index) => (
                <MemberDisp key={index} name={member.name} lines={[member.title, member.email]}></MemberDisp>
              ))}
            </div>
          </div>
          
          {/* Corporate Board Members */}
          <div>
            <div className="flex items-center mb-6 justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c] underline decoration-red-500 decoration-4 underline-offset-8">Corporate Board Members</h2>
            </div>
            <div className="md:grid md:grid-cols-2 text-center flex flex-col justify-center items-center h-full py-5 gap-y-10">
              {members.map((member, index) => (
                <MemberDisp key={index} name={member.name} lines={[member.title, member.email]}></MemberDisp>
              ))}
            </div>
          </div>
        </div>  
      </main>
    </div>
  );
}
