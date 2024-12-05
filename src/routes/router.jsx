import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllVisa from "../pages/AllVisa";
import AddVisa from "../pages/AddVisa";
import MyAddedVisa from "../pages/MyAddedVisa";
import MyVisaApplications from "../pages/MyVisaApplications";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allvisa',
                element: <AllVisa></AllVisa>,
            },
            {
                path: '/addvisa',
                element: <AddVisa></AddVisa>,
            },
            {
                path: '/my-added-visa',
                element: <MyAddedVisa></MyAddedVisa>,
            },
            {
                path: '/my-visa-applications',
                element: <MyVisaApplications></MyVisaApplications>,
            },
            {
                path: '/auth',
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login></Login>,
                    },
                    {
                        path: '/auth/register',
                        element: <Register></Register>,
                    },
                ]
            },
        ]
    }
])

export default router;