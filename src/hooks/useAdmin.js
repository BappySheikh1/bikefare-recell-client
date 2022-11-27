import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin]=useState('')
    const [isAdminLoading,setIsAdminLoading]=useState(true)
    useEffect(()=>{
        if(email){
          fetch(`https://assignment12-server-er299s0ta-bappysheikh1.vercel.app/users/admin/${email}`)
          .then(res => res.json())
          .then(data =>{
            setIsAdmin(data.isAdmin)
            setIsAdminLoading(false)
          })
        }
    },[email])
   return [isAdmin,isAdminLoading]
};

export default useAdmin;