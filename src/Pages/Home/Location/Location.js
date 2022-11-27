import React from 'react';
import watch from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import call from '../../../assets/icons/phone.svg'

const Location = () => {
    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5  mt-10 text-white'>
           <div className="card p-6 md:card-side  bg-[#001d3d] shadow-xl">
              <figure><img src={watch} alt="Movie"/></figure>
               <div className="card-body">
                 <h2 className="card-title">24 Hours Service</h2>
                 <p>Open 12.00 am to 12.00 pm everyday</p>
             </div>
           </div>

            <div className="card p-6 md:card-side bg-[#001d3d] shadow-xl">
            <figure><img src={location} alt="Movie"/></figure>
            <div className="card-body">
             <h2 className="card-title"> Our location</h2>
              <p>Khulna,Narail, Bangladesh.</p>
           </div>
            </div>

            <div className="card p-6 md:card-side bg-[#001d3d]  shadow-xl">
             <figure><img src={call} alt="Movie"/></figure>
             <div className="card-body">
             <h2 className="card-title">Contact us now!</h2>
              <p>+000 123 456789.</p>
             </div>
           </div>
        </div>
        </div>
    );
};

export default Location;