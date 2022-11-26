import React from 'react';

const AdvertisedItem = ({advItem}) => {
    const {img,name,resell_price}=advItem
    return (
        <div>
            <div className="card mx-auto bg-base-100 shadow-xl rounded-xl">
              <figure><img src={img} style={{height:"200px"}} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-center font-semibold'>Sell Price: ${resell_price}</p>
               
              </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;