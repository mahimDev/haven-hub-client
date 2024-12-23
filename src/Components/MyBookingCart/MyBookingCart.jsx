
const MyBookingCart = (props = {}) => {
    const { booking } = props || {}
    const { room_img, date, price, _id } = booking
    const handleCancelBooking = _id => {
        console.log(`Cancelling booking`, _id)
    }
    return (
        <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-4 flex justify-start">
                <img src={room_img} className="h-16 w-16 object-cover rounded  bg-gray-300" />
            </td>
            <td className="py-4 px-6 border-b text-lg font-medium">{price}</td>
            <td className="py-4 px-6 border-b text-lg font-medium">{date}</td>
            <td className="py-4 px-6 border-b text-center ">
                <button className="bg-softGreen hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Update</button>
            </td>
            <td className="py-4 px-6 border-b text-center ">
                <button className="bg-warmOrange hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Review</button>
            </td>
            <td className="py-4 px-6 border-b text-end">
                <button
                    onClick={() => handleCancelBooking(_id)}
                    className="bg-red-600 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Cancel</button>
            </td>
        </tr>

    );
};

export default MyBookingCart;