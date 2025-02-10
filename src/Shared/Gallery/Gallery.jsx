import { easeOut } from "motion";
import { motion } from "motion/react"

const Gallery = () => {
    return (
        <div className="mt-36">
            <h1 className="text-5xl font-semibold text-center text-darkGray">Our Branches</h1>
            <p className="font-light mt-3 text-center text-darkGray">Your Perfect Stay Awaits – Across Every Major Country!</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-20 ">
                {/* 1 */}
                <motion.div
                    transition={{ duration: 8, delay: 1, ease: easeOut, repeat: Infinity }}
                    animate={{ x: [0, 10, 0], backgroundColor: ['#F5F5F5', '#c7c5c5', '#F5F5F5'] }}
                    className="relative   w-[400px]   rounded p-2 group overflow-hidden ">
                    <img className="rounded h-full group-hover:scale-110 duration-500" src="https://i.ibb.co.com/8m7tgZY/australia.jpg" alt="" />
                    <h1 className="absolute text-2xl group-hover:scale-110 duration-500 text-lightGray bottom-5 left-5">Australia</h1>
                </motion.div>
                {/* 2 */}
                <motion.div
                    transition={{ duration: 5, delay: 1, ease: easeOut, repeat: Infinity }}
                    animate={{ y: [10, 0, 10], backgroundColor: ['#F5F5F5', '#c7c5c5', '#F5F5F5'] }}
                    className="relative  w-[400px]  overflow-hidden  rounded p-2 group ">
                    <img className="rounded h-full group-hover:scale-110 duration-500" src="https://i.ibb.co.com/znPKq81/us.jpg" alt="" />
                    <h1 className="absolute text-2xl group-hover:scale-110 duration-500 text-lightGray bottom-5 left-5">United States
                    </h1>
                </motion.div>
                {/* 3 */}
                <motion.div
                    transition={{ duration: 6, delay: 1, ease: easeOut, repeat: Infinity }}
                    animate={{ x: [0, 10, 0], backgroundColor: ['#F5F5F5', '#c7c5c5', '#F5F5F5'] }}
                    className="relative w-[400px]  overflow-hidden  rounded p-2 group ">
                    <img className="rounded h-full  group-hover:scale-110 duration-500" src="https://i.ibb.co.com/xmGf75g/uk.jpg" alt="" />
                    <h1 className="absolute text-2xl group-hover:scale-110 duration-500 text-lightGray bottom-5 left-5">United Kingdom</h1>
                </motion.div>
                {/* 4 */}
                <motion.div
                    transition={{ duration: 5, delay: 1, ease: easeOut, repeat: Infinity }}
                    animate={{ y: [10, 0, 10], backgroundColor: ['#F5F5F5', '#c7c5c5', '#F5F5F5'] }}
                    className="relative w-[400px]  overflow-hidden   rounded p-2 group ">
                    <img className="rounded h-full group-hover:scale-110 duration-500" src="https://i.ibb.co.com/Sdhsmwv/canada.jpg" alt="" />
                    <h1 className="absolute text-2xl group-hover:scale-110 duration-500 text-lightGray bottom-5 left-5">Canada</h1>
                </motion.div>

                {/* 5 */}
                <motion.div
                    transition={{ duration: 8, delay: 1, ease: easeOut, repeat: Infinity }}
                    animate={{ y: [10, 0, 10], backgroundColor: ['#F5F5F5', '#c7c5c5', '#F5F5F5'] }}
                    className="relative w-[400px] overflow-hidden  rounded p-2 group ">
                    <img className="rounded h-full group-hover:scale-110 duration-500" src="https://i.ibb.co.com/fDdz96M/japan.jpg" alt="" />
                    <h1 className="absolute text-2xl group-hover:scale-110 duration-500 text-lightGray bottom-5 left-5">Japan</h1>
                </motion.div>
                {/* 6 */}
                <motion.div
                    transition={{ duration: 8, delay: 1, ease: easeOut, repeat: Infinity }}
                    animate={{ x: [0, 10, 0], backgroundColor: ['#F5F5F5', '#c7c5c5', '#F5F5F5'] }}
                    className="relative w-[400px] overflow-hidden  rounded p-2 group ">
                    <img className="rounded h-full  group-hover:scale-110 duration-500" src="https://i.ibb.co.com/M5wFtYT/United-Arab-Emirates.jpg" alt="" />
                    <h1 className="absolute text-2xl group-hover:scale-110 duration-500 text-lightGray bottom-5 left-5">United-Arab-Emirates</h1>
                </motion.div>
                {/* 7 */}
                <motion.div
                    transition={{ duration: 5, delay: 1, ease: easeOut, repeat: Infinity }}
                    animate={{ y: [0, 10, 0], backgroundColor: ['#F5F5F5', '#c7c5c5', '#F5F5F5'] }}
                    className="relative w-[400px]  overflow-hidden rounded p-2 group ">
                    <img className="rounded h-full group-hover:scale-110 duration-500" src="https://i.ibb.co.com/Df0LSKk/Country-China-1568x1116.jpg" alt="" />
                    <h1 className="absolute text-2xl group-hover:scale-110 duration-500 text-lightGray bottom-5 left-5">China</h1>
                </motion.div>
                {/* 8 */}
                <motion.div
                    transition={{ duration: 5, delay: 1, ease: easeOut, repeat: Infinity }}
                    animate={{ x: [10, 0, 10], backgroundColor: ['#F5F5F5', '#c7c5c5', '#F5F5F5'] }}
                    className="relative w-[400px] overflow-hidden rounded p-2 group ">
                    <img className="rounded h-full group-hover:scale-110 duration-500" src="https://i.ibb.co.com/Lvz59bK/31cc1acbb7dcf38cd983e3425c1a752e.jpg" alt="" />
                    <h1 className="absolute text-2xl group-hover:scale-110 duration-500 text-lightGray bottom-5 left-5">Singapure</h1>
                </motion.div>
            </div >
        </div>
    );
};

export default Gallery;