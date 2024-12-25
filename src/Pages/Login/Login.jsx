import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const Login = () => {
    const navigate = useNavigate()
    const { state } = useLocation()

    const { signInUser, googleLogin } = useAuth()
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
            .catch(err => {

            })
    }
    return (
        <div className="flex justify-center">
            <Helmet>
                <title>Login | HavenHub</title>
            </Helmet>
            <div className={`mt-28 shadow-2xl  w-fit p-10 rounded-md`}>
                <form
                    onSubmit={handleSignIn}
                >
                    <h1 className={`text-5xl text-center font-semibold `}>Sign In</h1>
                    <div className="flex items-center border-b-2 border-[#4CAF50] gap-2 my-10" >
                        <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=12623&format=png&color=4CAF50" alt="" />
                        <input

                            className={`pl-3 pr-16 py-2 border-none `}
                            placeholder="Email Address"
                            type="text"
                            name="email"
                            id="" />
                    </div>
                    <div className="flex items-center border-b-2 border-[#4CAF50] gap-2 my-10" >
                        <img className="w-8 h-7 " src="https://img.icons8.com/?size=100&id=2862&format=png&color=4CAF50" alt="" />
                        <input

                            className={`pl-3 pr-16 py-2 border-none `}
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="" />
                    </div>
                    <div className="flex justify-between">
                        <p className={` flex items-center gap-1`}>
                            <input

                                type="checkbox"
                                name=""
                                id="" />Remember me?</p>
                        <p className={`border-b cursor-pointer`}>Forget Password</p>
                    </div>
                    <div className="flex mt-10">
                        <button className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#4CAF50] hover:shadow-xl duration-300">Sign In</button>
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
                <p className={`pt-2 text-center `}>Don't have an account?  <Link to={'/register'}> <span className={`text-[#4CAF50] border-b-2 hover:border-[#4CAF50] border-white `}>SignUp </span></Link></p>
            </div>
        </div>
    );
};

export default Login;