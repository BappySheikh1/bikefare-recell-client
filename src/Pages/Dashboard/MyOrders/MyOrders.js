import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider'
 
const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const {data:bookedItems = [],isLoading,refetch}=useQuery({
        queryKey:['bookedItem',user?.email],
        queryFn: async ()=>{
          const res = await fetch(`https://assignment12-server-er299s0ta-bappysheikh1.vercel.app/bookedItem?email=${user?.email}`,{
            headers:{
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
          })
          const data=await res.json()
          return data
        }
    })
    if(isLoading){
        return <div className='text-center my-9'>
            <button className="btn btn-square loading"></button>
        </div>
    }
    return (
        <div>
            <h4 className="text-3xl">My Orders Page {bookedItems.length}</h4>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>image</th>
        <th>Title</th>
        <th>price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
     
      {
        bookedItems?.map((bookedItem ,i)=> 
        <tr key={bookedItem._id}>
        <th>{i + 1}</th>
        <td>
        <div className="avatar">
          <div style={{width :'60px'}} className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL}  alt=''/>
          </div>
        </div>
        </td>
        <td>{bookedItem.productName}</td>
        <td>${bookedItem.price}</td>
          <td>
              {
                 bookedItem.price && !bookedItem.paid &&
                 <Link to={`/dashboard/payment/${bookedItem._id}`}>
                 <button className='btn btn-xs rounded-xl bg-blue-600 hover:bg-blue-600 border-none'>Pay</button>
                 </Link>
               }
               {
                bookedItem.price && bookedItem.paid && 
                <span className='btn btn-xs rounded-xl'>Paid</span>
               }
           </td>
            </tr>
      )
      }
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;