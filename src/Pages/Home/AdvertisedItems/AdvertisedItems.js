import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {
    const {data:AdvItems = [],isLoading,refetch}=useQuery({
        queryKey:["advertised"],
        queryFn: async ()=>{
            const res =await fetch(`https://assignment12-server-er299s0ta-bappysheikh1.vercel.app/advertised`)
            const data =await res.json()
            return data
        }
    })
    if(isLoading){
        return <div className='text-center my-20'>
        <button className="btn btn-square loading"></button>
    </div>
    }
    return (
        <div>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl uppercase">Advertised Items: {AdvItems.length}
</h2>
          {
            AdvItems.length > 0 &&
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
            {
                AdvItems.map(advItem => <AdvertisedItem key={advItem._id} advItem={advItem}/>)
            }
           </div> 
          }
        </div>
    );
};

export default AdvertisedItems;