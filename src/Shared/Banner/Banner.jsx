
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'

import 'swiper/css/scrollbar';
import 'swiper/css';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className={` h-[85vh] bg-world bg-no-repeat bg-cover mt-10 `}>

            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='  backdrop-blur-md h-[85vh] bg-white/20    '>
                        <div className='lg:flex'>
                            <div className='flex-1'>
                                <h1 className="  text-[#1A1A1A] ">   </h1>
                                <div className='App   lg:text-7xl  ml-20 lg:mt-56 text-2xl '>
                                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold' }}>
                                        50% off for this winter  <br /> {' '}
                                        <span style={{ color: '#827717', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={[
                                                    'Confidence 🤩',
                                                    'money 💸',
                                                    'Family 👨‍👩‍👧‍👦',

                                                ]}
                                                loop={1}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={100}
                                                deleteSpeed={40}
                                                delaySpeed={1000}
                                            // onLoopDone={handleDone}
                                            // onType={handleType}
                                            />
                                        </span>
                                    </h1>
                                </div>
                                <Link to={'/rooms'}>
                                    <div className='flex justify-center mt-10'>
                                        <button className='py-3 px-6 border bg-softGreen rounded-3xl '>Room</button>
                                    </div>
                                </Link>
                            </div>
                            <div className='flex-1'>
                                <img className='w-full max-h-[80vh] object-cover mt-5' src="https://i.ibb.co.com/h77bWQF/Pngtree-hiking-sticker-with-a-man-12232316.png" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex  backdrop-blur-md h-[85vh] bg-white/20   '>

                        <div className='flex-1'>
                            <h1 className="  text-[#1A1A1A] ">   </h1>
                            <div className='  mr-10 lg:mr-0 lg:text-7xl  text-center lg:mt-56 pt-10 text-3xl font-bold '>
                                Hike More, <br /> <span className='ml-20'>Worry Less</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <img className='w-full max-h-[100vh] object-cover mt-5' src="https://i.ibb.co.com/J7B6VsG/Pngtree-take-a-hike-typography-vitage-5870349.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='  backdrop-blur-md h-[85vh] bg-white/20   '>

                        <div className=''>
                            <h1 className="  text-[#1A1A1A] ">   </h1>
                            <div className='  mr-10 lg:mr-0 lg:text-7xl  text-center lg:pt-56 pt-10 text-3xl font-bold '>

                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;