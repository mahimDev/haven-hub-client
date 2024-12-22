import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
    const loaderData = useLoaderData()
    const {
        date,
        description,
        details,
        price,
        room,
        room_count,
        room_img,
        _id
    } = loaderData
    return (
        <div className="max-w-[1440px] mx-auto mt-10">

            <div className="flex gap-10 ">
                <div className="flex-1 ">
                    <div className="bg-lightGray shadow-2xl w-fit p-1 rounded-xl">
                        <img className="w-[500px] h-[400px] object-cover rounded-xl" src={room_img} alt="" />

                    </div>
                </div>
                <div className="flex-1 space-y-3">
                    <h1 className="text-2xl font-bold">{room}</h1>
                    <h1 className="text-lg">{date}</h1>
                    <h1 className="text-lg">{price}</h1>
                    {/* <h1>{details}</h1> */}
                    <h1>{description}</h1>
                    <div className="flex pt-10">
                        <button className="text-center shadow-xl w-full py-3 rounded-full font-semibold bg-warmOrange hover:bg-softGreen duration-300 hover:text-xl hover:shadow-2xl">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-xl ">Reviews:</h1>
            </div>
        </div>
    );
};

export default RoomDetails;