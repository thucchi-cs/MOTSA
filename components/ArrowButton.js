export default function ArrowButton({ label, link }) {
    return (
        <a href={link} className="bg-red-500 w-[60%] h-[20%] rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
            <h1 className="text-lg md:text-xl">{label} {"->"}</h1>
        </a>
    );
}