import { motion } from "motion/react"
import { Link } from "react-router-dom";
const ErrorPage = () => {

    const ball = {
        width: 80,
        height: 80,
        backgroundColor: "#FFB74D",
        borderRadius: "50%",
    }
    return (
        <div className="bg-slate-100 h-[100vh] flex  justify-center ">
            <div className="lg:mt-96 mt-20">
                <div className="flex justify-center items-center text-7xl font-bold">4
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
                        }}
                        style={ball}

                    />
                    4
                </div>
                <div className="text-center py-5 text-7xl"><h1>Error Page</h1></div>
                <div className="text-center mt-10">
                    <Link to={'/'}><button className="border py-2 px-7 rounded-xl text-2xl font-semibold bg-warmOrange"> Go To Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;