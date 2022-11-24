import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const products =useLoaderData()
    // console.log(products);

    return (
        <div>
         <h3 className='text-5xl'>This is category page </h3>
         <div className='gap-5'>
            {
              products.map(product => <Product key={product._id} product={product}/>)
            }
         </div>
        </div>
    );
};

export default Products;