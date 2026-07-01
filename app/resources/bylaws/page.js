import Header from "@/components/Header";
import QuickLink from "@/components/QuickLink";

export default function Bylaws() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"resources"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
            <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-10">
                <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">Missouri TSA Bylaws</h1>
                <p className="text-lg md:text-2xl text-left px-[15%] pb-10 pt-15">
                    Missouri TSA is governed according to its Bylaws. Rules, regulations, and structure of Missouri TSA are defined in its Bylaws. All members can reference it at any time.
                </p>
            </div>    

            <div className="flex flex-col w-full justify-center items-center h-full bg-white text-black font-bold pb-15">  
                <div className="w-[50%] px-10">
                    <QuickLink target={"_blank"} link={"https://drive.google.com/file/d/1ZjQCZI-6idDJqtqXIlhTbqu_T1swj9-B/view"} label={"Missouri TSA Bylaws"}></QuickLink>
                </div>
            </div>

        </main>
    </div>
  );
}
