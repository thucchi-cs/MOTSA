export default function NewsSignUp() {
    return (
        <div className="flex flex-col items-start justify-center w-full h-50 py-10 px-10">
            <h1 className="font-bold text-2xl text-left">Subscribe to our newsletter</h1>
            <h1 className="font-bold text-lg text-left"><p className="inline text-red-500 font-thin">*</p> Indicates required</h1>
            <form className="pt-5 w-full gap-y-4 flex flex-col">
                <div className="flex flex-col items-start justify-center w-full">
                    <h1 className="text-xl">Email Address <p className="inline text-red-500 font-thin">*</p></h1>
                    <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="text"></input>
                </div>
                <div className="flex flex-row items-center justify-between gap-x-5">
                    <div className="flex flex-col items-start justify-center w-full">
                        <h1 className="text-xl">First Name</h1>
                        <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="text"></input>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                        <h1 className="text-xl">Last Name</h1>
                        <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="text"></input>
                    </div>
                </div>
                <button className="w-[20%] h-10 bg-[#f12b10] rounded-md font-bold text-lg">Subscribe</button>
            </form>
        </div>
    );
}