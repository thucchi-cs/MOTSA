"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderSubmenu from "./HeaderSubmenu";

export default function Header({ page }) {
    const aboutSubPages = [
        {label: "History", page: "/about/history"},
        {label: "TSA Mission, Creed, & Motto", page: "/about/tsa-mission"},
        {label: "Chapter Map", page: "/about/chapter-map"},
        {label: "Regional Map", page: "/about/regional-map"}
    ];

    const studentsSubPages = [
        {label: "Competitive Events", page: "/students/competitive-events"},
        {label: "Scholarships", page: "/students/scholarships"},
        {label: "Dress Code", page: "/students/dress-code"},
        {label: "Degree Program", page: "/students/degree"},
        {label: "State Officer Team", page: "/students/officers"},
        {label: "Apply for Office", page: "/students/apply"}
    ];

    const advisorsSubPages = [
        {label: "Conference Forms", page: "/advisors/forms"},
        {label: "Starting a Chapter", page: "/advisors/start-a-chapter"},
        {label: "Chapter Resources", page: "/advisors/resources"},
        {label: "Affiliation Information", page: "/advisors/affiliation"},  
        {label: "Monthly Zoom Meetings", page: "/advisors/zoom"}    
    ];

    const eventsSubPages = [
        {label: "Calendar", page: "/events/calendar"},
        {label: "State Championships", page: "/events/scc"},
        {label: "Fall Leadership Conference", page: "/events/flc"},
        {label: "Competitive Events Workshops", page: "/events/workshops"},
        {label: "Regional Conferences", page: "/events/regional-conferences"},
        {label: "National Conference", page: "/events/national-conference"},
        {label: "National TSA Week", page: "/events/national-tsa-week"}
    ];

    const resourcesSubPages = [
        {label: "Dress Code", page: "/students/dress-code"},
        {label: "Competitive Events", page: "/students/competitive-events"},
        {label: "Degree Program", page: "/students/degree"},
        {label: "Past Winners", page: "/resources/winners"},
        {label: "Outstanding Awards", page: "/resources/awards"},
        {label: "Newsletter", page: "/resources/newsletter"},
        {label: "Billing/Late Fee", page: "/resources/billing"},
        {label: "Bylaws", page: "/resources/bylaws"},
        {label: "Calendar", page: "/events/calendar"},
        {label: "Gallery", page: "/resources/gallery"},
        {label: "Chapter Resources & Tips", page: "/advisors/resources"}
    ];

    const [mobileOpen, setMobileOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [studentsOpen, setStudentsOpen] = useState(false);
    const [advisorsOpen, setAdvisorsOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    return (
        <header className="bg-[#072c5c] flex flex-row items-center justify-center font-sans w-full gap-[40%] md:gap-0">
            <a className="flex flex-row items-center w-[20%] md:w-[30%] justify-center" href="/">
                <Image className="py-3 md:w-[130px]" src="/motsalogo.png" alt="Next.js logo" width={80} height={20} priority/>
            </a>

            <div className="hidden md:flex flex-row items-center w-full justify-end gap-15 px-20">
                <div className="relative group">
                    <a className={"text-xl font-sans transition-transform duration-300 hover:underline " + ((page==="about") ? "text-red-500": "text-zinc-50")} href="/about">About</a>
                    <HeaderSubmenu pages={aboutSubPages}></HeaderSubmenu>
                </div>
                <div className="relative group">
                    <a className={"text-xl font-sans transition-transform duration-300 hover:underline " + ((page==="students") ? "text-red-500": "text-zinc-50")} href="/students">Students</a>
                    <HeaderSubmenu pages={studentsSubPages}></HeaderSubmenu>
                </div>
                <div className="relative group">
                    <a className={"text-xl font-sans transition-transform duration-300 hover:underline " + ((page==="advisors") ? "text-red-500": "text-zinc-50")} href="/advisors">Advisors</a>
                    <HeaderSubmenu pages={advisorsSubPages}></HeaderSubmenu>
                </div>
                <a className={"text-xl font-sans transition-transform duration-300 hover:underline " + ((page==="alumni") ? "text-red-500": "text-zinc-50")} href="/alumni">Alumni</a>
                <div className="relative group">
                    <a className={"text-xl font-sans transition-transform duration-300 hover:underline " + ((page==="events") ? "text-red-500": "text-zinc-50")} href="/events">Conferences & Events</a>
                    <HeaderSubmenu pages={eventsSubPages}></HeaderSubmenu>
                </div>
                <div className="relative group">
                    <a className={"text-xl font-sans transition-transform duration-300 hover:underline " + ((page==="resources") ? "text-red-500": "text-zinc-50")} href="/resources">Resources</a>
                    <HeaderSubmenu pages={resourcesSubPages}></HeaderSubmenu>
                </div>
                <a className={"text-xl font-sans transition-transform duration-300 hover:underline " + ((page==="contact") ? "text-red-500": "text-zinc-50")} href="/contact">Contact</a>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-4 text-zinc-50 w-[20%] z-99">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            {mobileOpen && (
                <div className="md:hidden flex z-90 absolute flex-col px-6 h-full gap-4 bg-black/80 w-full justify-start pt-[30vh] items-center top-0 overflow-y-auto">
                    <div className="flex flex-col w-full gap-0 justify-center items-center">
                        <div>
                            <a href="/about" className={"text-xl "+ ((page==="about") ? "text-red-500": "text-zinc-50")}>About</a>
                            <p className="inline text-xl" onClick={() => setAboutOpen(!aboutOpen)}> &#x25BE; </p>
                        </div>
                        {aboutOpen && (
                            aboutSubPages.map((page, index) => (
                                <a href={page.page} key={index} className={"text-md "+ ((page==="about") ? "text-red-500": "text-zinc-50")}>
                                    {page.label}
                                </a>
                            ))
                        )}
                    </div>
                    
                    <div className="flex flex-col w-full gap-0 justify-center items-center">
                        <div>
                            <a href="/students" className={"inline text-xl "+ ((page==="students") ? "text-red-500": "text-zinc-50")}>Students</a>
                            <p className="inline text-xl" onClick={() => setStudentsOpen(!studentsOpen)}> &#x25BE; </p>
                        </div>
                        {studentsOpen && (
                            studentsSubPages.map((page, index) => (
                                <a href={page.page} key={index} className={"text-md "+ ((page==="students") ? "text-red-500": "text-zinc-50")}>
                                    {page.label}
                                </a>
                            ))
                        )}
                    </div>

                    <div className="flex flex-col w-full gap-0 justify-center items-center">
                        <div>
                            <a href="/advisors" className={"text-xl "+ ((page==="advisors") ? "text-red-500": "text-zinc-50")}>Advisors</a>
                            <p className="inline text-xl" onClick={() => setAdvisorsOpen(!advisorsOpen)}> &#x25BE; </p>
                        </div>
                        {advisorsOpen && (
                            advisorsSubPages.map((page, index) => (
                                <a href={page.page} key={index} className={"text-md "+ ((page==="advisors") ? "text-red-500": "text-zinc-50")}>
                                    {page.label}
                                </a>
                            ))
                        )}
                    </div>

                    <a href="/alumni" className={"text-xl "+ ((page==="alumni") ? "text-red-500": "text-zinc-50")}>
                        Alumni
                    </a>

                    <div className="flex flex-col w-full gap-0 justify-center items-center">
                        <div>
                            <a href="/events" className={"text-xl "+ ((page==="events") ? "text-red-500": "text-zinc-50")}>Conferences & Events</a>
                            <p className="inline text-xl" onClick={() => setEventsOpen(!eventsOpen)}> &#x25BE; </p>
                        </div>
                        {eventsOpen && (
                            eventsSubPages.map((page, index) => (
                                <a href={page.page} key={index} className={"text-md "+ ((page==="events") ? "text-red-500": "text-zinc-50")}>
                                    {page.label}
                                </a>
                            ))
                        )}
                    </div>


                    <div className="flex flex-col w-full gap-0 justify-center items-center">
                        <div>
                            <a href="/resources" className={"text-xl "+ ((page==="resources") ? "text-red-500": "text-zinc-50")}>Resources</a>
                            <p className="inline text-xl" onClick={() => setResourcesOpen(!resourcesOpen)}> &#x25BE; </p>
                        </div>
                        {resourcesOpen && (
                            resourcesSubPages.map((page, index) => (
                                <a href={page.page} key={index} className={"text-md "+ ((page==="resources") ? "text-red-500": "text-zinc-50")}>
                                    {page.label}
                                </a>
                            ))
                        )}
                    </div>

                    <a href="/contact" className={"text-xl "+ ((page==="contact") ? "text-red-500": "text-zinc-50")}>
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
}
