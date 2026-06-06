export default function ArrowButton({ label }) {
    return (
        <div className="bg-red-500 w-[60%] h-[20%] rounded-lg text-white flex flex-row justify-center items-center transition-transform duration-300 hover:bg-[#ad0707] cursor-pointer">
            <h1 className="text-xl">{label} {"->"}</h1>
        </div>
    );
}