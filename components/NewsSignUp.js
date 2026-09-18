export default function NewsSignUp() {
    return (
        <div className="flex flex-col items-start justify-center w-full md:h-full py-10 md:px-10">
            <h1 className="font-bold text-xl md:text-3xl text-left">Subscribe to our ENewsletter</h1>
            <h1 className="font-bold text-sm md:text-lg text-left pt-1"><p className="inline text-red-500 font-thin">*</p> Indicates required</h1>
            <form className="pt-4 w-full gap-y-4 flex flex-col">
                <div className="flex flex-col items-start justify-center w-full">
                    <h1 className="text-md md:text-xl">Email Address <p className="inline text-red-500 font-thin">*</p></h1>
                    <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="text"></input>
                </div>
                <div className="flex flex-row items-center justify-between gap-x-5">
                    <div className="flex flex-col items-start justify-center w-full">
                        <h1 className="text-md md:text-xl">First Name</h1>
                        <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="text"></input>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                        <h1 className="text-md md:text-xl">Last Name</h1>
                        <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="text"></input>
                    </div>
                </div>
                <button className="md:w-[20%] h-10 bg-[#f12b10] rounded-md font-bold text-lg">Subscribe</button>
            </form>
        </div>
    );
}