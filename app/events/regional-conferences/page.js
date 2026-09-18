"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";

export default function RegionalConferences() {
    // Default regiona tab - southwest
    const [conference, setConference] = useState("sw");

  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        {/* Page header section */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Regional Conferences</h1>
            <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
                Practice your competition skills before the State Championship!
            </p>
        </div>

        {/* Summary section */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        Aside from the State Championship in April, Missouri TSA offers Regional Championship Conferences in early Spring for participants to prepare and practice for their competitions. In the past, the Southwest region has consistently hosted a regional conference each year as a qualifying round for the State Championship. Missouri TSA is working towards bringing the regional conferences to the other three regions but as a practice round, not a qualifying round.
                    </p>
                </div>
            </div>
        </div>

        {/* Regions tabs */}
        <div className="flex flex-col w-full justify-center items-center h-full bg-white">
            {/* Tab buttons */}
            <div className="flex flex-row items-center justify-center max-w-[90%]">
                <button className="flex flex-col items-center justify-center w-fit cursor-pointer" onClick={() => setConference("nw")}>
                    <h1 className={"text-xs md:text-2xl px-[5%] md:pt-10 font-bold text-center " + ((conference === "nw") ? "text-black" : "text-zinc-500")}>Northwest Conference</h1>
                    <hr className={"w-full h-1 mt-3 " + ((conference==="nw") ? "bg-blue-500 border-blue-500": "bg-zinc-300 border-zinc-300")}></hr>
                </button>
                <button className="flex flex-col items-center justify-center w-fit cursor-pointer" onClick={() => setConference("ne")}>
                    <h1 className={"text-xs md:text-2xl px-[5%] md:pt-10 font-bold text-center " + ((conference === "ne") ? "text-black" : "text-zinc-500")}>Northeast Conference</h1>
                    <hr className={"w-full h-1 mt-3 " + ((conference==="ne") ? "bg-blue-500 border-blue-500": "bg-zinc-300 border-zinc-300")}></hr>
                </button>
                <button className="flex flex-col items-center justify-center w-fit cursor-pointer" onClick={() => setConference("sw")}>
                    <h1 className={"text-xs md:text-2xl px-[5%] md:pt-10 font-bold text-center " + ((conference === "sw") ? "text-black" : "text-zinc-500")}>Southwest Conference</h1>
                    <hr className={"w-full h-1 mt-3 " + ((conference==="sw") ? "bg-blue-500 border-blue-500": "bg-zinc-300 border-zinc-300")}></hr>
                </button>
                <button className="flex flex-col items-center justify-center w-fit cursor-pointer" onClick={() => setConference("se")}>
                    <h1 className={"text-xs md:text-2xl px-[5%] md:pt-10 font-bold text-center " + ((conference === "se") ? "text-black" : "text-zinc-500")}>Southeast Conference</h1>
                    <hr className={"w-full h-1 mt-3 " + ((conference==="se") ? "bg-blue-500 border-blue-500": "bg-zinc-300 border-zinc-300")}></hr>
                </button>
            </div>

            {/* Northwest content */}
            {(conference === "nw") && 
            <>
                <div className="w-full max-w-4xl px-6 flex flex-col gap-y-14 py-15">
                    <div>
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="flex flex-col">
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        The Northwest Conference will be a practice round of competitions for student competitors in the area before the State Championship.
                                    </p>
                                </div>
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        More information coming soon!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }

            {/* Northeast content */}
            {(conference === "ne") && 
            <>
                <div className="w-full max-w-4xl px-6 flex flex-col gap-y-14 py-15">
                    <div>
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="flex flex-col">
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        The Northeast Conference will be a practice round of competitions for student competitors in the area before the State Championship.
                                    </p>
                                </div>
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        More information coming soon!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }

            {/* Southwest content */}
            {(conference === "sw") && 
            <>
                <div className="w-full max-w-4xl px-6 flex flex-col gap-y-14 py-15">

                    <div>
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="flex flex-col">
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        The Southwest Conference is hosted by Springfield School District in Springfield, MO each year. It is the only regional conference that is a qualifying round where competitors must meet a certain criteria in their performance to qualify to attend the State Championship.
                                    </p>
                                </div>
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        The 2026 Southwest MO Conference was held on February 7th, 2026 at Jarrett STEAM Academy Springfield, MO.
                                    </p>
                                </div>
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        Thank you to all judges, volunteers, and event coordinators who made this event possible!
                                    </p>
                                </div>
                                <div className="flex flex-col p-6 gap-y-5">
                                    <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScZZp5H23GkWJCBhkkbYJJxrmdndv7UFKuurFPOaStAdaHUEg/viewform?usp=preview" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                                        Conference Interest Form (must be filled out to receive registration link)
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }

            {/* Southeast content */}
            {(conference === "se") && 
            <>
                <div className="w-full max-w-4xl px-6 flex flex-col gap-y-14 py-15">
                    <div>
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="flex flex-col">
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        The Southeast Conference will be a practice round of competitions for student competitors in the area before the State Championship.
                                    </p>
                                </div>
                                <div className="flex flex-col p-6">
                                    <p className="text-xl text-[#072c5c] leading-relaxed">
                                        More information coming soon!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>  
      </main>
    </div>
  );
}
