import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBer = () => {
    const user = true
    const [open, setOpen] = useState(false)
    const nav = <>
        <NavLink> <li>Home</li></NavLink>
        <NavLink ><li>Rooms</li></NavLink>
        <NavLink ><li>My Bookings</li></NavLink>
        <NavLink ><li>About-us</li></NavLink>

    </>
    return (

        <div >
            <div className="top-0 mt-8 max-w-[1440px] mx-auto   sticky rounded-full z-30 text-darkGray bg-softGreen backdrop-blur-xl  py-6 ">
                <div className="flex justify-between w-11/12 mx-auto items-center   ">

                    <div className="md:hidden block ">
                        <nav>
                            <div className={`md:hidden text-xl bg-softGreen text-white py-2 px-4 rounded-md `
                            } onClick={() => setOpen(!open)}>
                                {
                                    open === true ? "ami asi" : " ami nai"

                                }

                            </div>
                            <ul className={`md:flex absolute z-[500] md:static bg-indigo-500 text-white p-3 duration-1000 left-0 rounded-br-md ${open ? `${user ? 'top-[112px]' : 'top-[104px] '} ` : '-top-60'} `}>
                                {
                                    nav
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="hidden md:block ">
                        <ul className="md:flex border-2 py-2 px-4 rounded-full gap-4 text-xl  font-semibold">
                            {nav}
                        </ul>
                    </div>
                    {
                        user ?
                            <div className="flex items-center gap-4">
                                {
                                    user?.photoURL && <img className="w-12 h-12 object-cover rounded-full" src="" alt="" />

                                }
                                <button

                                    className="border-2 border-white  py-1 px-3 font-semibold text-xl rounded-md"> Sign Out</button>

                            </div>
                            :
                            <Link to='/login'> <button className="border-2 border-white  py-1 px-3 font-semibold text-xl rounded-md"> Sign In</button></Link>

                    }
                </div>
            </div>
        </div>

    );
};

export default NavBer;