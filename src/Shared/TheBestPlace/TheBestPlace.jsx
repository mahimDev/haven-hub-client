import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const TheBestPlace = () => {
    const { toggle } = useAuth()
    const [activeCard, setActiveCard] = useState(0);
    const cards = [1, 2, 3, 4];
    const color = "bg-darkGray text-white"
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % cards.length);

        }, 5000)
        return () => clearInterval(interval)
    }, [cards.length])

    // 
    // 
    // 

    return (
        <div className="">
            <h1 className={`text-5xl font-bold text-center mb-20 text-darkGray ${toggle && "text-lightGray"}`}>Our Services</h1>
            <div className="lg:flex   lg:gap-20 mx-auto">

                <div className="flex-1  rounded-lg">
                    {
                        activeCard === 0 && <img className="rounded w-full h-full object-cover" src="https://i.ibb.co.com/LQG2vGw/luxury-meeting-room.jpg" alt="" />
                    }
                    {
                        activeCard === 1 && <img className="rounded w-full h-full object-cover" src="https://i.ibb.co.com/61YRqYH/TOO-restaurant-Panoramique-vue-Paris-nuit-v2-scaled.jpg" alt="" />
                    }
                    {
                        activeCard === 2 && <img className="rounded w-full h-full object-cover" src="https://i.ibb.co.com/42tHMm1/Spa-Treatments-for-Ultimate-Well-Being.webp" alt="" />
                    }
                    {
                        activeCard === 3 && <img className="rounded w-full h-full object-cover" src="https://i.ibb.co.com/1fZ8Y5T/hawaii-main-1200x800.webp" alt="" />
                    }

                </div>

                <div className="space-y-5 flex-1 ">
                    {/* card 1 */}
                    <div className={`${activeCard === 0 && `${color} `} flex items-center gap-2 border rounded py-2 px-5 max-w-[550px] transition-all duration-700`}>
                        {activeCard === 0 ?
                            <img className="w-24" src="https://img.icons8.com/?size=100&id=124222&format=png&color=FFFFFF" alt="" />
                            :
                            <img className="w-24" src="https://img.icons8.com/?size=100&id=124222&format=png&color=000000" alt="" />
                        }
                        <div>
                            <h1 className="text-xl font-semibold">
                                Meeting Room
                            </h1>
                            <p className="mt-1 ">
                                Donec facilisis diam felis, sit amet bibendum augue feugiat finibus.
                            </p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className={`${activeCard === 1 && `${color} `} flex items-center gap-2 border rounded py-2 px-5 max-w-[550px] transition-all duration-700`}>
                        {activeCard === 1 ?
                            <img className="w-24" src="https://img.icons8.com/?size=100&id=24555&format=png&color=FFFFFF" alt="" />
                            :
                            <img className="w-24" src="https://img.icons8.com/?size=100&id=24555&format=png&color=000000" alt="" />
                        }
                        <div>
                            <h1 className="text-xl font-semibold">
                                Restaurant
                            </h1>
                            <p className="mt-1 ">
                                Vestibulum quis pharetra augue. Vestibulum sem lectus, consectetur sem.
                            </p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className={`${activeCard === 2 && `${color} `} flex items-center gap-2 border rounded py-2 px-5 max-w-[550px] transition-all duration-700`}>
                        {activeCard === 2 ?
                            <img className="w-24" src="https://img.icons8.com/?size=100&id=tzX6XorLMWhn&format=png&color=FFFFFF" alt="" />
                            :
                            <img className="w-24" src="https://img.icons8.com/?size=100&id=tzX6XorLMWhn&format=png&color=000000" alt="" />
                        }
                        <div>
                            <h1 className="text-xl font-semibold">
                                Spa
                            </h1>
                            <p className="mt-1 ">
                                Nam vestibulum, ex in varius maximus, turpis est efficitur purus, id molestie purus nisl quis nisi.
                            </p>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className={`${activeCard === 3 && `${color} `} flex items-center gap-2 border rounded py-2 px-5 max-w-[550px] transition-all duration-700`}>
                        {activeCard === 3 ?
                            <img className="w-24" src="https://img.icons8.com/?size=100&id=Qnn9VfdCAdfs&format=png&color=FFFFFF" alt="" />
                            :
                            <img className="w-24" src="https://img.icons8.com/?size=100&id=Qnn9VfdCAdfs&format=png&color=000000" alt="" />
                        }
                        <div>
                            <h1 className="text-xl font-semibold">
                                Sightseeing Tour
                            </h1>
                            <p className="mt-1 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin elementum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheBestPlace;