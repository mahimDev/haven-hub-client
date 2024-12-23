import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import ReactStars from "react-stars";

const MyBookingCart = (props = {}) => {
    const { booking, bookingUser, setBookingUser } = props || {}
    const { room_img, dateValue: date, price, _id } = booking
    const { user } = useAuth()
    const userName = user?.displayName
    const email = user?.email
    const momentDate = moment(date).format('MM/DD/YYYY')
    const [rating, setRating] = useState(0);
    const [isopen, setIsOpen] = useState(false)
    const [isopenRivew, setIsOpenRivew] = useState(false)
    const [dateValue, setDateValue] = useState(new Date())
    const [comments, setComments] = useState('')
    const handleCancelBooking = async _id => {
        try {
            await axios.delete(`http://localhost:3000/cancleBooking/${_id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        const filter = bookingUser.filter(item => item._id !== _id)
                        setBookingUser(filter)
                        toast.success(`Booking cancelled`)
                    }
                })

        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdateDate = async (e, id) => {
        e.preventDefault()
        try {
            const info = { dateValue }
            await axios.patch(`http://localhost:3000/upadetingDate/${id}`, info)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        const find = bookingUser.find(item => item._id === id)
                        find.dateValue = dateValue
                        setBookingUser([...bookingUser], find)
                        console.log(bookingUser)
                        toast.success(`Updated date successfully`)
                    }
                })

        } catch (err) {
            console.log(err)
        }
        setIsOpen(false)
        // console.log(id, dateValue)
    }
    const handleReviewBtn = async (e, roomId) => {
        e.preventDefault()

        const info = { roomId, userName, email, rating, comments }

        try {
            await axios.post(`http://localhost:3000/reviews`, info)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Thank you so much for your review 🤗')
                    }
                })
        } catch (err) {
            toast.warn(err.response.data)
        }

        setIsOpenRivew(false)

    }
    return (
        <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-4 flex justify-start">
                <img src={room_img} className="h-16 w-16 object-cover rounded  bg-gray-300" />
            </td>
            <td className="py-4 px-6 border-b text-lg font-medium">{price}</td>
            {/* <td className="py-4 px-6 border-b text-lg font-medium"></td> */}
            {/* update btn */}
            <td className="py-4 px-6 border-b  text-center ">
                <div className="flex justify-center items-center gap-4">
                    <p> {momentDate}</p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-softGreen hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Update Date</button>
                </div>
            </td>
            {/* review btn */}
            <td className="py-4 px-6 border-b text-center ">
                <button
                    onClick={() => setIsOpenRivew(true)}
                    // onClick={(e) => handleReviewBtn(e, _id)}
                    className="bg-warmOrange hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Review</button>
            </td>
            {/* cancel btn */}
            <td className="py-4 px-6 border-b text-end">
                <button
                    onClick={() => handleCancelBooking(_id)}
                    className="bg-red-600 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Cancel</button>
            </td>
            {isopen &&
                <div className="bg-lightGray shadow-2xl px-20 py-10 rounded-md w-fit absolute top-[30%] left-[40%] z-50">
                    <form
                        className="flex-col flex space-y-3">
                        <input
                            onChange={(e) => setDateValue(e.target.value)}
                            className="p-2 rounded-lg"
                            required
                            type="date"
                            name="date"
                            id="" />

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={(e) => handleUpdateDate(e, _id)}
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
            {/* rivew modal */}
            {
                isopenRivew &&
                <div className="bg-lightGray shadow-2xl px-20 py-10 rounded-md w-fit absolute top-[30%] left-[40%] z-50">
                    <h1 className="text-xl text-center ">{userName || 'user Name'}</h1>
                    <form
                        className="flex-col flex space-y-3">
                        <div>
                            <ReactStars
                                count={5}
                                onChange={setRating}
                                size={64}
                                color2={'#ffd700'} />

                            <textarea
                                onChange={(e) => setComments(e.target.value)}
                                className="w-full rounded pt-2 pl-3"
                                placeholder="comment here"
                                name="text"
                                id=""></textarea>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={(e) => handleReviewBtn(e, _id)}
                                className="bg-softGreen py-2 px-6 rounded-2xl font-semibold mt-3 shadow-2xl hover:shadow-xl"
                            >Confirm
                            </button>
                            <button
                                onClick={() => setIsOpenRivew(false)}
                                className="bg-red-500 py-2 px-6 rounded-2xl font-semibold mt-3  shadow-2xl hover:shadow-xl"
                            >Cancel
                            </button>
                        </div>

                    </form>

                </div>
            }
        </tr>

    );
};

export default MyBookingCart;