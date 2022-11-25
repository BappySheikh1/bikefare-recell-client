import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products =useLoaderData()
    

    return (
        <div>

         <div className='gap-5 grid grid-cols-1 md:grid-cols-2'>
            {
              products.map(product => <Product key={product._id} product={product} />)
            }
         </div>
        </div>
    );
};

export default Products;