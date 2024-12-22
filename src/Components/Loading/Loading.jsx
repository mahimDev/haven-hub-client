
const Loading = () => {
    return (
        <div className="flex gap-4 h-[80vh] justify-center pt-40 text-4xl">
            <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-softGreen"></div>
            <h1 className="text-softGreen">Loading...</h1>
        </div>
    );
};

export default Loading;