import { Outlet } from "react-router-dom";


import NavBer from "../../Shared/NavBer/NavBer";

const Home = () => {
    return (
        <div>
            <nav className="max-w-[1440px] mx-auto">
                <NavBer></NavBer>
            </nav>
            <main className="max-w-[1440px] mx-auto">
                <Outlet />
            </main>
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    );
};

export default Home;