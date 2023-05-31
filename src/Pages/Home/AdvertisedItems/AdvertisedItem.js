import React from 'react';

const AdvertisedItem = ({advItem}) => {
    const {img,name,resell_price}=advItem
    return (
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="card mx-auto  shadow-xl rounded-xl"
        >
          <figure className="pt-3">
            <img src={img} style={{ height: "200px" }} alt="Shoes" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title text-black">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-center text-black font-semibold">
              Sell Price: ${resell_price}
            </p>
          </div>
        </div>
      </div>
    );
};

export default AdvertisedItem;