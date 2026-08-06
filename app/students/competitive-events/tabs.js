"use client";

import { useState } from "react";

export default function Tabs({ hsEvents, msEvents}) {

    // Default tab - hs
    const [events, setEvents] = useState("high");

    return (
        <div className="flex flex-col w-full justify-center items-center h-full text-[#040531] bg-white py-10 md:py-15">
            {/* Tab buttons */}
            <div className="flex flex-row w-[80%] items-center justify-center">
                <button className="flex flex-col items-center justify-center w-full cursor-pointer" onClick={() => setEvents("high")}>
                    <h1 className={"text-md md:text-4xl px-[5%] md:pt-10 font-bold text-center " + ((events === "high") ? "text-black" : "text-zinc-500")}>High School Events (40)</h1>
                    <hr className={"w-full h-1 mt-3 " + ((events==="high") ? "bg-blue-500 border-blue-500": "bg-zinc-300 border-zinc-300")}></hr>
                </button>
                <button className="flex flex-col items-center justify-center w-full cursor-pointer" onClick={() => setEvents("middle")}>
                    <h1 className={"text-md md:text-4xl px-[5%] md:pt-10 font-bold text-center " + ((events === "middle") ? "text-black" : "text-zinc-500")}>Middle School Events (37)</h1>
                    <hr className={"w-full h-1 mt-3 " + ((events==="middle") ? "bg-blue-500 border-blue-500": "bg-zinc-300 border-zinc-300")}></hr>
                </button>
            </div>

            {/* HS content */}
            {(events === "high") && 
            <>
                <div className="grid grid-cols-2 md:grid-cols-3 w-[90%] md:place-items-center text-left md:text-center gap-y-15 py-10 md:py-20 gap-x-5 md:gap-x-0">
                {hsEvents.map((item, index) => (
                    <a href={`/students/competitive-events/hs/${item.rubric.slice(0,-4)}-${item.id}`} key={index} className="whitespace-pre-wrap text-[15px] md:text-2xl leading-relaxed hover:underline hover:cursor-pointer">{`${item.title}`}</a> 
                ))}  
                </div>
            </>
            }

            {/* MS content */}
            {(events === "middle") && 
            <>
                <div className="grid grid-cols-2 md:grid-cols-3 w-[90%] md:place-items-center text-left md:text-center gap-y-15 py-10 md:py-20 gap-x-5 md:gap-x-0">
                {msEvents.map((item, index) => (
                    <a href={`/students/competitive-events/ms/${item.rubric.slice(0,-4)}-${item.id}`} key={index} className="whitespace-pre-wrap text-[15px] md:text-2xl leading-relaxed hover:underline hover:cursor-pointer">{`${item.title}`}</a> 
                ))}  
                </div>
            </>
            }
        </div>  
  );
}
