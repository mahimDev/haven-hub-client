import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
    const isDark = true
    const navigate = useNavigate()
    const { state } = useLocation()
    const { signInUser, googleLogin } = useContext(AuthContext)
    const handleSignIn = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        // const userInfo = { email, password }

        signInUser(email, password)
            .then(res => {

                toast.success('SignIn successful')
                navigate(state || "/")
            })
            .catch(err => {
                const massage = err.code
                const split = massage.split('/')[1].split('-').join(" ")
                toast.error(split)

            })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {

                navigate(state || '/')
            })
            .then(err => {

            })
    }
    return (
        <div className="flex justify-center">
            <div className={`mt-28 shadow-2xl ${isDark ? 'shadow-[#53492a8e]' : ''} w-fit p-10 rounded-md`}>
                <form
                    onSubmit={handleSignIn}
                >
                    <h1 className={`text-5xl text-center font-semibold ${isDark ? 'text-gold' : ''}`}>Sign In</h1>
                    <div className="flex items-center border-b-2 border-[#D4AF37] gap-2 my-10" >
                        <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=12623&format=png&color=D4AF37" alt="" />
                        <input

                            className={`pl-3 pr-16 py-2 border-none ${isDark ? 'bg-darkBg' : ''}`}
                            placeholder="Email Address"
                            type="text"
                            name="email"
                            id="" />
                    </div>
                    <div className="flex items-center border-b-2 border-[#D4AF37] gap-2 my-10" >
                        <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=2862&format=png&color=D4AF37" alt="" />
                        <input

                            className={`pl-3 pr-16 py-2 border-none ${isDark ? 'bg-darkBg' : ''}`}
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="" />
                    </div>
                    <div className="flex justify-between">
                        <p className={` ${isDark ? 'text-lightText' : ''} flex items-center gap-1`}>
                            <input

                                type="checkbox"
                                name=""
                                id="" />Remember me?</p>
                        <p className={`border-b cursor-pointer  ${isDark ? 'text-lightText' : ''} `}>Forget Password</p>
                    </div>
                    <div className="flex mt-10">
                        <button className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#D4AF37] hover:shadow-xl duration-300">Sign In</button>
                    </div>
                </form>
                <div className="flex pt-4 mt-4 border-t-2">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex justify-center items-center  rounded-sm w-full  py-3 text-xl font-semibold bg-[#D4AF37] hover:shadow-xl duration-300">
                        <img className="w-7" src="https://img.icons8.com/?size=100&id=17950&format=png&color=000000" alt="" />
                        oogle
                    </button>
                </div>
                <p className={`pt-2 text-center ${isDark ? 'text-lightText' : ''}`}>Don't have an account?  <Link to={'/register'}> <span className={`text-[#D4AF37] border-b-2 hover:border-[#D4AF37] border-white ${isDark ? 'border-darkBg' : ''}`}>SignUp </span></Link></p>
            </div>
        </div>
    );
};

export default Login;