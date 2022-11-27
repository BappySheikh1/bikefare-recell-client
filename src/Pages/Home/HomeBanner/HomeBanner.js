import React from 'react';
import './HomeBanner.css'


const HomeBanner = () => {
    return (
        <section className='banner-container showcase flex items-center  justify-center text-white'>
             <div className='overlay'>
             <h1 className='text-4xl mt-48  font-bold'>Resell Market Place</h1>
              <p className=' font-semibold'>           
            This is an old bike selling and buying website, <br /> you can sell your old bike here,  and if you want <br /> to buy, you can buy a good quality bike at a low price.
                  </p>
             </div>
        </section>
    );
};

export default HomeBanner;