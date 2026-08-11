import Header from "@/components/Header";
import OfficerDisp from "@/components/OfficerDisp";
import { promises as fs } from 'fs';

export default async function Officers() {

    // Get data from json db
    const fileContents = await fs.readFile('./data/officers.json', 'utf8');
    const officers = JSON.parse(fileContents)[0].officers;

    // Sort officers
    let StateOfficers = [];
    let RegionalOfficers = [];
    for (let o of officers) {
        // add image and link fields to each officer
        o.img = `/officers/${o.abbr}.jpg`;
        o.link = `/students/officers/${o.abbr}`;

        // Add officer to corresponding list
        if (!o.position.includes("VP")) {
            StateOfficers.push(o)
        } else {
            RegionalOfficers.push(o);
        }
    }

    return (
        <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
        <Header page={"students"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
            <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white pb-10 md:py-20">
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">Meet Your 2026-2027 Student Officer Team</h1>
                
                {/* Officers list */}
                <div className="flex flex-col w-full justify-between items-center h-full px-10 py-6 md:py-12 gap-y-5 md:gap-y-10">             
                    {/* State Officers */}
                    <h1 className="text-2xl md:text-4xl text-left px-[5%] pt-5 font-bold underline">State Officers</h1>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-25 items-center justify-center md:w-[80%]">
                        {StateOfficers.map((officer, index) => (
                            <OfficerDisp key={index} img={officer.img} name={officer.name} position={officer.position} school={officer.school} email={officer.email} link={officer.link}></OfficerDisp>

                        ))}
                    </div>

                    {/* Regional VPs */}
                    <h1 className="text-2xl md:text-4xl text-left px-[5%] pt-15 font-bold underline">Regional Officers</h1>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-25 items-center justify-center md:w-[80%]">
                        {RegionalOfficers.map((officer, index) => (
                            <OfficerDisp key={index} img={officer.img} name={officer.name} position={officer.position} school={officer.school} email={officer.email} link={officer.link}></OfficerDisp>

                        ))}
                    </div>
                </div>

                {/* Officer application link */}
                <a href="/students/apply" className="bg-red-500 md:w-[20%] h-10 px-5 md:px-0 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-sm md:text-xl">Apply for Office</h1>
                </a>
            </div>    
        </main>
        </div>
    );
}
