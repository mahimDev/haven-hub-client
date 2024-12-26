import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRoomCart from "../../Components/FeaturedRoomCart/FeaturedRoomCart";


const Featured = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        try {
            axios.get('https://hotel-booking-server-sable.vercel.app/sixRooms')
                .then(res => {
                    setRooms(res.data)
                })
        } catch (err) {

        }
    }, [])
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-10  mt-36">  Top Class Rooms</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    rooms?.map(room => <FeaturedRoomCart key={room._id} room={room}></FeaturedRoomCart>)
                }
            </div>
        </div>
    );
};

export default Featured;