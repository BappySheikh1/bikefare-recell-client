import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {
    const {data:bookedItems = [],isLoading,refetch}=useQuery({
        queryKey:['bookedItem'],
        queryFn: async ()=>{
          const res = await fetch(`http://localhost:4000/bookedItem`)
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
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;