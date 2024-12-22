import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        // errorElement: <div> erro page mail</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
                loader: () => fetch('http://localhost:3000/rooms')
            },
            {
                path: '/roomDetails/:id',
                element: <RoomDetails></RoomDetails>,
                loader: () => fetch('http://localhost:3000/rooms')
            },
        ]
    },
    {
        path: '*',
        element: <div>error page</div>
    }
])

export default router;