import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllUsers/AllBuyer/AllBuyer";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ReportedItem from "../Pages/Dashboard/AllUsers/ReportedItem/ReportedItem";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Home/Products/Products";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from './SellerRoute/SellerRoute';

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
            element:  <MyOrders /> 
        },
        {
            path:'/dashboard/addProduct',
            element: <SellerRoute><AddProduct /> </SellerRoute>
            
        },
        {
            path:'/dashboard/myProducts',
            element: <SellerRoute> <MyProducts /></SellerRoute>
        },
        {
            path:'/dashboard/allUsers',
            element: <AdminRoute><AllUsers /></AdminRoute> 
        },
        {
          path:"/dashboard/allBuyer",
          element: <AdminRoute><AllBuyer /></AdminRoute>
        },
        {
          path:"/dashboard/ReportedItems",
          element: <AdminRoute><ReportedItem /></AdminRoute>
        },
    ]
   }
])