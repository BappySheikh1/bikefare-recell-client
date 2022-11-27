import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer/useBuyer';
import useSeller from '../hooks/useSeller/useSeller';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
  const {user}=useContext(AuthContext)
  const [isBuyer]=useBuyer(user?.email)
  const [isSeller]=useSeller(user?.email)
  const [isAdmin]=useAdmin(user?.email)
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80   text-base-content">
      {/* <!-- Sidebar content here --> */}
      
       
         {
          isBuyer && 
         <li><Link className='font-semibold' to='/dashboard/myOrders'>My Orders</Link></li>
         }
       
       
       {
        isSeller && <>
        <li><Link className='font-semibold' to='/dashboard/addProduct'>Add A Product</Link></li>
        <li><Link className='font-semibold' to='/dashboard/myProducts'>My Products</Link></li>
        </>
       }
      {
        isAdmin && <>
        <li><Link className='font-semibold' to='/dashboard/allUsers'>All Seller</Link></li>
        <li><Link className='font-semibold' to='/dashboard/allBuyer'>All Buyer</Link></li>
        <li><Link className='font-semibold' to='/dashboard/ReportedItems'>Reported Items</Link></li>
        </>
      }
    </ul>
  
  </div>
</div>
           
        </div>
    );
};

export default DashboardLayout;