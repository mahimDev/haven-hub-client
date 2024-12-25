import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Private/PrivateRoute";
import MyBookings from "../Pages/MyBookings/MyBookings";
import ErrorPage from "../Components/Error/ErrorPage";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register ></Register>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
                // loader: () => fetch('https://hotel-booking-server-sable.vercel.app/rooms')
            },
            {
                path: '/roomDetails/:id',
                element:
                    <PrivateRoute>
                        <RoomDetails></RoomDetails>
                    </PrivateRoute>,
                // loader: ({ params }) => fetch(`https://hotel-booking-server-sable.vercel.app/roomDetails/${params.id}`)
            },
            {
                path: '/myBookings',
                element:
                    <PrivateRoute>
                        <MyBookings></MyBookings>
                    </PrivateRoute>,

            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;