import Header from "@/components/Header";

export default function StartChapter() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-20">
          <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">10 Steps to Starting a Chapter</h1>
          <div className="flex flex-col w-full justify-between items-center h-full md:px-10 py-6 md:py-12 gap-y-5 md:gap-y-10">
            <p className="text-lg md:text-2xl md:w-[70%] px-6 md:px-15 leading-relaxed">
                Below are ten (10) steps to starting a local TSA chapter. These can help guide you as you get your chapter started or if you need to revamp your local chapter.
            </p>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-5 font-bold">1. The Organizing Committee</h1>
            <li className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                Select a few enthusiastic students to organize a TSA chapter.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                Encourage this group to become familiar with TSA before they begin. A good place to start is our website.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                For single sections, select four or five students from the class.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                For school-wide chapters, select at least one representative from each class or lab course.
            </li>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                The committee should elect a chairperson to serve until the chapter is officially underway.  This organizing committee is the first step in putting chapter control in the hands of the students and obtaining approval for a chapter from MO TSA, Inc. The two main duties of the organizing committee will be to draft local bylaws (NECESSARY FOR OBTAINING A CHARTER) and to plan a membership campaign.  The bylaws are the framework for how the chapter will be run. 
            </p>
            <div className="flex flex-row justify-center items-center gap-5 px-5 md:gap-20 w-full">
                <a href="https://motsaweb.org/wp-content/uploads/2021/06/c332c-tsa-13-sample-bylaws.pdf" target="_blank" className="bg-red-500 md:w-[20%] h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
                    <h1 className="text-sm md:text-xl">Sample Bylaws Word Document &#8594;</h1>
                </a>
                <a href="https://motsaweb.org/wp-content/uploads/2025/09/Missouri-TSA-Chapter-Application-2.pdf" target="_blank" className="bg-blue-500 md:w-[20%] h-full py-5 px-5 text-center rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#072c5c] cursor-pointer">
                    <h1 className="text-sm md:text-xl">Missouri TSA Chapter Application &#8594;</h1>
                </a>
            </div>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">2. The Recruitment Meeting</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                To introduce TSA to the students conduct a recruitment meeting. Use school announcements, bulletin boards, fliers and word-of-mouth to promote the meeting.
            </p>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                Here's a simple format for the meeting:
            </p>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Introduce organizing committee members.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Present the idea of forming a chapter to the group for debate.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                If the class is in favor of forming a chapter, present the bylaws. If the group likes it, have them vote to pass the bylaws.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                When the bylaws have been passed, plan the membership drive.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Explain the dues and set a deadline for paying them. Amounts for national and state dues (mandatory for each member) are established, but you will need to decide on local dues amount. Most chapters set membership dues so that there is a small amount of local dues over the amounts that must be remitted as national and state dues.
            </li>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                NOTE: Each chapter must pay a minimum of $120.00 national dues and $70.00 state dues annually.  These fees will cover ten students. Additional students may be added at a cost of $12.00 for national and $7.00 for state dues. National and state dues are paid to national TSA at the time of annual affiliation.  More information on this is available at <a href="https://tsaweb.org/membership/affiliation-and-dues" target="_blank" className="inline underline">Affiliation and Dues (tsaweb.org)</a>
            </p>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">3. The Membership Drive</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                After planning, you will begin your membership drive. When collecting dues, keep several things in mind:
            </p>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Adhere to school policy.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Set a deadline that is early enough to allow you to meet both your local, state and national deadlines. The national priority date for membership is in November.  The sooner your affiliations are received, the quicker you have access to the online national TSA materials, which include competitive event descriptions, and leadership training information.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Record the names of paid members of your TSA Chapter. If paying dues is difficult for students, hold a fundraiser to pay the dues for the entire group (everyone should participate in the event.)
            </li>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">4. Officer Elections</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                Hold elections for chapter officers. Keep the election simple. For instance, you could hold a meeting and request nominations for candidates then have a show of hands to elect officers.
            </p>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                To encourage enthusiasm, conduct a political campaign. For that, appoint a committee to develop election guidelines (dates, application procedures and nominee requirements).
            </p>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">5. The Officers' First Order of Business</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                Hold a meeting of the newly elected officers. The first item of business should be petitioning the state for a charter. Make sure your school does not already have a charter. If it has, then you don't need another. Find out by contacting the state advisor.
            </p>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                After receiving the charter, your chapter is ready to affiliate for the first time on the national TSA website.  National and state dues are paid annually through the affiliation portal on the national website. Go to <a href="https://tsaweb.org/membership/affiliation-and-dues" target="_blank" className="inline underline">Affiliation and Dues (tsaweb.org)</a> to learn more.  
            </p>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                Once you have followed the onsite directions to complete the affiliation process you will receive an email invoice that you can forward to financial staff at your school as needed.  After payment is made you will also receive an email with instructions explaining how to access and download competitive event descriptions and Total TSA, which contains leadership and chapter materials.
            </p>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">6. Chapter Committees</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                The chapter president establishes the standing committees. Some examples include:
            </p>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Membership Service
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Public Relations
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Social/Recreational
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Fund Raising
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Recognition
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Sponsorship
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Nominating
            </li>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                A complete description of each committee and its function is in Total TSA, to which you will have access after you complete the process of chartering and affiliating.
            </p>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">7. Develop a Plan of Action (aka, PA, or Calendar of Activities)</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                The chapter's Plan of Action establishes the chapter's project goals, and is a plan for the year.  Establish a Plan of Action Committee to come up with the plan and make recommendations to each standing committee. To help chapters create a Plan of Action there is a sample in Total TSA  available from the national TSA website once your chapter is chartered and affiliated.
            </p>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">8. Vote on the Plan of Action</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                Once the tentative Plan of Action is selected, present it to all members for their approval. The program directly influences the TSA year.
            </p>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">9. Get Involved!</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                The rest of the year your chapter will follow the plan of action for fundraising and chapter activities.  Some good ways to get involved, learn more, and get help are:
            </p>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Start as soon as possible to make plans to attend the Missouri TSA Fall Leadership Challenge.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Check the Missouri TSA website for events and opportunities to get involved with other chapters.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Contact chapters at other nearby schools - your chapters can plan events together, and other advisors and their students can be great resources for you!
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                As the chapter works through the plan of work, include time for students to work on competitive event projects (more on these below).  Check the website frequently for notices of regional competitions, and take your students to those in your area.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Plan to attend the TSA State Championships, held each spring, where students from across the state come together to show off their work and compete.
            </li>

            <h1 className="text-xl md:text-3xl text-center px-[5%] pt-15 font-bold">10. The Advisor's Continuing Role</h1>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                TSA's philosophy is that students manage their chapter, so your role should lessen as the year goes by.  But the best advisors remain an active part of the chapter; advisors are official members. After starting a chapter, the advisor's duties include the following:
            </p>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Maintain student enthusiasm.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Provide guidance as needed.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Clarify or point out what students might neglect.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Encourage chapter evaluation.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Relate TSA activities to classroom learning, community life, and the students future roles in society.
            </li>
            <li className="text-lg md:text-2xl w-[80%] md:w-[50%] leading-relaxed text-left">
                Set standards for members to follow by being a positive role model.
            </li>
            <p className="text-lg md:text-2xl w-[80%] md:w-[60%] leading-relaxed text-left">
                The greatest pitfall for advisors is doing all the work alone.  Let students run the show!
            </p>

          </div>
        </div>    
      </main>
    </div>
  );
}