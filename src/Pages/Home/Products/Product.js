import React from 'react';
import ProductModal from './ProductModal/ProductModal';

const Product = ({product}) => {
  
  // console.log(product);
  const {img,name,original_price,resell_price,used,location}=product
  // setProductModal(product)
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
                    <p className='text-red-600 font-bold'>Orginal Price: ${original_price}</p>
                    <p className='text-green-500 font-bold'>Selling Price: ${resell_price}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <a href="#my-modal-2" className="btn hover:bg-blue-800 bg-blue-700 border-none rounded-xl">Buy Now</a>
                  </div>
                </div>
             </div>
             <div>
          <ProductModal product={product} />
         </div>
        </div>
    );
};

export default Product;