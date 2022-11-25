import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Home/Products/Products";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

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
        {
            path:'/product/:category_id',
            loader:({params})=>fetch(`http://localhost:4000/category/${params.category_id}`),
            element: <PrivateRoute><Products /></PrivateRoute> 
        },
    ]
   },

   {
    path:'/dashboard',
    errorElement: <ErrorPage />,
    element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute> ,
    children:[
        {
            path:'/dashboard',
            element: <PrivateRoute><MyOrders /></PrivateRoute>
        },
        {
            path:'/dashboard/addProduct',
            element: <AddProduct />
        },
        {
            path:'/dashboard/allUsers',
            element: <AllUsers />
        },

    ]
   }
])