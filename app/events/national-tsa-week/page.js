import Header from "@/components/Header";

const sections = [
  {
    title: "National TSA Week",
    subtitle: "October 6-10, 2025",
    tips: [
      {
        heading: "About National TSA Week",
        body: "National TSA Week is a great opportunity for your chapter to create awareness of the Technology Student Association in your school and community, and to showcase member and chapter activities and accomplishments. National TSA Week is about TSA student members and TSA chapters, and the work achieved while \"learning to lead in a technical world.\" Use the official 2025-2026 TSA hashtag, #TSAunite, in your TSA-related posts, and tag @nationalTSA as you follow the themes for each day of National TSA Week:"
      }
    ]
  },
  {
    title: "Daily Themes",
    tips: [
      {
        heading: "Mentor Monday",
        body: "Reflect on someone who helped guide you into TSA and acted as a mentor in your journey."
      },
      {
        heading: "Talent Tuesday",
        body: "Show off your TSA talent!"
      },
      {
        heading: "Wacky Wednesday",
        body: "Post your favorite silly TSA photo."
      },
      {
        heading: "Together Thursday",
        body: "Showcase your TSA community - whether it's your closest friends, your chapter, your state, or your officer team."
      },
      {
        heading: "Fashion Friday",
        body: "Upload a picture of you in your favorite TSA outfit! This could include fashion show outfits, chapter shirts, royal blues, or anything else."
      }
    ]
  },
  {
    title: "In Addition",
    tips: [
      {
        heading: "Share the TSA Week Proclamation",
        body: "Share the TSA Week Proclamation with your school and community.",
        link: { label: "TSA Week Proclamation", url: "https://tsaweb.org/programs/national-tsa-week/national-tsa-week-proclamation" }
      },
      {
        heading: "Use the National TSA Week Press Release Template",
        body: "Create a press release to send to your local media and school system. Share your National TSA Week photos on your TSA chapter's social media pages; tag @nationalTSA and use #NationalTSAWeek.",
        link: { label: "National TSA Week Press Release Template", url: "https://tsaweb.org/programs/national-tsa-week/national-tsa-week-press-release-template" }
      },
      {
        heading: "Follow @nationalTSA",
        body: "Follow @nationalTSA on Facebook and Instagram. If posting, do NOT include content as defined by the disclaimer below:"
      }
    ]
  },
  {
    title: "Social Media Disclaimer",
    tips: [
      {
        heading: "Do Not Post",
        bullets: [
          "abusive or hurtful comments about a user or another participant;",
          "off-topic or other comments (this includes promotion or solicitation of events, groups, pages, websites, organizations, products, and programs not related to or affiliated with TSA);",
          "comments that use profanity, foul language, abusive language, or \"hate speech\" (for example, including - but not limited to - racial, ethnic, or gender-bashing language);",
          "private, personal information published without consent;",
          "comments that violate the privacy of any individual;",
          "material that is unlawful, obscene, defamatory, threatening, harassing, abusive, slanderous, hateful, or embarrassing to any person or entity as determined by TSA."
        ]
      }
    ]
  }
];

export default function NationalTSAWeek() {
  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"events"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white">

        {/* Page Header */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">National TSA Week</h1>
          <p className="text-blue-200 mt-4 text-xl font-semibold">October 6–10, 2025</p>
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
                    {tip.body && (
                      <p className="text-gray-600 leading-relaxed">{tip.body}</p>
                    )}
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
                    {tip.bullets && (
                      <ul className="mt-2 flex flex-col gap-y-2">
                        {tip.bullets.map((bullet, k) => (
                          <li key={k} className="text-gray-600 leading-relaxed list-disc list-inside">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}