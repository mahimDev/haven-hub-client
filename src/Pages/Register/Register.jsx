import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
    const isDark = true
    const { user, createUser, googleLogin } = useAuth()
    const navigate = useNavigate()
    const { state } = useLocation()
    const handleRegistration = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photo = form.get('photo')
        const userInfo = { name, email, password, photo }
        // console.log(userInfo)
        // if (!password) {
        //     return toast.warn('Please enter your password')
        // }
        // if (!/[A-Z]/.test(password)) {
        //     return toast.warn('Please enter must be uppercase')
        // }
        // if (!/[a-z]/.test(password)) {
        //     return toast.warn('Please enter must be lowercase')
        // }
        // if (!/.{6,}$/.test(password)) {
        //     return toast.warn('Please enter must be 6 characters')
        // }
        createUser(email, password)
            .then(() => {

                toast.success('Registration successful')
                // navigate(state || "/")
            })
            .catch(err => {
                console.log(err.code)
                const massage = err.code
                const split = massage.split('/')[1].split('-').join(" ")
                toast.error(split)

            })

    }
    const handleGoogleLogin = () => {

        googleLogin()
            .then(res => {

                navigate(state || "/")
            })
            .then(err => {

            })
    }
    console.log(user)
    return (
        <div className="flex justify-center">
            <div className=" mt-28 shadow-2xl  w-fit p-10 rounded-md">
                <form
                    onSubmit={handleRegistration}
                >

                    <h1 className={`text-5xl text-center font-semibold `}>Register</h1>
                    <div className="flex items-center border-b-2 border-softGreen gap-2 my-10" >
                        <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=ywULFSPkh4kI&format=png&color=4CAF50" alt="" />
                        <input

                            className={`pl-3 pr-16 py-2 border-none `}
                            placeholder="username"
                            type="text"
                            name="name"
                            id="" />
                    </div>
                    <div className="flex items-center border-b-2 border-softGreen gap-2 my-10" >
                        <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=12623&format=png&color=4CAF50" alt="" />
                        <input

                            className={`pl-3 pr-16 py-2 border-none `}
                            placeholder="email"
                            type="text"
                            name="email"
                            id="" />
                    </div>
                    <div className="flex items-center border-b-2 border-softGreen gap-2 my-10" >
                        <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=2862&format=png&color=4CAF50" alt="" />
                        <input

                            className={`pl-3 pr-16 py-2 border-none `}
                            placeholder="password"
                            type="text"
                            name="password"
                            id="" />
                    </div>
                    <div className="flex items-center border-b-2 border-softGreen gap-2 my-10" >
                        <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=2724&format=png&color=4CAF50" alt="" />
                        <input

                            className={`pl-3 pr-16 py-2 border-none `}
                            placeholder="photoURL"
                            type="text"
                            name="photo"
                            id="" />
                    </div>

                    <div className="flex mt-10">
                        <button className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#4CAF50] hover:shadow-xl duration-300">Sign Up</button>
                    </div>
                </form>
                <div className="flex pt-4 mt-4 border-t-2">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex justify-center items-center  rounded-sm w-full  py-3 text-xl font-semibold bg-[#4CAF50] hover:shadow-xl duration-300">
                        <img className="w-7" src="https://img.icons8.com/?size=100&id=17950&format=png&color=000000" alt="" />
                        oogle
                    </button>
                </div>
                <p className={`pt-2 text-center ${isDark ? 'text-lightText' : ''}`}>You have a account?
                    <Link to={'/login'}> <span className={`text-[#4CAF50] border-b-2 hover:border-softGreen border-white ${isDark ? 'border-darkBg' : ''}`}
                    >SignIn </span>
                    </Link></p>
            </div>
        </div>
    );
};

export default Register;