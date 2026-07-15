import Header from "@/components/Header";
import QuickLink from "@/components/QuickLink";

export default function Gallery() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#072c5c]">
      <Header page={"resources"}></Header>
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#072c5c] sm:items-start"> 
            <div className="flex flex-col w-full justify-between items-center h-full text-[#040531] bg-white md:py-10">
                <h1 className="text-3xl md:text-5xl text-center px-[5%] pt-10 font-bold">Photo Gallery</h1>
                <p className="text-lg md:text-2xl text-center px-[5%] pb-10 pt-5">If you would like to add any photos to these folders, please email them to motsaphotos@gmail.com and include which folder they belong to. Help us build a digital gallery for Missouri TSA!</p>
            </div>    

            <div className="flex flex-col w-full justify-between items-center h-full bg-white text-black font-bold">        
                <div className="grid grid-rows-2 grid-cols-2 w-[80%] gap-x-5 gap-y-5">
                    <QuickLink target={"_blank"} link={"https://photos.google.com/share/AF1QipO3kcsIrm31SPPl3_nTenykIr2yk7g48YxODk_P5nAGnQPVbyVHI_k1j1F8XHcvtg?key=Qi1lamxHWVQzSGJmQ2gwdGZ3N3VtZWFsRHhuOHRn"} label={"State Championship 2026"}></QuickLink>
                    <QuickLink target={"_blank"} link={"https://photos.app.goo.gl/WKpqfCktBumuJb4L8"} label={"National Conference 2026"}></QuickLink>
                </div>
            </div>

        </main>
    </div>
  );
}
