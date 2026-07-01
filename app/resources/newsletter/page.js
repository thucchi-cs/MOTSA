import Header from "@/components/Header";
import NewsSignUp from "@/components/NewsSignUp";
import QuickLink from "@/components/QuickLink";

export default function Newsletter() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"resources"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
            <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-10">
                <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">E-Newsletter</h1>
                <p className="text-lg md:text-2xl text-left px-[15%] pb-10 pt-15">Missouri TSA sends out monthly newsletters through email that features updates, reminders, chapter shoutouts, and different STEM events across the state. All Missouri TSA e-newsletters are written by our state officer team. Our newsletter services will resume September of 2026. All members and advisors are signed up for the newsletter through their registered email. You can join our mailing list with the form below!</p>
            </div>    

            <div className="flex flex-col w-full justify-center items-center h-full bg-white text-black font-bold py-5">  
                <div className="w-[50%] px-10">
                    <QuickLink target={"_blank"} link={"https://us19.campaign-archive.com/home/?u=b33fa3153e8510ff40a2f0f9e&id=b9844ae367"} label={"Past Newsletters"}></QuickLink>
                </div>
            </div>

            <div className="flex flex-col w-full justify-center items-center h-100 bg-white text-black font-bold">  
                <div className="w-[50%]">
                    <NewsSignUp></NewsSignUp>
                </div>
            </div>

        </main>
    </div>
  );
}
