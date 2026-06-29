import Header from "@/components/Header";
import OfficerDisp from "@/components/OfficerDisp";

export default function Officers20242025() {
  const StateOfficers = [
    {img:"", name:"Rithvika Thunuguntla", position:"President", school:"Parkway Central High", email:"motsapresrithvika@gmail.com", link:"#"},
    {img:"", name:"Henry Hare", position:"Vice President", school:"North Kansas City High", email:"motsavphenry@gmail.com", link:"#"},
    {img:"", name:"Quinn Schulte", position:"Secretary", school:"Liberty High", email:"motsasecquinn@gmail.com", link:"#"},
    {img:"", name:"Aidan Wang", position:"Treasurer", school:"Liberty High", email:"motsatsraidan@gmail.com", link:"#"},
    {img:"", name:"Andrew Foreman", position:"Reporter", school:"Holt High", email:"motsarepandrew@gmail.com", link:"#"},
    {img:"", name:"Joseph Mocca", position:"Sergeant-At-Arms", school:"Holt High", email:"motsasargjoseph@gmail.com", link:"#"},
  ];

  const RegionalOfficers = [
   ];

  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"alumni"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start">
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white pb-10 md:py-20">
          <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">Past Officers - 2024-2025</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-6 md:py-12 gap-y-5 md:gap-y-10">
            <h1 className="text-2xl md:text-4xl text-left px-[5%] pt-5 font-bold underline">State Officers</h1>
            <div className="grid md:grid-cols-2 gap-10 md:gap-25 items-center justify-center md:w-[80%]">
              {StateOfficers.map((officer, index) => (
                <OfficerDisp key={index} img={officer.img} name={officer.name} position={officer.position} school={officer.school} email={officer.email} link={officer.link}></OfficerDisp>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl text-left px-[5%] pt-15 font-bold underline"></h1>
            <div className="grid md:grid-cols-2 gap-10 md:gap-25 items-center justify-center md:w-[80%]">
              {RegionalOfficers.map((officer, index) => (
                <OfficerDisp key={index} img={officer.img} name={officer.name} position={officer.position} school={officer.school} email={officer.email} link={officer.link}></OfficerDisp>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}