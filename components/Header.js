"use client";
import { useState } from "react";
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

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="bg-[#030422] flex flex-row items-center justify-center font-sans w-full gap-[40%] md:gap-0">
            <a className="flex flex-row items-center w-[20%] md:w-[30%] justify-center" href="/">
                <Image className="py-3 md:w-[130px]" src="/motsalogo.png" alt="Next.js logo" width={80} height={20} priority/>
            </a>

            <div className="hidden md:flex flex-row items-center w-full justify-end gap-15 px-20">
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

            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-4 text-zinc-50 w-[20%] z-99">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            {mobileOpen && (
                <div className="md:hidden flex z-90 absolute flex-col px-6 h-full gap-4 bg-black/80 w-full justify-center items-center top-0">
                    <a href="/about" className={"text-xl "+ ((page==="about") ? "text-red-500": "text-zinc-50")}>
                        About
                    </a>
                    
                    <div className="flex flex-col w-full gap-0 justify-center items-center">
                        <a href="/students" className={"text-xl "+ ((page==="students") ? "text-red-500": "text-zinc-50")}>
                            Students
                        </a>
                        <a href="/students" className={"text-md "+ ((page==="students") ? "text-red-500": "text-zinc-50")}>
                            Students
                        </a>
                    </div>

                    <a href="/advisors" className={"text-xl "+ ((page==="advisors") ? "text-red-500": "text-zinc-50")}>
                        Advisors
                    </a>

                    <a href="/events" className={"text-xl "+ ((page==="events") ? "text-red-500": "text-zinc-50")}>
                        Events
                    </a>

                    <a href="/resources" className={"text-xl "+ ((page==="resources") ? "text-red-500": "text-zinc-50")}>
                        Resources
                    </a>

                    <a href="/contact" className={"text-xl "+ ((page==="contact") ? "text-red-500": "text-zinc-50")}>
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
}