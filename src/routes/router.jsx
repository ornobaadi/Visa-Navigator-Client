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
import VisaDetails from "../pages/VisaDetails";
import PrivateRoute from "../routes/PrivateRoute";
import Users from "../components/Users";


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
                path: 'users',
                element: <Users></Users>,
                loader: () => fetch('https://visa-navigator-server-umber.vercel.app/users')
            },
            {
                path: 'allvisa/visa-details/:id',
                element: <PrivateRoute>
                    <VisaDetails></VisaDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://visa-navigator-server-umber.vercel.app/visa/${params.id}`)
            },
            {
                path: '/visa-details/:id',
                element: <PrivateRoute>
                    <VisaDetails></VisaDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://visa-navigator-server-umber.vercel.app/visa/${params.id}`)
            },
            {
                path: '/allvisa',
                element: <AllVisa></AllVisa>,
                loader: () => fetch('https://visa-navigator-server-umber.vercel.app/visa')
            },
            {
                path: '/addvisa',
                element: <PrivateRoute>
                    <AddVisa></AddVisa>
                </PrivateRoute>,
            },
            {
                path: '/my-added-visa',
                element: <PrivateRoute>
                    <MyAddedVisa></MyAddedVisa>
                </PrivateRoute>,
                loader: () => fetch('https://visa-navigator-server-umber.vercel.app/visa')
            },
            {
                path: '/my-visa-applications',
                element: <PrivateRoute>
                    <MyVisaApplications></MyVisaApplications>
                </PrivateRoute>,
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