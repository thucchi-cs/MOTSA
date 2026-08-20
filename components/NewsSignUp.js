export default function NewsSignUp() {
    return (
        <div className="flex flex-col items-start justify-center w-full md:h-full py-10 px-0 md:px-10">
            <h1 className="font-bold text-xl md:text-3xl text-left">Subscribe to our E-Newsletter</h1>
            <h1 className="font-bold text-sm md:text-lg text-left pt-1"><p className="inline text-red-500 font-thin">*</p> Indicates required</h1>
            <form className="pt-4 w-full gap-y-4 flex flex-col" action="https://motsaweb.us19.list-manage.com/subscribe/post?u=b33fa3153e8510ff40a2f0f9e&amp;id=b9844ae367&amp;f_id=0009b4e7f0" method="post" name="mc-embedded-subscribe-form" target="_self">
                <div className="flex flex-col items-start justify-center w-full">
                    <h1 className="text-md md:text-xl">Email Address <p className="inline text-red-500 font-thin">*</p></h1>
                    <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="email" name="EMAIL" id="mce-EMAIL" required="" ></input>
                </div>
                <div className="flex flex-row items-center justify-between gap-x-5">
                    <div className="flex flex-col items-start justify-center w-full">
                        <h1 className="text-md md:text-xl">First Name</h1>
                        <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="text" name="FNAME" id="mce-FNAME" ></input>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                        <h1 className="text-md md:text-xl">Last Name</h1>
                        <input className="bg-white rounded-sm w-full border-3 border-zinc-400 h-10 text-black px-2" type="text" name="LNAME" id="mce-LNAME" ></input>
                    </div>
                </div>
                <div id="mce-responses">
                    <div id="mce-error-response" className="hidden"></div>
                    <div id="mce-success-response" className="hidden"></div>
                </div>
                <input className="md:w-[20%] h-10 bg-[#f12b10] rounded-md font-bold text-lg hover:cursor-pointer" type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe"/>
            </form>
        </div>
    );
}