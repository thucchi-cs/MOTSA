import Header from "@/components/Header";

const sections = [
  {
    title: "TSA Membership Overview",
    tips: [
      {
        heading: "Membership Term",
        body: "TSA membership runs for each school year. The term of the 2026-2027 TSA membership begins when a chapter is affiliated, and ends at the conclusion of the 2027 National TSA Conference on June 27th, 2027. Chapter Affiliation for the 2026-2027 school year opens on September 1, 2026."
      },
      {
        heading: "Choosing a Program",
        body: "TSA offers three curriculum-integrated membership programs. Chapters choose the program that works best for them based on their size and how students rotate through technology education courses."
      }
    ]
  },
  {
    title: "Affiliation Programs",
    tips: [
      {
        heading: "Red Chapter Affiliation Program (Red CAP)",
        body: "A chapter affiliates up to 10 members by paying a flat fee. Additional members may be added during the year for a fee. The membership fee for Red CAP is $120 at the national level, plus $70 in state dues."
      },
      {
        heading: "White Chapter Affiliation Program (White CAP)",
        body: "A chapter affiliates 11 or more members by paying a per member fee for state and national dues. The membership fee for White CAP is $12 per member at the national level, plus $7 per member in state dues."
      },
      {
        heading: "Blue Chapter Affiliation Program (Blue CAP)",
        body: "A chapter affiliates an unlimited number of members in a school for a flat fee. This option is popular among chapters where students rotate through a STEM class for a portion of the year to enable all students to be members. The membership fee for Blue CAP is $400 at the national level, plus $200 in state dues."
      }
    ]
  },
  {
    title: "More Information & Contact",
    tips: [
      {
        heading: "2026-20267 Chapter Affiliation Information",
        body: "You can find detailed information on this year's chapter affiliation below.",
        link: { label: "2026-20267 Chapter Affiliation Information", url: "/pdf/2026 -2027_Chapter_Affilation_Information.pdf" }
      },
      {
        heading: "National Affiliation & Dues",
        body: "You can find out more information about affiliation and dues at the National TSA website.",
        link: { label: "Affiliation and Dues (tsaweb.org)", url: "https://tsaweb.org/membership/affiliation-and-dues" }
      },
      {
        heading: "Contact the Missouri TSA State Advisor",
        body: "For any questions, contact Missouri TSA State Advisor Byekwaso Gilbert at 573-751-7764 or byekwaso.gilbert@dese.mo.gov."
      }
    ]
  }
];

export default function Affiliation() {
  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white">

        {/* Page Header */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Affiliation Information</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Everything you need to know about affiliating your chapter and choosing the right membership program.
          </p>
        </div>

        {/* Content */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          {sections.map((section, i) => (
            <div key={i}>
              <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">{section.title}</h2>
              </div>
              <div className="flex flex-col gap-y-6">
                {section.tips.map((tip, j) => (
                  <div key={j} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#072c5c] mb-2">{tip.heading}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.body}</p>
                    {tip.link && (
                      <a
                        href={tip.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-red-500 font-semibold underline hover:text-red-700"
                      >
                        {tip.link.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <a
            href="/pdf/tsa-chapter-advisor-manual.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 w-full md:w-[70%] mx-auto py-5 px-5 text-center rounded-lg text-white flex justify-center items-center transition-colors duration-300 hover:bg-[#ad0707] cursor-pointer"
          >
            <span className="text-sm md:text-xl font-semibold">TSA Membership System Chapter Advisor Instructions</span>
          </a>
        </div>

      </main>
    </div>
  );
}