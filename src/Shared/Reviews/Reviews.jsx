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
        axios.get(`http://localhost:3000/reviewsGet`)
            .then(res => setReviews(res.data))
    }, [])


    console.log(reviews)
    return (
        <div className='mt-20'>
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
                        <div className='flex flex-col justify-center items-center h-[30vh] border'>
                            <h1>{review.userName || 'User Name'}</h1>
                            <ReactStars
                                count={5}
                                value={review?.rating}
                                edit={false}
                                size={64}
                                color2={'#ffd700'}
                            />
                            <p>{review?.comments}</p>
                            <p>{review?.isDate}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    );
};

export default Reviews;