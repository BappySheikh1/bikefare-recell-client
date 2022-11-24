import React, { useEffect, useState } from 'react';
import ProductCategory from './ProductCategory';

const SecondHandProduct = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/category')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setProducts(data)
        })
    },[])
    return (
        <div className='my-28'>
            <div className='mb-7'>
                <h3 className='text-4xl font-semibold'>This your selling products</h3>
            </div>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map((product,_id) => <ProductCategory key={_id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default SecondHandProduct;