import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
const {user,LogOutUser} =useContext(AuthContext)

const handleLogOut=()=>{
  LogOutUser()
  .then(()=>{
   toast.success('Logout SuccessFull')
  })
  .catch(err =>{
    console.log(err);
  })
}

    const menuItem = (
      <React.Fragment>
        <li className="font-semibold hover:text-orange-700">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold hover:text-orange-700">
          <Link to="/blogs">Blog</Link>
        </li>
        {user?.uid ? (
          <>
            <li className="font-semibold hover:text-orange-700">
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li className="font-semibold hover:text-orange-700">
              <Link>
                <button onClick={handleLogOut}>Log Out</button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="font-semibold hover:text-orange-700">
              <Link to="/login">Log in</Link>
            </li>
          </>
        )}
        <li className="font-semibold hover:text-orange-700">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="font-semibold hover:text-orange-700">
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </React.Fragment>
    );
    return (
        <div>
           <div className="navbar bg-base-100 lg:px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
            menuItem
        }
      </ul> 
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
      {/* <img src={} className='w-24' alt="" /> */}
      Bikefair
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?
      <>
      <figure>
        <img style={{borderRadius:'50%',width:'30px'}} src={user?.photoURL} alt="" />
      </figure>
      </>
      :
      <>
       <FaUser />
      </>
    }
  <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden " >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
         </div>
        </div>
    );
};

export default Navbar;