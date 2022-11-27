import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCategory from './ProductCategory';

const SecondHandProduct = () => {
    const {data:products =[],isLoading} = useQuery({ 
        queryKey: ['category'], 
        queryFn: async ()=>{
           const res=await fetch('https://assignment12-server-er299s0ta-bappysheikh1.vercel.app/category')
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
        <div className='my-28'>
            <div className='mb-7'>
                <h3 className='text-4xl font-semibold'>This Our selling products</h3>
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