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
                path: 'allvisa/visa-details/:id',
                element: <PrivateRoute>
                    <VisaDetails></VisaDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/visa/${params.id}`)
            },
            {
                path: '/allvisa',
                element: <AllVisa></AllVisa>,
                loader: () => fetch('http://localhost:5000/visa')
            },
            {
                path: '/addvisa',
                element: <AddVisa></AddVisa>,
            },
            {
                path: '/my-added-visa',
                element: <MyAddedVisa></MyAddedVisa>,
                loader: () => fetch('http://localhost:5000/visa')
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