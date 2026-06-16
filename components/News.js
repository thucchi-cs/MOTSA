import Image from "next/image";

export default function NewsBox({ label, link, content, date, img }) {
    return (
        <a href={link} className="flex flex-col justify-start items-start gap-y-2 px-3 md:p-3 my-3 md:my-0 w-full h-full min-h-80 bg-white border-2 border-black transition-transform duration-300 hover:bg-zinc-200 text-black cursor-pointer">
            <Image
                className="object-cover overflow-hidden h-[50%]"
                src={ img }
                alt="Next.js logo"
                width={500}
                height={10}
                priority
            />
            <h1 className="font-bold text-md md:text-2xl underline text-left">{ label }</h1>
            <p className="text-md md:text-md text-zinc-600 text-left">Posted: { date }</p>
            <p className="text-md md:text-lg text-left">{ content }</p>
        </a>
    );
}