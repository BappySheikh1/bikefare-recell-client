import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import {AuthContext} from '../../../contexts/AuthProvider'

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    
    // const {data: MyProducts = [],isLoading}=useQuery({
    //     queryKey:[user?.displayName],
    //     queryFn: async ()=>{ 
    //         const res = await fetch(`http://localhost:4000/addProduct_Category?sellerName=${user?.displayName}`)
    //         const data = await res.json()
    //         return data
    //     }
    // })
    // if(isLoading){
    //     return <div className='text-center my-9'>
    //     <button className="btn btn-square loading"></button>
    // </div>
    // }

    return (
        <div>
            <h2 className="text-3xl">This is My Products pages {MyProducts.length}</h2>
        </div>
    );
};

export default MyProducts;