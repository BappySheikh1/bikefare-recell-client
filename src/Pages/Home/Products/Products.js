import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import ProductModal from './ProductModal/ProductModal';

const Products = () => {
    const products =useLoaderData()
    const [product,setProductModal]=useState(null)
    
    return (
        <div>

         <div className='gap-5 grid grid-cols-1 md:grid-cols-2'>
            {
              products.map(product => <Product setProductModal={setProductModal} key={product._id} product={product} />)
            }
         </div>
         <div>
          {
            product &&
            <ProductModal product={product} setProductModal={setProductModal}></ProductModal>
          }
         </div>
        </div>
    );
};

export default Products;