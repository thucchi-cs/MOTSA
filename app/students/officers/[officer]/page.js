import { sql } from "@/lib/db";
import Header from "@/components/Header";
import Image from "next/image";

export default async function officer({ params }) {
    const {officer} = await params;
    const results = await sql`SELECT * FROM officers WHERE abbr=${officer}`;
    const data = results[0];
    const id = data.id;

    // query officer bio
    const bioResults = await sql`SELECT * FROM officer_bios WHERE officer=${id}`;
    let bio = ""
    if (bioResults.length > 0) {
        bio = bioResults[0].bio;
    }

    // query officer interviews
    let interviewResults = await sql`SELECT * FROM officer_responses INNER JOIN officer_prompts ON officer_responses.prompt=officer_prompts.id WHERE officer_responses.officer=${id}`;
    if (interviewResults.length <= 0) {
        interviewResults = [{prompt: "", response: ""}]
    }

    return (
        <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
        <Header page={"home"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start">
            
            <div className="flex flex-row w-full justify-center items-start h-full text-black bg-white py-30 gap-x-20 px-20">
                <Image
                    className="pb-5"
                    src={`/officers/${data.abbr}.webp`}
                    alt="Next.js logo"
                    width={450}
                    height={600}
                    priority
                />
                <div className="text-left flex flex-col justify-center items-start gap-y-3 w-[70%]">
                    <h1 className="text-3xl md:text-4xl font-bold">{data.name}</h1>
                    <p className="text-3xl md:text-3xl font-bold">{data.position}</p>
                    <p className="text-3xl md:text-xl pt-5">{bio}</p>
                    {interviewResults.map((q, index) => (
                        <div key={index}>
                            <p className="text-3xl md:text-xl font-bold">{q.prompt}</p>
                            <p className="text-3xl md:text-xl">{q.response}</p>
                        </div>
                    ))}
                </div>
            
            </div> 

        </main>
        </div>
    );
}
