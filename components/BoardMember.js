export default function BoardMember({ name, position, email }) {
    return (
        <div className="flex flex-col h-full">
            <p className="text-lg md:text-4xl px-6 leading-relaxed text-[#0b4188] font-bold">
                {name}
            </p>
            <p className="text-lg md:text-2xl px-6 leading-relaxed text-black">
                {position}
            </p>
            <p className="text-lg md:text-2xl px-6 leading-relaxed text-black">
                {email}
            </p>
        </div>
    )
}