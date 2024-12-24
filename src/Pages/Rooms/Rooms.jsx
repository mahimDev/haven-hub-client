import { useLoaderData } from "react-router-dom";
import RoomCart from "../../Components/RoomCart/RoomCart";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Rooms = () => {
    // const loaderData = useLoaderData()
    const [rooms, setRooms] = useState([])
    // const [minValue, setMinValue] = useState(0)
    // const [maxValue, setMaxValue] = useState(0)
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')

    // useEffect(() => {
    //     try {
    //         axios.get(`http://localhost:3000/rooms?min=${min}&max=${max}`)
    //             .then(res => setRooms(res.data))
    //         console.log(min, max)
    //     } catch (err) {
    //         console.log(err)

    //     }
    // }, [min, max])
    // const handleBtn = (e) => {
    //     e.preventDefault()
    //     const form = new FormData(e.target)
    //     const minValue = form.get('min')
    //     const maxValue = form.get('max')
    //     setMin(minValue)
    //     setMax(maxValue)

    // }
    // 
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
            .get(`http://localhost:3000/rooms?min=${min}&max=${max}`)
            .then((res) => setRooms(res.data))
            .catch((err) => console.error(err));

    }, [min, max]);
    return (
        <div className="max-w-[1440px] mx-auto mt-10">
            <Helmet>
                <title>Rooms | HavenHub</title>
            </Helmet>
            <div className="flex justify-end">
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
                    <button className="py-2 px-5 border rounded-r-md bg-darkGray text-lightGray font-semibold">Filter </button>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {rooms?.map(room => <RoomCart key={room._id} room={room}></RoomCart>)}
            </div>
        </div>
    );
};

export default Rooms;