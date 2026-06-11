import Header from "@/components/Header";
import OfficerDisp from "@/components/OfficerDisp";

export default function Home() {
    const StateOfficers = [
        {img:"/president.webp", name:"Hailey Hunter", position:"President", school:"Carl Junction High", email:"motsapreshailey@gmail.com", link:"/students/officers/president"},
        {img:"/vp.webp", name:"Corinne Merrell", position:"Vice President", school:"Carl Junction High", email:"motsavpcorinne@gmail.com", link:"/students/officers/vp"},
        {img:"/secretary.webp", name:"Valeria Figueroa", position:"Secretary", school:"Carl Junction High", email:"motsasecvaleria@gmail.com", link:"/students/officers/secretary"},
        {img:"/treasurer.webp", name:"Truman Davis", position:"Treasurer", school:"Wentzville Holt High", email:"motsatsrtruman@gmail.com", link:"/students/officers/treasurer"},
        {img:"/reporter.webp", name:"Nandu Rakesh Nair", position:"Reporter", school:"Liberty High - Wentzville", email:"motsarepnandu@gmail.com", link:"/students/officers/reporter"},
        {img:"/sergeant.webp", name:"Angelica Hill", position:"Sergeant-At-Arms", school:"Troy Buchanan High", email:"motsasargangelica@gmail.com", link:"/students/officers/sergeant"}
    ];

    const RegionalOfficers = [
        {img:"/nwvp.webp", name:"Owen Duffy", position:"Northwest Regional VP", school:"Liberty High", email:"motsa@gmail.com", link:"/students/officers/nwvp"},
        {img:"/nevp.webp", name:"Aryan Patel", position:"Northeast Regional VP", school:"Liberty High - Wentzville", email:"motsa@gmail.com", link:"/students/officers/nevp"},
        {img:"/swvp.webp", name:"Colby Westhoff", position:"Southwest Regional VP", school:"Carl Junction High", email:"motsa@gmail.com", link:"/students/officers/swvp"},
        {img:"/sevp.webp", name:"Morgan Golden", position:"Southeast Regional VP", school:"Rolla High", email:"motsa@gmail.com", link:"/students/officers/sevp"}
    ];

    return (
        <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
        <Header page={"students"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
            <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white pb-10 md:py-20">
                <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">Meet Your 2025-2026 Student Officer Team</h1>
                <div className="flex flex-col w-full justify-between items-center h-full px-10 py-6 md:py-12 gap-y-5 md:gap-y-10">             
                    <h1 className="text-2xl md:text-4xl text-left px-[5%] pt-5 font-bold underline">State Officers</h1>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-25 items-center justify-center md:w-[80%]">
                        {StateOfficers.map((officer, index) => (
                            <OfficerDisp key={index} img={officer.img} name={officer.name} position={officer.position} school={officer.school} email={officer.email} link={officer.link}></OfficerDisp>

                        ))}
                    </div>
                    <h1 className="text-2xl md:text-4xl text-left px-[5%] pt-15 font-bold underline">Regional Officers</h1>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-25 items-center justify-center md:w-[80%]">
                        {RegionalOfficers.map((officer, index) => (
                            <OfficerDisp key={index} img={officer.img} name={officer.name} position={officer.position} school={officer.school} email={officer.email} link={officer.link}></OfficerDisp>

                        ))}
                    </div>
                </div>
                <a href="/students/apply" className="bg-red-500 md:w-[20%] h-10 px-5 md:px-0 rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-sm md:text-xl">Apply for Office</h1>
                </a>
            </div>    
        </main>
        </div>
    );
}
