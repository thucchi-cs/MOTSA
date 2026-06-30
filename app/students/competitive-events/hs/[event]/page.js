import Header from "@/components/Header";
import { sql } from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HSEvents({ params }) {
  const { event } = await params;
  let eventURL;
  let id;
  if (parseInt(event.slice(-2))<0) {
    id = parseInt(event.slice(-1));
    eventURL = event.slice(0,-2);
  } else {
    id = parseInt(event.slice(-2));
    eventURL = event.slice(0,-3);
  }

  if (!id) {
    redirect('/students/competitive-events');
  }

  const results = await sql`SELECT * FROM events WHERE id=${id}`;
  const themeResults = await sql`SELECT * FROM event_themes WHERE event_id=${id}`;

  if (results.length == 0) {
    redirect('/students/competitive-events')
  }
  const info = results[0]
  if (info.rubric.slice(0,-4) !== eventURL) {
    redirect('/students/competitive-events')
  }

  let theme = false;
  let themeLink = false;
  if (themeResults.length > 0) {
    theme = themeResults[0]
    if (theme.theme.slice(0,8) ==="https://") {
        themeLink = true;
    }
  }


  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-center items-center h-full text-[#040531] bg-white py-10 md:py-10 px-8 md:px-0">
          <h1 className="text-2xl md:text-5xl px-[5%] md:pt-10 font-bold text-center">{info.title}</h1>

            <div className="flex flex-col md:px-20 w-full justify-center items-start h-full py-10 gap-y-5 md:gap-y-0">
                <h1 className="text-2xl md:text-5xl md:py-10 font-bold text-left">Overview</h1>
                <div className="md:grid md:grid-cols-[3fr_2fr] w-full gap-x-15">
                    <div className="flex flex-col justify-start items-start h-full md:gap-y-5">
                        <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap"><strong>Description:{'\n'}</strong>{info.descr}</p>
                        <Link target="_blank" href={`/rubrics/hs/${info.rubric}`}className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap text-blue-500 underline">Rubric & Guidelines</Link>
                    </div>
                    {theme &&
                        <>
                            {themeLink && 
                                <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap pt-5 md:pt-0"><strong>Theme:{'\n'}</strong><Link href={theme.theme} target="_blank" className="text-blue-500 underline">View full theme</Link></p>
                                
                            }
                            {!themeLink &&
                                <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap pt-5 md:pt-0"><strong>Theme:{'\n'}</strong>{theme.theme}</p>
                            }
                        </>
                    }
                </div>
            </div>

            <div className="flex flex-col md:px-20 w-full justify-center items-start h-full py-10 gap-y-5 md:gap-y-0">
                <h1 className="text-2xl md:text-5xl md:py-10 font-bold text-left">Event Submissions</h1>
                <div className="md:grid md:grid-cols-[3fr_2fr] w-full gap-x-15">
                    <div className="flex flex-col justify-start items-start h-full md:gap-y-5">
                        <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">Deadline: {info.deadline}</p>
                        <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap md:pt-5 font-bold">Submission Requirements:</p>
                        <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">Coming Soon</p>
                    </div>
                    <div className="flex flex-col justify-start items-start h-full gap-y-3 py-5 md:py-0">
                        <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">Preliminary Test: {info.test ? 'Yes' : 'No'}</p>
                        {info.test &&
                            <Link target="_blank" href="https://www.answerwrite.com/tsa/mo-s"className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap text-blue-500 underline">Take online test</Link>
                        }
                        <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">Pre-Submissions: {info.submission ? 'Yes' : 'No'}</p>
                        {info.submission &&
                            <Link target="_blank" href="https://judgepro.registermychapter.com/org/jpmo-vsc/conf/jpmo-slc/student"className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap text-blue-500 underline">Upload & Submit</Link>
                        }
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:px-20 w-full justify-center items-start h-full md:py-10">
                <h1 className="text-2xl md:text-5xl md:py-10 font-bold text-left">Past Winners (coming soon)</h1>
                <div className="md:grid md:grid-cols-4 w-full underline text-blue-500 gap-y-7">
                  {/* <Link href="#" className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">2026 First Place</Link>
                  <Link href="#" className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">2026 Second Place</Link>
                  <Link href="#" className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">2026 Fourth Place</Link>
                  <Link href="#" className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">2025 First Place</Link>
                  <Link href="#" className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">2025 Second Place</Link>
                  <Link href="#" className="text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">2024 First Place</Link> */}
                </div>
            </div>

        </div>
      </main>
    </div>
  );
}
