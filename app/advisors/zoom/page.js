import Header from "@/components/Header";

export default function Zoom() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
        <Header page={"advisors"}></Header>
        <main className="flex flex-1 w-full flex-col items-center bg-white"> 
            {/* Page header section */}
            <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Monthly Advisors Zoom Meetings</h1>
                <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
                    Feel free to join if you need to ask questions, review event details, provide feedback, or discuss any other relevant topics.
                </p>
            </div>

            {/* Info section */}
            <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14 text-[#072c5c]">

                {/* Summary section */}
                <div>
                    <div className="flex flex-col p-6">
                        <p className="text-xl text-[#072c5c] leading-relaxed">To provide more support and smoother communications between the TSA chapters within Missouri, chapter advisors and members are welcome to join our monthly Zoom meetings to discuss any topics related to Missouri TSA.</p>
                    </div>
                </div>

                {/* Details */}
                <div>
                    <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                        <span className="text-2xl"></span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">Meeting Details</h2>
                    </div>
                    <div className="flex flex-col p-6">
                        <p className="text-xl text-[#072c5c] leading-relaxed">Hosted by State Advisor Byekwaso Gilbert</p>
                    </div>
                    <div className="flex flex-col p-6">
                        <p className="text-xl text-[#072c5c] leading-relaxed">First Thursday of every month</p>
                    </div>
                    <div className="flex flex-col p-6">
                        <p className="text-xl text-[#072c5c] leading-relaxed">3:30pm - 4:30pm</p>
                    </div>
                    <div className="flex flex-col p-6">
                        <p className="text-xl text-[#072c5c] leading-relaxed">Next meeting: Thursday September 3rd, 2026</p>
                    </div>
                </div>

                {/* Zoom link */}
                <a href="https://us05web.zoom.us/j/88166985442?pwd=rYU3iDUJO7K3T0QWZMtmqWphhkNboh.1" target="_blank" className="bg-blue-500 h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-blue-600 cursor-pointer">
                    <h1 className="text-sm md:text-xl">Join Meeting &#8594;</h1>
                </a>
            </div>
        </main>
    </div>
  );
}
