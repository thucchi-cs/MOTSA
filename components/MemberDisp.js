export default function MemberDisp({ name, line1, line2 }) {
    return (
        <div className="flex flex-col h-full">
            <p className="text-lg md:text-4xl px-6 text-center leading-relaxed text-[#0b4188] font-bold">
                {name}
            </p>
            <p className="text-lg md:text-2xl px-6 text-center leading-relaxed text-black">
                {line1}
            </p>
            <p className="text-lg md:text-2xl px-6 text-center leading-relaxed text-black">
                {line2}
            </p>
        </div>
    )
}