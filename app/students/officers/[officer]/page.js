"use client";
import { getData } from "@/api/db";
import { useParams } from "next/navigation";
import GrayButton from "@/components/GrayButton";
import Header from "@/components/Header";

export default async function officer() {
    const params = useParams();
    const {officer} = params;
    const version = await getData(officer);

    return (
        <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
        <Header page={"home"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start">
            
            <div className="flex flex-col w-full justify-between items-center h-full text-black bg-white">
            <h1 className="text-3xl md:text-5xl px-[5%] pt-10 font-bold text-center">{officer} and {version}</h1>
            <div className="md:grid md:grid-cols-2 w-full justify-center items-center h-full md:h-100 px-6 py-3 md:px-10 md:py-12 gap-x-5 gap-y-5">
                <GrayButton height="full" link="/students/apply" label={"2026-2027 State Officer Application Available"}></GrayButton>
                <GrayButton height="full" link="/events/workshops" label={"Competitive Events Workshop Registration Deadline: November 1, 2025"}></GrayButton>
                <GrayButton height="full" link="/students/officers" label={"Meet your 2025-2026 State Officer Team"}></GrayButton>
                <GrayButton height="full" link="/events/calendar" label={"2025-2026 Calendar of Events Released"}></GrayButton>
                <GrayButton height="full" link="/advisors/forms" label={"2025-2026 Conference Forms Released"}></GrayButton>
            </div>
            </div> 

        </main>
        </div>
    );
}
