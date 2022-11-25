import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data: Users = [],isLoading}=useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
        const res = await fetch(`http://localhost:4000/users`)
        const data = await res.json()
        return data
        }
    })
    if(isLoading){
        return <div className='text-center'>
           <button className="btn btn-square loading"></button>
        </div> 
    }
    return (
        <div>
            <h1 className="text-4xl">This is All Users page {Users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        Users.map((user,i)=>
         
      <tr key={i}>
      <th>{i +1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.select}</td>
      <td><button className='btn btn-xs bg-blue-700 hover:bg-blue-800 border-none rounded-lg'>Make Admin</button></td>
    </tr>
        )
       }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;