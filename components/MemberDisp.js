export default function MemberDisp({ name, lines }) {
    return (
        <div className="flex flex-col h-full">
            <p className="text-lg md:text-xl px-6 text-center leading-relaxed text-[#0b4188] font-bold">
                {name}
            </p>
            {lines.map((line, index) => (
                <p key={index} className="text-lg md:text-md px-6 text-center leading-relaxed text-[#072c5c]">
                    {line}
                </p>
            ))}
        </div>
    )
}