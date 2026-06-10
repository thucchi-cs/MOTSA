import Image from "next/image";

export default function BoxButton({ title, icon, link }) {
    return (
        <a href={link} className="bg-zinc-200 w-65 md:w-70 flex-shrink-0 md:w-[23%] h-65 md:h-70 rounded-4xl text-white font-sans flex flex-col items-center justify-end pb-5 text-xl md:text-2xl border-10 border-zinc-400 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <Image
            className=""
            src={icon}
            alt="Next.js logo"
            width={150}
            height={150}
            />
            <h1 className="pt-5 text-red-500 text-center font-bold">{title}</h1>
        </a>
    );
}