import { useEffect, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReactStars from 'react-stars';
import axios from 'axios';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    // Create array with 500 slides

    useEffect(() => {
        axios.get(`https://hotel-booking-server-sable.vercel.app/reviewsGet`)
            .then(res => setReviews(res.data))
    }, [])

    // moment().subtract(review?.isDate, 'days').calendar()

    return (
        <div className='mt-36'>
            <h1 className='text-center mb-20 font-semibold text-5xl text-darkGray'>
                Our Reviews
            </h1>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                slidesPerView={4}
                // centeredSlides={true}
                spaceBetween={30}
                // pagination={{
                //     type: 'fraction',
                // }}
                navigation={true}
                virtual
            >

                {reviews?.map((review, index) => (
                    <SwiperSlide key={review._id} virtualIndex={index}>
                        <div className='flex text-center flex-col justify-center items-center h-[30vh] border text-darkGray bg-lightGray rounded-lg'>
                            <h1>{review.userName || 'User Name'}</h1>
                            <ReactStars
                                count={5}
                                value={review?.rating}
                                edit={false}
                                size={64}
                                color2={'#ffd700'}
                            />
                            <p className='w-3/4'> {review?.comments}</p>
                            <p>{new Date(review?.isDate).toLocaleDateString()}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    );
};

export default Reviews;