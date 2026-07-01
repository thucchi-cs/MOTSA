
import Header from "@/components/Header";

const sections = [
  {
    title: "Working with Your Officer Team",
    tips: [
      {
        heading: "Mentoring Your Chapter Officers",
        body: "Your chapter officers are the face of your TSA chapter. They are responsible for leading meetings, organizing events, and representing your chapter at conferences. As an advisor, your role is to mentor and support them in their leadership journey. Encourage them to take initiative, make decisions, and learn from their experiences."
      },
      {
        heading: "Delegate Responsibilities",
        body: "Ensure each officer has clear roles and responsibilities. This promotes accountability and effective teamwork."
      },
      {
        heading: "Run Officer Elections",
        body: "Hold elections at the end of each school year to select new officers for the upcoming year. This gives students a sense of ownership and responsibility for their chapter."
      },
      {
        heading: "Help the Team Set Goals for the Year",
        body: "Work with your officers to set achievable goals for the chapter. This could include membership growth, fundraising targets, or competition achievements. Having clear goals helps keep the team focused and motivated."
      }
    ]
  },
  {
    title: "Fundraising Tips",
    tips: [
      {
        heading: "Start Early in the Year",
        body: "Begin planning fundraisers in August so you can hold them in October or November, well before conference registration deadlines hit. The earlier you fundraise, the more financial flexibility your chapter has heading into the spring conference season."
      },
      {
        heading: "Set TSA stands at local events",
        body: "Many communities host local events like fairs, farmers markets, and parades. Set up a TSA booth or table at these events to sell products, promote your chapter, and recruit new members. This also helps raise awareness of TSA in your community."
      },
      {
        heading: "Keep Finances Organized",
        body: "Set a budget before any fundraiser and track income versus expenses carefully. A simple spreadsheet works great. Log every transaction so your treasurer always knows the chapter's balance. Staying on top of finances prevents overspending and builds trust with your school administration."
      },
      {
        heading: "Communicate with Members",
        body: "A fundraiser only works if everyone knows about it. Use group chats, Remind, or another communication platform to keep your chapter in the loop on what needs to be done and when. Assign specific roles so no one is left wondering what their job is."
      },
      {
        heading: "Think Seasonally",
        body: "Bake sales and product sales work any time of year, but candy and card sales work especially well around Valentine's Day. Annual or seasonal fundraisers also become traditions that members and the school community look forward to."
      },
      {
        heading: "American Red Cross Partnership",
        body: "National TSA partners with the American Red Cross as part of its national service project. Fundraising for the American Red Cross is a great way to give back to your community while also supporting a national cause."
      }
    ]
  },
  {
    title: "Recruiting & Marketing Your Chapter",
    tips: [
      {
        heading: "Host an Interest Meeting",
        body: "Start the year with an interest meeting open to all students. Show highlights from past conferences, let your officers speak about their experiences, and make it exciting. First impressions matter, so it is important to bring energy and make it clear that TSA is not a club, but something more."
      },
      {
        heading: "Use Your School's Resources",
        body: "Hang flyers in hallways, submit announcements to your school's morning announcements, and post in any student-facing communication channel your school uses. Ask to set up a table at club fairs or open house nights."
      },
      {
        heading: "Leverage Social Media",
        body: "Create a social media account for your chapter and post highlights from meetings, conferences, and community events. Tag @MissouriTSA on Instagram to help grow your audience. Students are far more likely to join something they've seen online than something they only heard about in the hallway."
      },
      {
        heading: "Reach Out to Feeder Schools",
        body: "If your high school chapter has a strong relationship with local middle schools, visit those TSA chapters and recruit rising freshmen before they even set foot in your building. Students who already know what TSA is are much easier to retain as members."
      },
      {
        heading: "Let Your Members Do the Talking",
        body: "Word of mouth is your most powerful recruiting tool. Encourage current members to personally invite friends. A recommendation from a peer carries far more weight than any flyer. Consider setting a chapter goal for new member recruitment and celebrate when you hit it."
      }
    ]
  },
  {
    title: "Preparing for Competitive Events",
    tips: [
      {
        heading: "Start Selecting Events Early",
        body: "Help students choose their competitive events as early as possible, ideally within the first month of school. This gives them plenty of time to prepare and practice before the conference. Encourage students to select events that align with their interests and strengths."
      },
      {
        heading: "Integrate Events into Class",
        body: "TSA competitions are designed to complement classroom instruction. Where possible, align competitive event work with your curriculum so students aren't doing everything outside of school hours. This also makes the case to administrators that TSA has direct academic value."
      },
      {
        heading: "Study the Event Guidelines",
        body: "Find the competitive events guide and go through each event's rules carefully with your students. Many entries are disqualified each year for technical violations like wrong paper size, missing documentation, or incorrect team sizes. These are details that are easily avoided with a checklist."
      },
      {
        heading: "Simulate Conference Conditions",
        body: "Run mock presentations or interviews before the actual conference. Students who have practiced presenting in front of a small audience perform significantly better than those who haven't. Even a single practice run with peers asking questions makes a big difference."
      }
    ]
  },
  {
    title: "Building Chapter Culture",
    tips: [
      {
        heading: "Recognize Member Achievements",
        body: "Celebrate wins publicly, whether it's a competition placement, a scholarship, or a member stepping up in a new way. Recognition doesn't have to be expensive. A shoutout at a meeting, a post on your chapter's social media, or a simple certificate goes a long way in keeping members motivated."
      },
      {
        heading: "Create Chapter Traditions",
        body: "Traditions build identity. Whether it's a chapter chant at conference, a pre-competition team dinner, or an end-of-year banquet, recurring events give members something to look forward to and connect over. Strong traditions are also a powerful recruiting tool as they make your chapter feel like a community."
      },
      {
        heading: "Involve Parents Early",
        body: "Send a welcome email to parents at the start of the year outlining the chapter calendar, conference costs, and ways to get involved. Parents who feel informed are far more likely to support fundraisers, volunteer as drivers to competitions, and encourage their students to stay engaged."
      },
      {
        heading: "Set a Program of Work",
        body: "At the start of the year, work with your officer team to create a Program of Work, a plan that outlines your chapter goals, planned events, fundraisers, service projects, and conference schedule. Having a roadmap keeps everyone aligned and gives your chapter a sense of direction and purpose throughout the year."
      }
    ]
  },
  {
    title: "Helpful Links & National Resources",
    links: [
      { label: "National TSA Website", url: "https://tsaweb.org" },
      { label: "Annual Themes and Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "All TSA Competitions", url: "https://tsaweb.org/competitions" },
      { label: "TSA and the American Red Cross", url: "https://tsaweb.org/programs/national-service-project" },
    ]
  }
];

export default function ChapterResources() {
  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white">

        {/* Page Header */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Chapter Resources</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            Everything you need to run a successful Missouri TSA chapter — from your first meeting to the national conference.
          </p>
        </div>

        {/* Content */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          {sections.map((section, i) => (
            <div key={i}>
              {/* Section Title */}
              <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                <span className="text-2xl"></span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">{section.title}</h2>
              </div>

              {/* Tips */}
              {section.tips && (
                <div className="flex flex-col gap-y-6">
                  {section.tips.map((tip, j) => (
                    <div key={j} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#072c5c] mb-2">{tip.heading}</h3>
                      <p className="text-gray-600 leading-relaxed">{tip.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Links */}
              {section.links && (
                <div className="flex flex-col gap-y-3">
                  {section.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-[#072c5c] font-semibold hover:bg-[#072c5c] hover:text-white transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
