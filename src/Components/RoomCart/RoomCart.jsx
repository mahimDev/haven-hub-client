import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const RoomCart = (props = {}) => {
    const { room: roomInfo } = props || {}
    const {
        price,
        review_count,
        room_img,
        _id
    } = roomInfo
    return (
        <div className="mt-10">
            <Link to={`/roomDetails/${_id}`}>
                <div className={`relative  w-80 h-80 p-3 rounded-xl group hover:bg-lightGray `}>
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-110  duration-500 shadow-xl" src={room_img || ''} alt="" />
                    <div className="absolute flex  items-center gap-4 bottom-5 group-hover:scale-110  duration-700 left-5">
                        <ReactStars
                            count={5}
                            value={review_count}
                            edit={false}
                            size={20}
                            color2={'#ffd700'} />
                        <p className="text-lg font-bold text-lightGray">${price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RoomCart;