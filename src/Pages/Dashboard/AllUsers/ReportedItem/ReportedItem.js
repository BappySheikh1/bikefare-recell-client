import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModalReportedItem from './DeleteModalReportedItem';

const ReportedItem = () => {
    const [deletingReportedItem,setDeletingReportedItem]=useState(null)
    const closeModal =()=>{
      setDeletingReportedItem(null)
     }
    const {data: reportedItems = [],isLoading,refetch}=useQuery({
        queryKey:["product_report"],
        queryFn: async()=>{
         const res = await fetch(`https://assignment12-server-er299s0ta-bappysheikh1.vercel.app/product_report`)
         const data =await res.json()
         return data
        }
    })
    if(isLoading){
        return <div className='text-center my-6'>
                 <button className="btn loading">loading</button>
               </div>
    }
  
    const handleDeleteReportItem =(report)=>{
      console.log(`delete reported product ${report._id}`);
      fetch(`https://assignment12-server-er299s0ta-bappysheikh1.vercel.app/reported/${report._id}`,{
        method:"DELETE"
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if(data.deletedCount > 0){
            toast.success("reported product deleted Successfully")
            refetch()
        }
      })
    }

    return (
        <div> 
            <h2 className="text-3xl">Reported page: {reportedItems.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Admin Action</th>
      </tr>
    </thead>
    <tbody>
     
     {
        reportedItems.map((report,i) =>  
        <tr key={report._id}>
            <th>{i+1}</th>
            <td>
            <div className="avatar">
               <div className="w-24 rounded-full   ring-offset-base-100 ring-offset-2">
               <img src={report.img} alt='' />
                </div>
           </div>
            </td>
            <td>{report.name}</td>
            <td>${report.resell_price}</td>
            <td>
                 <a href="#my-modal-2" onClick={()=> setDeletingReportedItem(report)} className="btn btn-xs rounded-lg bg-red-700 border-none">delete</a>
            </td>
          </tr>)
     }
     
    </tbody>
  </table>
</div>
<div> 
    {
        deletingReportedItem && <DeleteModalReportedItem
        title={`Are you sure you want to delete?`}
        message={`If you delete ${deletingReportedItem.name}. It cannot be undone.`}
        successAction={handleDeleteReportItem}
        data={deletingReportedItem}
        successButtonName='Delete'
        closeModal={closeModal}
        />
    }
</div>
        </div>
    );
};

export default ReportedItem;