import Header from "@/components/Header";

export default function construction() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c] overflow-x-hidden">
      <Header page={"home"}></Header>
      <main className="flex w-full flex-col items-center justify-between bg-white py-10">
        <h1 className="text-3xl md:text-5xl px-[5%] font-bold text-center text-black">404 Error: Page Not Found</h1>
        <h2 className="text-xl md:text-3xl px-[5%] font-bold text-center text-black py-15">Looking for another page?</h2>
        <div className="flex flex-col md:grid md:grid-cols-5 w-[80%] gap-13 md:gap-5">
          <div className="flex flex-col w-full justify-start items-center gap-5">
            <a href="/about" className="text-lg text-blue-500 hover:text-blue-600 underline text-center font-bold">About</a>
            <a href="/about/history" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">History</a>
            <a href="/about/board" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Board of Directors</a>
            <a href="/about/tsa-mission" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Mission, Creed, and Motto</a>
            <a href="/about/chapter-map" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Chapter Map</a>
            <a href="/about/regional-map" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Regional Map</a>
          </div>
          <div className="flex flex-col w-full justify-start items-center gap-5">
            <a href="/students" className="text-lg text-blue-500 hover:text-blue-600 underline text-center font-bold">Students</a>
            <a href="/students/competitive-events" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Competitive Events</a>
            <a href="/students/scholarships" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Scholarships</a>
            <a href="/students/dress-code" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Dress Code</a>
            <a href="/students/degree" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Degree Program</a>
            <a href="/students/brand-design-contest" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Brand Design Contest</a>
            <a href="/students/officers" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">State Officer Team</a>
            <a href="/students/apply" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Apply for Office</a>
          </div>
          <div className="flex flex-col w-full justify-start items-center gap-5">
            <a href="/advisors" className="text-lg text-blue-500 hover:text-blue-600 underline text-center font-bold">Advisors</a>
            <a href="/advisors/forms" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Conference Forms</a>
            <a href="/advisors/start-a-chapter" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Starting a Chapter</a>
            <a href="/advisors/resources" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Chapter Resources</a>
            <a href="/advisors/affiliation" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Affiliation Information</a>
            <a href="/advisors/zoom" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Monthly Zoom Meetings</a>
          </div>
          <div className="flex flex-col w-full justify-start items-center gap-5">
            <a href="/events" className="text-lg text-blue-500 hover:text-blue-600 underline text-center font-bold">Conferences & Events</a>
            <a href="/events/calendar" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Calendar</a>
            <a href="/events/scc" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">State Championship</a>
            <a href="/events/flc" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Fall Leadership Conference</a>
            <a href="/events/workshops" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Competitive Events Preparation Workshops</a>
            <a href="/events/regional-conferences" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Regional Conferences</a>
            <a href="/events/national-conference" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">National Conference</a>
            <a href="/events/national-tsa-week" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">National TSA Week</a>
          </div>
          <div className="flex flex-col w-full justify-start items-center gap-5">
            <a href="/resources" className="text-lg text-blue-500 hover:text-blue-600 underline text-center font-bold">Resources</a>
            <a href="/resources/awards" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Outstanding Member Awards</a>
            <a href="/resources/newsletter" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">E-Newsletter</a>
            <a href="/resources/billing" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Billing/Late Fee</a>
            <a href="/resources/bylaws" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Bylaws</a>
            <a href="/resources/gallery" className="text-lg text-blue-500 hover:text-blue-600 underline text-center">Photo Gallery</a>
          </div>
        </div>
      </main>
    </div>
  );
}
