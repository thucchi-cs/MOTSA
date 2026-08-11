import Header from "@/components/Header";

// A bunch of info i think
const sections = [
  {
    title: "Getting Started",
    tips: [
      {
        heading: "Overview",
        body: "Below are ten (10) steps to starting a local TSA chapter. These can help guide you as you get your chapter started or if you need to revamp your local chapter."
      }
    ]
  },
  {
    title: "1. The Organizing Committee",
    tips: [
      {
        heading: "Form Your Core Group",
        bullets: [
          "Select a few enthusiastic students to organize a TSA chapter.",
          "Encourage this group to become familiar with TSA before they begin. A good place to start is our website.",
          "For single sections, select four or five students from the class.",
          "For school-wide chapters, select at least one representative from each class or lab course."
        ]
      },
      {
        heading: "Chairperson & Bylaws",
        body: "The committee should elect a chairperson to serve until the chapter is officially underway. This organizing committee is the first step in putting chapter control in the hands of the students and obtaining approval for a chapter from MO TSA, Inc. The two main duties of the organizing committee will be to draft local bylaws (NECESSARY FOR OBTAINING A CHARTER) and to plan a membership campaign. The bylaws are the framework for how the chapter will be run."
      }
    ],
    buttons: [
      { label: "Sample Bylaws Word Document", url: "/pdf/c332c-tsa-13-sample-bylaws.pdf", color: "red" },
      { label: "Missouri TSA Chapter Application", url: "/pdf/Missouri_TSA_Chapter_Application.pdf", color: "navy" }
    ]
  },
  {
    title: "2. The Recruitment Meeting",
    tips: [
      {
        heading: "Promote the Meeting",
        body: "To introduce TSA to the students conduct a recruitment meeting. Use school announcements, bulletin boards, fliers and word-of-mouth to promote the meeting."
      },
      {
        heading: "Here's a simple format for the meeting:",
        bullets: [
          "Introduce organizing committee members.",
          "Present the idea of forming a chapter to the group for debate.",
          "If the class is in favor of forming a chapter, present the bylaws. If the group likes it, have them vote to pass the bylaws.",
          "When the bylaws have been passed, plan the membership drive.",
          "Explain the dues and set a deadline for paying them. Amounts for national and state dues (mandatory for each member) are established, but you will need to decide on local dues amount. Most chapters set membership dues so that there is a small amount of local dues over the amounts that must be remitted as national and state dues."
        ]
      },
      {
        heading: "NOTE",
        body: "Each chapter must pay a minimum of $120.00 national dues and $70.00 state dues annually. These fees will cover ten students. Additional students may be added at a cost of $12.00 for national and $7.00 for state dues. National and state dues are paid to national TSA at the time of annual affiliation. More information on this is available at:",
        link: { label: "Affiliation and Dues (tsaweb.org)", url: "https://tsaweb.org/membership/affiliation-and-dues" }
      }
    ]
  },
  {
    title: "3. The Membership Drive",
    tips: [
      {
        heading: "When collecting dues, keep several things in mind:",
        bullets: [
          "Adhere to school policy.",
          "Set a deadline that is early enough to allow you to meet both your local, state and national deadlines. The national priority date for membership is in December. The membership registration deadline for the Missouri State Championships is February 1st. The sooner your affiliations are received, the quicker you have access to the online national TSA materials, which include competitive event descriptions, and leadership training information.",
          "Record the names of paid members of your TSA Chapter. If paying dues is difficult for students, hold a fundraiser to pay the dues for the entire group (everyone should participate in the event.)"
        ]
      }
    ]
  },
  {
    title: "4. Officer Elections",
    tips: [
      {
        heading: "Holding Elections",
        body: "Hold elections for chapter officers. Keep the election simple. For instance, you could hold a meeting and request nominations for candidates then have a show of hands to elect officers."
      },
      {
        heading: "Encouraging Enthusiasm",
        body: "To encourage enthusiasm, conduct a political campaign. For that, appoint a committee to develop election guidelines (dates, application procedures and nominee requirements)."
      }
    ]
  },
  {
    title: "5. The Officers' First Order of Business",
    tips: [
      {
        heading: "Petition for a Charter",
        body: "Hold a meeting of the newly elected officers. The first item of business should be petitioning the state for a charter. Make sure your school does not already have a charter. If it has, then you don't need another. Find out by contacting the state advisor."
      },
      {
        heading: "Affiliating Nationally",
        body: "After receiving the charter, your chapter is ready to affiliate for the first time on the national TSA website. National and state dues are paid annually through the affiliation portal on the national website. Go to:",
        link: { label: "Affiliation and Dues (tsaweb.org)", url: "https://tsaweb.org/membership/affiliation-and-dues" }
      },
      {
        heading: "After Affiliation",
        body: "Once you have followed the onsite directions to complete the affiliation process you will receive an email invoice that you can forward to financial staff at your school as needed. After payment is made you will also receive an email with instructions explaining how to access and download competitive event descriptions and Total TSA, which contains leadership and chapter materials."
      }
    ]
  },
  {
    title: "6. Chapter Committees",
    tips: [
      {
        heading: "The chapter president establishes the standing committees. Some examples include:",
        bullets: [
          "Membership Service",
          "Public Relations",
          "Social/Recreational",
          "Fund Raising",
          "Recognition",
          "Sponsorship",
          "Nominating"
        ]
      },
      {
        heading: "Learning More",
        body: "A complete description of each committee and its function is in Total TSA, to which you will have access after you complete the process of chartering and affiliating."
      }
    ]
  },
  {
    title: "7. Develop a Plan of Action (aka, PA, or Calendar of Activities)",
    tips: [
      {
        heading: "What Is a Plan of Action?",
        body: "The chapter's Plan of Action establishes the chapter's project goals, and is a plan for the year. Establish a Plan of Action Committee to come up with the plan and make recommendations to each standing committee. To help chapters create a Plan of Action there is a sample in Total TSA available from the national TSA website once your chapter is chartered and affiliated."
      }
    ]
  },
  {
    title: "8. Vote on the Plan of Action",
    tips: [
      {
        heading: "Member Approval",
        body: "Once the tentative Plan of Action is selected, present it to all members for their approval. The program directly influences the TSA year."
      }
    ]
  },
  {
    title: "9. Get Involved!",
    tips: [
      {
        heading: "Some good ways to get involved, learn more, and get help are:",
        bullets: [
          "Start as soon as possible to make plans to attend the Missouri TSA Fall Leadership Challenge.",
          "Check the Missouri TSA website for events and opportunities to get involved with other chapters.",
          "Contact chapters at other nearby schools - your chapters can plan events together, and other advisors and their students can be great resources for you!",
          "As the chapter works through the plan of work, include time for students to work on competitive event projects (more on these below). Check the website frequently for notices of regional competitions, and take your students to those in your area.",
          "Plan to attend the TSA State Championships, held each spring, where students from across the state come together to show off their work and compete."
        ]
      }
    ]
  },
  {
    title: "10. The Advisor's Continuing Role",
    tips: [
      {
        heading: "Let Students Lead",
        body: "TSA's philosophy is that students manage their chapter, so your role should lessen as the year goes by. But the best advisors remain an active part of the chapter; advisors are official members. After starting a chapter, the advisor's duties include the following:"
      },
      {
        heading: "Ongoing Advisor Duties",
        bullets: [
          "Maintain student enthusiasm.",
          "Provide guidance as needed.",
          "Clarify or point out what students might neglect.",
          "Encourage chapter evaluation.",
          "Relate TSA activities to classroom learning, community life, and the students future roles in society.",
          "Set standards for members to follow by being a positive role model."
        ]
      },
      {
        heading: "Remember",
        body: "The greatest pitfall for advisors is doing all the work alone. Let students run the show!"
      }
    ]
  }
];

