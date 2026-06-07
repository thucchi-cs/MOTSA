import Image from "next/image";

export default function OfficerDisp({ img, name, position, school, email, link}) {
    return (
        <a link={link} className="flex flex-col items-center justify-center bg-zinc-100 border-5 border-[#060852]  py-7 rounded-2xl transition-transform duration-300 hover:scale-103 cursor-pointer">
            <Image
                className="pb-5"
                src={img}
                alt="Next.js logo"
                width={400}
                height={200}
                priority
            />
            <h1 className="font-bold text-4xl">{name}</h1>
            <h1 className="text-3xl">{position}</h1>
            <p className="text-xl">{school}</p>
            <p className="text-xl">{email}</p>
        </a>
    );
}