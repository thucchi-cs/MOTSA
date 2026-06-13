import Header from "@/components/Header";

export default function NationalTSAWeek() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"events"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white py-20">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">National TSA Week</h1>
          <h1 className="text-3xl text-left px-[5%] pt-5 font-bold">October 6-10, 2025</h1>
          <div className="flex flex-col w-full justify-between items-center h-full px-10 py-12 gap-y-5">
            <p className="text-2xl w-[70%] px-15 leading-relaxed">
                National TSA Week is a great opportunity for your chapter to create awareness of the Technology Student Association in your school and community, and to showcase member and chapter activities and accomplishments. National TSA Week is about TSA student members and TSA chapters, and the work achieved while “learning to lead in a technical world.” Use the official 2025-2026 TSA hashtag, #TSAunite, in your TSA-related posts, and tag @nationalTSA as you follow the themes for each day of National TSA Week:
            </p>
            <p className="text-2xl w-[60%] px-15 leading-relaxed">
                <strong>Mentor Monday</strong> - Reflect on someone who helped guide you into TSA and acted as a mentor in your journey. 
            </p>
            <p className="text-2xl w-[60%] px-15 leading-relaxed">
                <strong>Talent Tuesday</strong> - Show off yout TSA talent!
            </p>
            <p className="text-2xl w-[60%] px-15 leading-relaxed">
                <strong>Wacky Wednesday</strong> - Post your favorite silly TSA photo.  
            </p>
            <p className="text-2xl w-[60%] px-15 leading-relaxed">
                <strong>Together Thursday</strong> - Showcase your TSA community-whether it's your closest friends, your chapter, your state, or your officer team.
            </p>
            <p className="text-2xl w-[60%] px-15 leading-relaxed">
                <strong>Fashion Friday</strong> - Upload a picture of you in your favorite TSA outfit! This could include fashio show outfits, chapter shirts, royal blues, or anything else.
            </p>
            <p className="text-2xl w-[70%] px-15 leading-relaxed underline pt-5">
                In addition:
            </p>
            <li className="text-2xl w-[60%] leading-relaxed">
                Share the <a className="inline underline text-red-500" target="_blank" href="https://tsaweb.org/programs/national-tsa-week/national-tsa-week-proclamation">TSA Week Proclamation</a>.
            </li>
            <li className="text-2xl w-[60%] leading-relaxed">
                Use the <a className="inline underline text-red-500" target="_blank" href="https://tsaweb.org/programs/national-tsa-week/national-tsa-week-press-release-template">National TSA Week Press Release Template</a>. Create a press release to send to your local media and school system. Share your National TSA Week photos on your TSA chapter's social media pages; tag @nationalTSA and use #NationalTSAWeek.
            </li>
            <li className="text-2xl w-[60%] leading-relaxed">
                Follow @nationalTSA on Facebook and Instagram. If posting, do NOT include content as defined by the disclaimer below:
            </li>
            <li className="text-2xl w-[50%] leading-relaxed">
                abusive or hurtful comments about a user or another participant;
            </li>
            <li className="text-2xl w-[50%] leading-relaxed">
                off-topic or other comments (this includes promotion or solicitation of events, groups, pages, websites, organizations, products, and programs not related to or affiliated with TSA);
            </li>
            <li className="text-2xl w-[50%] leading-relaxed">
                comments that use profanity, foul language, abusive language, or “hate speech” (for example, including - but not limited to - racial, ethnic, or gender-bashing language);
            </li>
            <li className="text-2xl w-[50%] leading-relaxed">
                private, personal information published without consent;
            </li>
            <li className="text-2xl w-[50%] leading-relaxed">
                comments that violate the privacy of any individual;
            </li>
            <li className="text-2xl w-[50%] leading-relaxed">
                material that is unlawful, obscene, defamatory, threatening, harassing, abusive, slanderous, hateful, or embarrassing to any person or entity as determined by TSA.
            </li>
          </div>
        </div>    
      </main>
    </div>
  );
}
