import Image from "next/image";
import HeaderSubmenu from "./HeaderSubmenu";

export default function Header({ page }) {
    const aboutSubPages = [
        {label: "Chapter map", page: "/about/chapter-map"},
        {label: "Regional map", page: "/about/regional-map"},
        {label: "History", page: "/about/history"},
        {label: "TSA mission, creed, & motto", page: "/about/tsa-mission"}
    ];

    const studentsSubPages = [
        {label: "Apply for office", page: "/students/apply"},
        {label: "Scholarships", page: "/students/scholarships"},
        {label: "National TSA Week", page: "/students/national-tsa-week"},
        {label: "Dress code", page: "/students/dress-code"},
        {label: "State officer team", page: "/students/officers"}
    ];

    const advisorsSubPages = [
        {label: "Competitive events info", page: "/advisors/competitive-info"},
        {label: "Conference forms", page: "/advisors/forms"},
        {label: "Starting a chapter", page: "/advisors/start-a-chapter"},
        {label: "Affiliation information", page: "/advisors/affiliation"}    
    ];

    const eventsSubPages = [
        {label: "Competitive events workshops", page: "/events/workshops"},
        {label: "Fall Leadership Conference", page: "/events/flc"},
        {label: "Regional conferences", page: "/events/regional-conferences"},
        {label: "State Championships", page: "/events/scc"},
        {label: "National Conference", page: "/events/national-conference"}
    ];

    return (
        <header className="dark:bg-[#030422] flex flex-row items-center justify-between font-sans w-full max-h-50">
            <a className="flex flex-row items-center w-[30%] justify-center" href="/">
            <Image className="py-3" src="/motsalogo.png" alt="Next.js logo" width={130} height={20} priority/>
            </a>
            <div className="flex flex-row items-center w-full justify-end gap-15 px-20">
            <div className="relative group">
                <a className={"text-2xl font-sans transition-transform duration-300 hover:underline " + ((page==="about") ? "text-red-500": "text-zinc-50")} href="/about">About</a>
                <HeaderSubmenu pages={aboutSubPages}></HeaderSubmenu>
            </div>
            <div className="relative group">
                <a className={"text-2xl font-sans transition-transform duration-300 hover:underline " + ((page==="students") ? "text-red-500": "text-zinc-50")} href="/students">Students</a>
                <HeaderSubmenu pages={studentsSubPages}></HeaderSubmenu>
            </div>
            <div className="relative group">
                <a className={"text-2xl font-sans transition-transform duration-300 hover:underline " + ((page==="advisors") ? "text-red-500": "text-zinc-50")} href="/advisors">Advisors</a>
                <HeaderSubmenu pages={advisorsSubPages}></HeaderSubmenu>
            </div>
            <div className="relative group">
                <a className={"text-2xl font-sans transition-transform duration-300 hover:underline " + ((page==="events") ? "text-red-500": "text-zinc-50")} href="/events">Events</a>
                <HeaderSubmenu pages={eventsSubPages}></HeaderSubmenu>
            </div>
            <a className={"text-2xl font-sans transition-transform duration-300 hover:underline " + ((page==="resources") ? "text-red-500": "text-zinc-50")} href="/resources">Resources</a>
            <a className={"text-2xl font-sans transition-transform duration-300 hover:underline " + ((page==="contact") ? "text-red-500": "text-zinc-50")} href="/contact">Contact</a>
            </div>
        </header>
    );
}