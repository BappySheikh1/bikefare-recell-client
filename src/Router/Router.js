import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

export const router =createBrowserRouter([
   {
    path:'/',
    element: <Main />,
    errorElement:<ErrorPage /> ,
    children:[
        {
            path:'/',
            element:<Home /> ,
        },
        {
            path:'/login',
            element: <Login />
        },
        {
            path:'/register',
            element:<Register />
        },
        {
            path:'/blogs',
            element:<Blogs />
        },
    ]
   },

   {
    path:'/dashboard',
    errorElement: <ErrorPage />,
    element: <DashboardLayout></DashboardLayout>,
    children:[
        {
            path:'dashboard',
            element: <Dashboard />
        }
    ]
   }
])