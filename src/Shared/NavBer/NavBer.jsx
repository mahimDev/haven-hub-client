import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const NavBer = () => {
    const { user, signOutUser } = useAuth()
    const [open, setOpen] = useState(false)
    const nav = <>
        <NavLink to={'/'}> <li>Home</li></NavLink>
        <NavLink to={'rooms'}><li>Rooms</li></NavLink>
        <NavLink to={'myBookings'}><li>My Bookings</li></NavLink>
        <NavLink to={'about'}><li>About-us</li></NavLink>

    </>
    const handleLogout = () => {
        signOutUser()
            .then(() => {

                toast.success('logout successfully')
            })
            .catch(() => {

            })
    }
    return (


        <div className="top-0  z-[500]  mx-auto  sticky   text-lightGray bg-darkGray/60   py-4 ">
            <div className="flex justify-between md:w-10/12 mx-auto items-center  py-2 px-3 rounded-full ">

                <div className="md:hidden block ">
                    <nav>
                        <div className={`md:hidden text-xl bg-darkGray/20  text-white p-2 rounded-full `
                        } onClick={() => setOpen(!open)}>
                            {
                                open === true ?
                                    <img className="w-10" src="https://img.icons8.com/?size=100&id=26140&format=png&color=FFFFFF" alt="" />
                                    :
                                    <img className="w-10" src="https://img.icons8.com/?size=100&id=26141&format=png&color=FFFFFF" alt="" />

                            }

                        </div>
                        <ul className={`md:flex absolute z-[500]  md:static bg-darkGray text-white p-3 duration-1000 left-0 rounded-br-xl  ${open ? `${user ? 'top-[95px]' : ' '} ` : '-top-60'} `}>
                            {
                                nav
                            }
                        </ul>
                    </nav>
                </div>
                <div className="hidden md:block ">
                    <ul className="md:flex border-2 py-2 px-4 rounded-full border-darkGray gap-4 text-xl  font-semibold backdrop-blur-xl">
                        {nav}
                    </ul>
                </div>
                <div>
                    {
                        user ?
                            <div className="group relative">
                                <img
                                    width={500}
                                    height={500}
                                    className="size-12 rounded-full bg-slate-500 object-cover"
                                    src={user?.photoURL}
                                    alt="avatar GlobalGate"
                                />
                                <div className={`group-hover:block hidden rounded-xl absolute right-0 top-12 p-5 bg-white/70 backdrop-blur-2xl text-darkGray`}>
                                    <h1 className="mb-2">{user?.displayName}</h1>
                                    <h1 className="my-2">{user?.email}</h1>
                                    <button

                                        onClick={handleLogout}
                                        className={`  border-2 border-black bg-darkGray text-lightGray
                                 py-1 px-3 font-semibold rounded-md `}
                                    >LogOut</button>
                                </div>
                            </div>
                            :

                            <div className="flex gap-2">
                                <Link to={'/login'}>
                                    <button className={`border-2 border-lightGray  py-1 px-3 font-semibold rounded-md $`}
                                    >Login</button></Link>
                                <Link to={'/register'}>
                                    <button className={`border-2 border-lightGray  py-1 px-3 font-semibold rounded-md $`}
                                    >Register</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>



    );
};

export default NavBer;