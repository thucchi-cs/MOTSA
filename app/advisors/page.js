import Header from "@/components/Header";
import Image from "next/image";
import BoxButton from "@/components/BoxButton";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[#040531]">
      <Header page={"advisors"}></Header>
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#060852] sm:items-start"> 
        <div className="flex flex-col w-full relative">
            <Image
              className="object-cover object-center"
              src="/advisors2.JPG"
              alt="Next.js logo"
              width={5000}
              height={200}
              priority
              />
            <div className="absolute bg-black/40 z-0 w-full inset-0"></div>
        </div> 
        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-zinc-200 py-10">
          <a href="https://tsamembership.registermychapter.com/" target="_blank" className="bg-red-500 w-[25%] h-[10vh] rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
            <h1 className="text-3xl font-bold">National TSA Log In &#8594;</h1>
          </a>
        </div>
        <div className="flex flex-col w-full justify-between items-center h-full text-black bg-white">
          <h1 className="text-5xl text-left px-[5%] pt-10 font-bold">Links & Resources</h1>
          <div className="flex flex-row w-full px-[5%] justify-center items-center h-100 bg-white text-black py-10 gap-10">
            <BoxButton link="/advisors/forms" title={"Conference Forms"} icon={"/forms.png"}></BoxButton>
            <BoxButton link="/advisors/start-a-chapter" title={"Starting a Chapter"} icon={"/motsalogo.png"}></BoxButton>
            <BoxButton link="/advisors/affiliation" title={"Affiliation Information"} icon={"/tsa.png"}></BoxButton>
          </div> 
        </div>    
      </main>
    </div>
  );
}
