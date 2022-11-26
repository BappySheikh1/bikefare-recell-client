import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import {AuthContext} from '../../../contexts/AuthProvider'
import Product from './Product/Product';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    
    const {data: MyProducts = [],isLoading,refetch}=useQuery({
        queryKey:["myProduct"],
        queryFn: async ()=>{ 
            const res = await fetch(`http://localhost:4000/myProduct?displayName=${user?.displayName}`)
            const data = await res.json()
            return data
        }
    })
    if(isLoading){ 
        return <div className='text-center my-9'>
        <button className="btn btn-square loading"></button>
    </div>
    }

    return (
        <div>
            <h2 className="text-3xl">This is My Products pages {MyProducts.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: gap-5 rounded-md my-10'> 
                {
                    MyProducts.map(product => <Product key={product._id} product={product} refetch={refetch}/>)
                }
            </div>
        </div>
    );
};

export default MyProducts;