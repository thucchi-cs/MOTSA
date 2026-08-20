import Image from "next/image";

export default function NewsBox({ label, link, content, date, img, target }) {
    return (
        <a href={link} target={target} className="flex flex-col justify-start items-start gap-y-2 p-3 md:p-3 my-3 md:my-0 w-[60vw] md:w-full h-full md:min-h-80 bg-white border-2 border-black transition-transform duration-300 hover:bg-zinc-200 text-black cursor-pointer">
            <Image
                className="object-cover overflow-hidden h-[50%]"
                src={ img }
                alt={img}
                width={500}
                height={10}
                priority
            />
            <h1 className="font-bold text-sm md:text-xl underline text-left">{ label }</h1>
            <p className="text-xs md:text-md text-zinc-600 text-left">Posted: { date }</p>
            <p className="text-sm md:text-lg text-left">{ content }</p>
        </a>
    );
}