import { useLoaderData } from "react-router-dom";
import RoomCart from "../../Components/RoomCart/RoomCart";

const Rooms = () => {
    const loaderData = useLoaderData()
    console.log(loaderData);
    return (
        <div className="max-w-[1440px] mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {loaderData.map(room => <RoomCart key={room._id} room={room}></RoomCart>)}
            </div>
        </div>
    );
};

export default Rooms;