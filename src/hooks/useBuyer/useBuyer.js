import React, { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setBuyer]=useState('')
    const [isBuyerLoading,setIsBuyerLoading]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:4000/users/buyer/${email}`)
            .then(res => res.json())
            .then(data =>{
                setBuyer(data.isBuyer)
                setIsBuyerLoading(false)
            })
        }
    },[email])
    return [isBuyer,isBuyerLoading]
};

export default useBuyer;