import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRoomCart from "../../Components/FeaturedRoomCart/FeaturedRoomCart";
import useAuth from "../../Hooks/useAuth";


const Featured = () => {
    const [rooms, setRooms] = useState([])
    const { toggle } = useAuth()
    useEffect(() => {
        try {
            axios.get('https://hotel-booking-server-sable.vercel.app/sixRooms')
                .then(res => {
                    setRooms(res.data)
                })
        } catch (err) {
            console.log(err)
        }
    }, [])
    console.log(rooms)
    return (
        <div>
            <h1 className={`text-5xl font-bold text-center mb-10 text-darkGray ${toggle && "text-lightGray"}`}>  Top Class Rooms</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    rooms?.map(room => <FeaturedRoomCart key={room._id} room={room}></FeaturedRoomCart>)
                }
            </div>
        </div>
    );
};

export default Featured;