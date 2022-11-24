import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import ProductModal from './ProductModal/ProductModal';

const Products = () => {
 const [productModal,setProductModal]=useState({})
    const products =useLoaderData()
    console.log(productModal);

    return (
        <div>

         <div className='gap-5 grid grid-cols-1 md:grid-cols-2'>
            {
              products.map(product => <Product key={product._id} product={product} setProductModal={setProductModal}/>)
            }
         </div>

         <div>
          <ProductModal />
         </div>
        </div>
    );
};

export default Products;