export default function StartChapter() {
  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center bg-white">

        {/* Page Header */}
        <div className="w-full bg-[#072c5c] py-14 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">10 Steps to Starting a Chapter</h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-base md:text-lg">
            A step-by-step guide to launching your Missouri TSA chapter from the ground up.
          </p>
        </div>

        {/* Content */}
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-y-14">
          {sections.map((section, i) => (
            <div key={i}>
              <div className="flex items-center gap-x-3 mb-6 border-l-4 border-red-500 pl-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#072c5c]">{section.title}</h2>
              </div>
              <div className="flex flex-col gap-y-4">
                {section.tips.map((tip, j) => (
                  <div key={j} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h3 className="text-base font-bold text-[#072c5c] mb-2">{tip.heading}</h3>
                    {tip.body && (
                      <p className="text-gray-600 leading-relaxed text-sm">{tip.body}</p>
                    )}
                    {tip.bullets && (
                      <ul className="mt-2 flex flex-col gap-y-1">
                        {tip.bullets.map((bullet, k) => (
                          <li key={k} className="text-gray-600 leading-relaxed text-sm list-disc list-inside">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {tip.link && (
                      <a
                        href={tip.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-red-500 font-semibold underline hover:text-red-700 text-sm"
                      >
                        {tip.link.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {section.buttons && (
                <div className="flex flex-row justify-center items-center gap-5 px-5 md:gap-10 w-full mt-6">
                  {section.buttons.map((btn, k) => (
                    <a
                      key={k}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${btn.color === "red" ? "bg-red-500 hover:bg-[#ad0707]" : "bg-[#072c5c] hover:bg-[#0a3d7a]"} md:w-[40%] h-full py-5 px-5 text-center rounded-lg text-white flex justify-center items-center transition-colors duration-300 cursor-pointer`}
                    >
                      <span className="text-sm md:text-lg font-semibold">{btn.label}</span>
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