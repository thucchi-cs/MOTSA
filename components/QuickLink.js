export default function QuickLink({ link, label, target }) {
    return (
        <a href={ link } target={target} className="flex justify-center items-center w-full h-20 bg-[#0e4286] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105 hover:bg-[#072c5c] text-white cursor-pointer">
            <h1 className="text-sm md:text-xl text-center">{ label }</h1>
        </a>
    );
}