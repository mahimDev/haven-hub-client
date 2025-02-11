
import RoomCart from "../../Components/RoomCart/RoomCart";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Rooms = () => {
    const [sorting, setSorting] = useState("")
    const [rooms, setRooms] = useState([])

    const [min, setMin] = useState('')
    const [max, setMax] = useState('')


    const handleBtn = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const minValue = form.get("min");
        const maxValue = form.get("max");

        // Parse values to numbers and update the state
        setMin(minValue);
        setMax(maxValue);
    };
    useEffect(() => {
        axios
            .get(`https://hotel-booking-server-sable.vercel.app/rooms?min=${min}&max=${max}&sorting=${sorting}`)
            .then((res) => setRooms(res.data))
            .catch(() => {

            });

    }, [min, max, sorting]);
    console.log(sorting)
    return (
        <div className="max-w-[1440px] mx-auto mt-10 min-h-[80vh]">
            <Helmet>
                <title>Rooms | HavenHub</title>
            </Helmet>
            <div className="md:flex justify-between">
                <select onChange={(e) => setSorting(e.target.value)} className="text-darkGray border py-2 rounded pl-2 mb-4  md:mb-0">
                    <option disabled>Select</option>
                    <option value="ascending">ascending price</option>
                    <option value="descending">descending price</option>
                </select>
                <form
                    onSubmit={handleBtn}
                >
                    <input
                        // onChange={(e) => setMinValue(e.target.value)}
                        className=" border py-2 rounded pl-2"
                        placeholder="min price"
                        type="number"
                        name="min"
                        id="" />
                    <input
                        // onChange={(e) => setMaxValue(e.target.value)}
                        className=" border py-2 rounded pl-2 ml-2"
                        placeholder="max price"
                        type="number"
                        name="max"
                        id="" />
                    <button className="py-2 px-5 border rounded-r bg-darkGray text-lightGray font-semibold">Filter </button>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
                {rooms?.map(room => <RoomCart key={room._id} room={room}></RoomCart>)}
            </div>
        </div>
    );
};

export default Rooms;