import { Outlet } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div className=" font-playfairDisplay">
            <ToastContainer />
            <nav className="max-w-[1440px] mx-auto" >
                <NavBer></NavBer>
            </nav>
            <Outlet />
        </div>
    );
};

export default MainLayout;