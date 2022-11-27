import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItem = () => {
    const {data: reportedItems = [],isLoading,refetch}=useQuery({
        queryKey:["product_report"],
        queryFn: async()=>{
         const res = await fetch(`http://localhost:4000/product_report`)
         const data =await res.json()
         return data
        }
    })
    if(isLoading){
        return <div className='text-center my-6'>
                 <button className="btn loading">loading</button>
               </div>
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
        <tr>
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
                <button className='btn btn-xs bg-red-700 hover:bg-red-800 rounded-xl border-none'>Delete</button>
            </td>
          </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReportedItem;