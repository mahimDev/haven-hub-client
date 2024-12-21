import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Banner from "../Shared/Banner/Banner";
import Rooms from "../Pages/Rooms/Rooms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        // errorElement: <div> erro page mail</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Banner></Banner>
                    },
                    {
                        path: '/rooms',
                        element: <Rooms></Rooms>
                    },
                ]
            },

        ]
    },
    {
        path: '*',
        element: <div>error page</div>
    }
])

export default router;