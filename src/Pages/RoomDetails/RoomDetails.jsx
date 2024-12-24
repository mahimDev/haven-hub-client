import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import 'react-date-picker/dist/DatePicker.css';
import ReactStars from "react-stars";
const RoomDetails = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [dateValue, setDateValue] = useState(new Date())
    const [rivew, setReview] = useState([])
    const { user } = useAuth()
    const loaderData = useLoaderData()
    const {
        description,
        details,
        price,
        room,
        availability,
        room_img,
        review_count,
        _id: room_id
    } = loaderData

    const handleBookingBtn = async e => {
        e.preventDefault()
        const email = user.email
        const info = { dateValue, room_id, email }

        try {
            await axios.post('http://localhost:3000/roomBooking', info)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('booking success')
                    }
                })

        } catch (err) {
            toast.error(err.response.data)
        }


        setIsOpen(false)


    }
    useEffect(() => {
        axios.get(`http://localhost:3000/reviewsGet?roomId=${room_id}`)
            .then(res => setReview(res.data))
    }, [room_id])
    console.log(rivew)
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
                    <h1 className="text-lg">{price}</h1>
                    <h1 className="text-lg">{availability}</h1>
                    {/* <h1>{details}</h1> */}
                    <h1>{description}</h1>
                    <div className="flex pt-10">
                        <button

                            onClick={() => setIsOpen(true)}
                            className="text-center shadow-xl w-full py-3 rounded-full font-semibold bg-warmOrange hover:bg-softGreen duration-300 hover:text-xl hover:shadow-2xl">Book Now</button>

                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-semibold">Rating : </h1>
                    <ReactStars
                        count={5}
                        value={review_count}
                        edit={false}
                        size={64}
                        color2={'#ffd700'} />
                </div>
                <div>
                    <h1 className="text-xl font-semibold pb-3">Comments 👉</h1>
                    {rivew.length ?
                        <div>
                            {
                                rivew.map(r => <div key={r._id} className=" ">
                                    <p className="">👦 {r?.userName || 'User Name'}  💭 </p>
                                    <p className="bg-slate-300  py-2 px-3 rounded w-1/4 mb-2 "> {r?.comments} <span className="text-red-900">{r?.isDate}</span></p>
                                </div>)
                            }
                        </div>

                        : 'No reviews available for this room.'}
                </div>
                <div className="p-4">
                    {/* Modal */}
                    {isOpen &&


                        <div className="bg-lightGray absolute shadow-2xl px-20 py-10 rounded-md w-fit top-[30%] left-[40%] z-50 ">
                            <form
                                className="flex-col flex space-y-3">
                                <img className="w-60 h-36 object-cover rounded-lg" src={room_img} alt="" />
                                <h1 className="text-xl py-2"> Room : {room}</h1>
                                <h1 className=""> price : {price}</h1>

                                <input
                                    onChange={(e) => setDateValue(e.target.value)}
                                    className="p-2 rounded-lg"
                                    required
                                    type="date"
                                    name="date"
                                    id="" />

                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={handleBookingBtn}
                                        className="bg-softGreen py-2 px-6 rounded-2xl font-semibold mt-3 shadow-2xl hover:shadow-xl"
                                    >Confirm
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="bg-red-500 py-2 px-6 rounded-2xl font-semibold mt-3  shadow-2xl hover:shadow-xl"
                                    >Cancel
                                    </button>
                                </div>

                            </form>

                        </div>

                    }
                </div>
            </div>
        </div >
    );
};

export default RoomDetails;