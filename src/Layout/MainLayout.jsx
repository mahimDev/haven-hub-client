import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className=" font-playfairDisplay">
            <Outlet />
        </div>
    );
};

export default MainLayout;