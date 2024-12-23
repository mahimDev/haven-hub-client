import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRoomCart from "../../Components/FeaturedRoomCart/FeaturedRoomCart";


const Featured = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        try {
            axios.get('http://localhost:3000/sixRooms')
                .then(res => {
                    setRooms(res.data)
                })
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                rooms.map(room => <FeaturedRoomCart key={room._id} room={room}></FeaturedRoomCart>)
            }
        </div>
    );
};

export default Featured;