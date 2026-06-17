import Image from "next/image";
import Link from "next/link";

export default function OfficerDisp({ img, name, position, school, email, link}) {
    return (
        <div className="flex flex-col items-center justify-center bg-zinc-100 border-5 border-[#060852] px-5 md:px-0 py-7 rounded-2xl transition-transform duration-300 hover:scale-103 cursor-pointer relative">
            <Link href={link} className="absolute inset-0 w-full h-full z-0"></Link>
            <Image
                className="pb-5"
                src={img}
                alt="Next.js logo"
                width={400}
                height={600}
                priority
                />
            <div className="text-center select-text z-10 cursor-text">
                <h1 className="text-2xl font-bold md:text-4xl">{name}</h1>
                <h1 className="text-xl md:text-3xl">{position}</h1>
                <p className="text-lg md:text-xl">{school}</p>
                <p className="text-lg md:text-xl">{email}</p>
            </div>
        </div>
    );
}