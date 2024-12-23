import { Link } from 'react-router-dom';
import './featureRoomCart.css'
const FeaturedRoomCart = (props = {}) => {
    const { room: item } = props || {}
    const {
        description,
        details,
        price,
        availability,
        room_img,
        room,
        _id
    } = item
    return (
        <div>
            <div className="card2Section">
                <div className="card2">
                    <img className='image' src={room_img} alt="" />
                    <div className="into">
                        <h1 className='card2h1 text-2xl font-semibold '>{room}</h1>
                        <p className='card2p' >{price}
                        </p>
                        <p className='card2p' >{details}
                        </p>
                        <div className='bg-darkGray/40 card2p rounded text-center'>
                            <Link to={`/roomDetails/${_id}`}>   <button className='py-2 px-5 text-lightGray hover:shadow-xl card2p rounded  backdrop-blur-2xl'>Book Now</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRoomCart;