
const Loading = () => {
    return (
        <div className="flex gap-4 h-[80vh] justify-center pt-40 text-4xl">
            <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-softGreen"></div>
            <div className=" flex gap-2 ">
                <h1 className=" ">Loading
                </h1>
                <div className="w-10 h-10 flex gap-1 mt-3 items-center justify-center"><div className="w-2 h-2 animate-[bounce_.6s_linear_.2s_infinite] bg-softGreen rounded-full"></div><div className="w-2 h-2 animate-[bounce_.6s_linear_.3s_infinite] bg-softGreen/70 rounded-full"></div><div className="w-2 h-2 animate-[bounce_.6s_linear_.4s_infinite] bg-softGreen/50 rounded-full"></div></div>
            </div>
        </div>
    );
};

export default Loading;