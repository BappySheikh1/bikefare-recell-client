import React from 'react';

const Product = ({product,setProductModal}) => {
  
  // console.log(product);
  const {img,name,original_price,resell_price,used,location,condition,description,time,sellerName}=product
 
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
                  <p className='font-bold text-gray-600'>sellerName: {sellerName}</p>
                  <div>
                    {description ? description : 'no description'}
                  </div>
                  <div className="card-actions justify-end">
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