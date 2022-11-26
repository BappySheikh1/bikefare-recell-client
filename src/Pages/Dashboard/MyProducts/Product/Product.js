import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteProductModal from './DeleteProductModal';

const Product = ({product,refetch}) => {
    // console.log(product);
    const [productDelete,setProductDelete]=useState(null)
    const {img,name,resell_price,sellerName,time}=product
  
    const closeModal=()=>{
      setProductDelete(null)
    }
   const handleProductDelete=(product)=>{
    // console.log("deleted product",product._id);
     fetch(`http://localhost:4000/myProduct/${product._id}`,{
      method:"DELETE",
      headers:{
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
     })
     .then(res => res.json())
     .then(data => {
      // console.log(data);
      if(data.deletedCount > 0){
        toast.success("deleted Successfully")
        refetch()
      }
     })
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mx-auto">
              <figure className="px-10  pt-10">
                <img src={img} alt="Shoes" style={{height:"300px"}} className="rounded-xl" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between'>
                <p className='font-bold text-blue-400'>sell Price:{resell_price}</p>
                <p className='font-bold text-blue-400'>sell Price:{resell_price}</p>
                </div>
                <div className='flex justify-between'>
                <p className='font-bold'>Seller Name: {sellerName}</p>
                 <button className='btn btn-xs bg-green-700 hover:bg-green-600 border-none rounded-lg'>
                 available 
                 </button>
                </div>
                <p className=''>Posted: {time}</p>
                <div className="card-actions justify-between mt-8">
                  <a href="#my-modal-2" onClick={()=> setProductDelete(product)} className="btn btn-xs rounded-lg bg-red-700 hover:bg-red-600 border-none">delete</a>
                  <button className="btn bg-blue-700 hover:bg-blue-600 border-none  rounded btn-xs">advertised</button>
                </div>
              </div>
            </div>
            <div>
{
    productDelete && <DeleteProductModal
    title={`Are you sure you want to delete?`}
    message={`If you delete ${productDelete.name}. It cannot be undone.`}
    successAction={handleProductDelete}
    data={productDelete}
    successButtonName='Delete'
    closeModal={closeModal}
    />
}
</div>
        </div>
    );
};

export default Product;