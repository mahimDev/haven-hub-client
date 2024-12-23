import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyBookingCart from "../../Components/MyBookingCart/MyBookingCart";

const MyBookings = () => {
    const { user } = useAuth()
    const [bookingUser, setBookingUser] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:3000/myBookings/${user.email}`)
            .then(res => setBookingUser(res.data))
    }, [user.email])

    return (
        <div className="max-w-[1440px] mx-auto mt-10">

            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-softGreen text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Room Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Date</th>
                            <th className="py-4 px-6 text-lg border-b text-center">Update Date</th>
                            <th className="py-4 px-6 text-lg border-b text-center">Give Review</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingUser?.map(booking => <MyBookingCart key={booking._id} booking={booking}></MyBookingCart>)
                        }
                    </tbody>
                </table>
            </div>




        </div >
    );
};

export default MyBookings;