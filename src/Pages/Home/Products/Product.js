import React from 'react';
import toast from 'react-hot-toast';
import { GoVerified } from 'react-icons/go';

const Product = ({product,setProductModal}) => {
  
  // console.log(product);
  const {img,name,original_price,resell_price,used,location,condition,description,time,sellerName,user_verify}=product

  const handleReportProduct =(product)=>{
  fetch(`http://localhost:4000/reported/${product._id}`,{
    method:"PUT",
    headers:{
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res=>res.json()).then(data=>{
   console.log(data);
   if(data.modifiedCount > 0){
    toast.success("reported successfully")
   }
  })

  }

 
    return ( 
        <div className='my-5' >
            <div className="card mx-auto shadow-xl ">
               <figure><img src={img} className='h-80' alt="bike"/></figure>
                <div className="card-body">
                  <h2 className="card-title my-3 font-bold">{name}</h2>
                  <div className='flex justify-between my-2'>
                  <p className="font-bold text-gray-600">Location: {location}</p>
                   <p className='text-gray-600 font-bold'>used: {used}yr</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-600 font-bold'>Posted Time: {time ? time : 'No posted time'}</p>
                    <p className='text-gray-600 font-bold'>Condition: {condition ? condition : 'excellent'}</p>
                  </div>
                   <div className='flex justify-between'>
                    <p className='text-blue-600 font-bold'>Orginal Price: ${original_price}</p>
                    <p className='text-green-500 font-bold'>Selling Price: ${resell_price}</p>
                  </div> 
                  {
                    user_verify ?
                    <p className='font-bold text-gray-400 flex items-center'>sellerName: <GoVerified className='text-blue-700 ml-2 mr-1'/>  {sellerName } </p> 
                    :
                    <p className='font-bold text-gray-400'>sellerName: {sellerName}</p>
                  }
                  <div>
                    {description ? description : 'no description'}
                  </div>
                  <div className="card-actions flex items-center justify-between">
                    <button onClick={()=>handleReportProduct(product)} className='btn btn-xs bg-blue-700 hover:bg-blue-700 border-none rounded-xl'>Report This Product</button>
                    <label onClick={()=>setProductModal({resell_price,name})} className="btn hover:bg-blue-800 bg-blue-700 border-none rounded-xl" htmlFor="my-modal-3" >Buy Now</label>
                  </div>
                </div>
             </div>
             <div>
          
         </div>
        </div>
    );
};

export default Product;