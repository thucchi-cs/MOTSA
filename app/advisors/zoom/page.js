import Header from "@/components/Header";

export default function Zoom() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
        <Header page={"advisors"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
            <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
                <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">Monthly Advisors Zoom Meetings</h1>
                <div className="flex flex-col w-full justify-between items-center h-full md:px-10 py-12 gap-y-10">
                    <p className="text-lg md:text-2xl md:w-[70%] px-6 md:px-15 leading-relaxed">
                        To provide more support and smoother communications between the TSA chapters within Missouri, chapter advisors and members are welcome to join our monthly Zoom meetings to discuss any topics related to Missouri TSA.
                    </p>
                    <p className="text-lg md:text-2xl md:w-[70%] px-6 md:px-15 leading-relaxed">
                        Feel free to join if you need to ask questions, review event details, provide feedback, or discuss any other relevant topics.
                    </p>
                    <div className="flex flex-col w-full items-center justify-center h-full gap-y-3">
                        <p className="text-lg md:text-2xl md:w-[70%] w-[90%] px-6 md:px-15 leading-relaxed font-bold">
                            Meetings details:
                        </p>
                        <li className="text-lg md:text-2xl md:w-[50%] w-[80%] px-6 leading-relaxed">
                            Hosted by State Advisor Byekwaso Gilbert
                        </li>
                        <li className="text-lg md:text-2xl md:w-[50%] w-[80%] px-6 leading-relaxed">
                            First Thursday of every month
                        </li>
                        <li className="text-lg md:text-2xl md:w-[50%] w-[80%] px-6 leading-relaxed">
                            3:30pm - 4:30pm
                        </li>
                        <li className="text-lg md:text-2xl md:w-[50%] w-[80%] px-6 leading-relaxed">
                            Next meeting: Thursday September 3rd, 2026
                        </li>
                    </div>
                    <a href="https://us05web.zoom.us/j/88166985442?pwd=rYU3iDUJO7K3T0QWZMtmqWphhkNboh.1" target="_blank" className="bg-blue-500 md:w-[20%] h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-blue-600 cursor-pointer">
                        <h1 className="text-sm md:text-xl">Join Meeting &#8594;</h1>
                    </a>
                </div>
            </div>    
        </main>
    </div>
  );
}
