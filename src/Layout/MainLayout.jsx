import { Outlet } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";
import { ToastContainer } from "react-toastify";
import Footer from "../Shared/Footer/Footer";
import useAuth from "../Hooks/useAuth";

const MainLayout = () => {
    const { toggle } = useAuth()
    return (
        <div className={`${toggle && "bg-darkGray"}  font-playfairDisplay`}>
            <ToastContainer />
            {/* <nav className="max-w-[1440px] mx-auto" > */}
            <NavBer></NavBer>
            {/* </nav> */}
            <Outlet />
            <footer className="">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;