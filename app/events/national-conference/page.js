import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import QuickLink from "@/components/QuickLink";

export default function NationalConference() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>

      <main className="flex flex-1 w-full flex-col items-center bg-white"> 
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">National Conference</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
           "Unity Through Community!"
          </p>
        </div>

        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
            <div>
                <div className="flex flex-col p-6">
                    <p className="text-xl text-[#072c5c] leading-relaxed">
                        The National TSA Conference is the highlight of every year for TSA members. At the National Conference, student members compete in the highest level of competition in Technology Student Association. The National Conference is hosted in the Summer each year, and competitors qualify to attend through the State Championship. Aside from competing on a national stage, the conference is packed with competitive events and challenging activities that foster personal growth and leadership development.
                    </p>
                </div>
            </div>
        </div>

        <div className="w-full max-w-7xl px-6 flex flex-col gap-y-14">
            <div>
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">2026 TSA National Conference</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The 2026 TSA National Conference is complete! This year's theme was "Unity Through Community!"
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                The TSA National Conference was held at the Gaylord National Resort & Convention Center in Washington, DC on June 22-26.
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            <p className="text-xl text-[#072c5c] leading-relaxed">
                                Congrats to all Missouri competitors, finalists, and award recipients!
                            </p>
                        </div>
                        <div className="flex flex-col p-6 gap-y-5">
                            <Link href="/resources/gallery" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                                Photo Gallery
                            </Link>
                            {/* <Link href="/resources/winners" className="text-xl text-[#072c5c] leading-relaxed text-blue-500 underline">
                                Championship Results
                            </Link> */}
                        </div>
                    </div>

                    <Image
                        className="md:w-[50%] h-fit"
                        src="/nationals2.jpg"
                        alt="Next.js logo"
                        width={300}
                        height={20}
                        priority
                    />
                </div>
            </div>

            <div className="pb-20">
                <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                    <span className="text-2xl"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Conference Details</h2>
                </div>

                <div className="grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-5 py-10">
                    <QuickLink target={"_blank"} link={"https://tsaweb.org/conferences/2026-national-tsa-conference"} label={"TSA National Conference Details"}></QuickLink>
                </div>
            </div>
        </div>  
      </main>
    </div>
  );
}
