import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller,setIsSeller]=useState('')
    const [isSellerLoading,setIsSellerLoading]=useState(true)
    useEffect(()=>{
        if(email){
         fetch(`http://localhost:4000/users/seller/${email}`)
         .then(res => res.json())
         .then(data =>{
            setIsSeller(data.isSeller)
         })
        }
    },[email])
    return [isSeller]
};

export default useSeller;