import { Link } from "react-router-dom";

const RoomCart = (props = {}) => {
    const { room: roomInfo } = props || {}
    const {
        date,
        description,
        details,
        price,
        room,
        room_count,
        room_img,
        _id
    } = roomInfo
    console.log(roomInfo)
    return (
        <div className="mt-10">
            <Link to={`/roomDetails/${_id}`}>
                <div className={`  w-80 h-80 p-3 rounded-xl group hover:bg-lightGray `}>
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-110  duration-500 shadow-xl" src={room_img} alt="" />
                </div>
            </Link>
        </div>
    );
};

export default RoomCart;