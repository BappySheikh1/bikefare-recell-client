import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AllBuyerDeleteModal from '../../DeleteModal/AllBuyerDeleteModal';

const AllBuyer = () => {
    const [deleteBuyer,setDeleteBuyer]=useState(null)
   
     
    const closeModal =()=>{
      setDeleteBuyer(null)
  }
    const  {data: Users = [],isLoading,refetch}=useQuery({
        queryKey:["userRole/buyer",],
        queryFn: async()=>{
           const res = await fetch(`http://localhost:4000/userRole/buyer`)
            const data =await res.json()
            return data;
        }
    })
    if(isLoading){
    return <div className='text-center my-9'>
             <button className="btn btn-square loading"></button>
           </div>
    }
    const handleMakeAdmin=(_id)=>{
        fetch(`http://localhost:4000/users/admin/${_id}`,{
         method:"PUT",
         headers:{
           authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
        }).then(res => res.json()).then(data =>{
        //  console.log(data);
         if(data.modifiedCount > 0){
           toast.success("Make Admin Successful")
           refetch()
         }
        })
      }
   
const handleDelete=(user)=>{
console.log('delete option',user._id);
fetch(`http://localhost:4000/userRole/buyer/${user._id}`,{
  method:"DELETE"
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if(data.deletedCount > 0){
    toast.success("Deleted Successfully")
    refetch()
    setDeleteBuyer(null)
  }
})

}

const handleMakeVerify=(_id)=>{

}
    return (
        <div>
            <h2 className='text-3xl'> All Buyer page</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Status</th>
        <th>Admin</th>
        <th>Admin Action</th>
      </tr>
    </thead>
    <tbody>
      
    {
        Users.map((user,i) => 
          <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name} </td>
            <td>{user.email}</td>
            <td>{user.select}</td>
            <td>
            {
              user?.role !== "Admin" ? 
              <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs bg-blue-700 hover:bg-blue-800 border-none rounded-lg'>Make Admin</button>
              :
              <button className='btn btn-xs bg-cyan-200 hover:bg-cyan-200 border-none rounded-lg'>Admin</button> 
           }
           </td>
            <td>
            <a href="#my-modal-2" onClick={()=> setDeleteBuyer(user)} className="btn btn-xs rounded-lg bg-red-700 border-none">delete</a>
            </td>
          </tr>)
    }
      
    </tbody>
  </table>
</div>
<div>
{
    deleteBuyer && <AllBuyerDeleteModal
    title={`Are you sure you want to delete?`}
    message={`If you delete ${deleteBuyer.name}. It cannot be undone.`}
    successAction={handleDelete}
    data={deleteBuyer}
    successButtonName='Delete'
    closeModal={closeModal}
    />
}
</div>
        </div>
    );
};

export default AllBuyer;