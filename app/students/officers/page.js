import Header from "@/components/Header";
import OfficerDisp from "@/components/OfficerDisp";

export default function Officers() {
    const StateOfficers = [
        {img:"/officers/president.jpg", name:"Axumait Yared", position:"President", school:"Staley High", email:"motsaaxumpresident@gmail.com", link:"/students/officers/president"},
        {img:"/officers/vp.jpg", name:"Sabrina Bush", position:"Vice President", school:"Hazelwood West High", email:"motsasabrinavp@gmail.com", link:"/students/officers/vp"},
        {img:"/officers/secretary.jpg", name:"Ayse Demir", position:"Secretary", school:"Staley High", email:"motsaaysesecretary@gmail.com", link:"/students/officers/secretary"},
        {img:"/officers/treasurer.jpg", name:"Tracy Do", position:"Treasurer", school:"Kickapoo High", email:"motsatracytreasurer@gmail.com", link:"/students/officers/treasurer"},
        {img:"/officers/reporter.jpg", name:"Manya Karthik", position:"Reporter", school:"Liberty Wentzville High", email:"motsamanyareporter@gmail.com", link:"/students/officers/reporter"},
        {img:"/officers/sergeant.jpg", name:"Jason Kogbara", position:"Sergeant-At-Arms", school:"Hazelwood Central High", email:"motsajasonsergeant@gmail.com", link:"/students/officers/sergeant"}
    ];

    const RegionalOfficers = [
        {img:"/officers/nwvp.jpg", name:"Riley Pederson", position:"Northwest Regional VP", school:"Staley High", email:"motsarileynwvp@gmail.com", link:"/students/officers/nwvp"},
        {img:"/officers/nevp.jpg", name:"Laila Holmes", position:"Northeast Regional VP", school:"Holt High", email:"motsalailanevp@gmail.com", link:"/students/officers/nevp"},
        {img:"/officers/swvp.jpg", name:"David Figueroa", position:"Southwest Regional VP", school:"Carl Junction High", email:"motsadavidswvp@gmail.com", link:"/students/officers/swvp"},
        {img:"/officers/sevp.jpg", name:"Nuriya Hussaini", position:"Southeast Regional VP", school:"Oakville High", email:"motsanuriyasevp@gmail.com", link:"/students/officers/sevp"}
    ];

    return (
        <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
        <Header page={"students"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
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
