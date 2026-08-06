import Header from "@/components/Header";
import Image from "next/image";
import { promises as fs } from 'fs';

export default async function officer({ params }) {
    // Get url param
    const {officer} = await params;

    // Get officers data from json db
    const fileContents = await fs.readFile('./data/officers.json', 'utf8');
    // Get the target officer
    const TargetOfficer = JSON.parse(fileContents)[0].officers.find(o => o.abbr === officer);

    // Get bios data from json db
    const fileContents2 = await fs.readFile('./data/officer_bios.json', 'utf8');
    // Get the target officer's bio
    const TargetBio = JSON.parse(fileContents2).find(bio => bio.officer === TargetOfficer.id).bio;
    
    // Get interview data from json db
    const fileContents3 = await fs.readFile('./data/officer_interviews.json', 'utf8');
    // Get target officer's interview
    const TargetInterviewResults = JSON.parse(fileContents3).find(interview => interview.officer === TargetOfficer.id).interview;

    return (
        <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
        <Header page={"home"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start">
            
            {/* Display content */}
            <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-start h-full text-black bg-white md:py-30 gap-x-20 md:px-20">
                <Image
                    className="pb-5"
                    src={`/officers/${TargetOfficer.abbr}.jpg`}
                    alt={TargetOfficer.abbr}
                    width={450}
                    height={600}
                    priority
                />
                <div className="text-left flex flex-col justify-center items-center md:items-start gap-y-3 px-5 md:px-0 md:w-[70%] pb-10 md:pb-0">
                    {/* Name + title */}
                    <h1 className="text-3xl md:text-4xl font-bold">{TargetOfficer.name}</h1>
                    <p className="text-2xl md:text-3xl font-bold">{TargetOfficer.position}</p>
                    
                    {/* Bio */}
                    <p className="text-lg md:text-xl md:pt-5">{TargetBio}</p>
                    
                    {/* Interview questions */}
                    {TargetInterviewResults.map((q, index) => (
                        <div key={index}>
                            <p className="text-lg md:text-xl font-bold">{q.prompt}</p>
                            <p className="text-lg md:text-xl">{q.response}</p>
                        </div>
                    ))}
                </div>
            
            </div> 

        </main>
        </div>
    );
}
