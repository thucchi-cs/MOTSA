import Header from "@/components/Header";
import { sql } from "@/lib/db";

export default async function HSEvents({ params }) {
  const { event } = await params;

  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"students"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-center items-center h-full text-[#040531] bg-white py-10 md:py-10">
          <h1 className="text-2xl md:text-5xl px-[5%] md:pt-10 font-bold text-center">{event}</h1>
        </div>
      </main>
    </div>
  );
}
