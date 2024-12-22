import { Outlet } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";

const MainLayout = () => {
    return (
        <div className=" font-playfairDisplay">
            <nav className="max-w-[1440px] mx-auto" >
                <NavBer></NavBer>
            </nav>
            <Outlet />
        </div>
    );
};

export default MainLayout;