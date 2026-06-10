export default function GrayButton({ label, link, height }) {
    return (
        <a href={link} className={"flex flex-row justify-center items-center px-3 md:px-0 my-3 md:my-0 w-full h-"+height+" bg-zinc-300 rounded-lg transition-transform duration-300 hover:bg-zinc-400 text-blue-500 cursor-pointer"}>
            <h1 className="font-bold text-md md:text-2xl underline text-center">{ label }</h1>
        </a>
    );
}