export default function HeaderSubmenu({ pages }) {
    return (
        <div className="absolute top-full z-20 invisible opacity-0 transition-all duration-100 group-hover:visible group-hover:opacity-100 bg-zinc-200 text-[#030422] flex flex-col items-start justify-start p-4 gap-y-5 w-60">
            {pages.map((item, index) => (
                <a className="text-lg font-sans transition-transform duration-300 hover:underline" href={item.page} key={index}>{item.label}</a>
            ))}
            
        </div>
    );
}