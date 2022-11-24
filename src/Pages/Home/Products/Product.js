import React from 'react';

const Product = ({product}) => {
  console.log(product);
  const {img,name,original_price,resel_price,used,location}=product
    return (
        <div className='my-5'>
            <div className="card card-side bg-base-100 shadow-xl">
           <figure><img src={img} alt="Movie"/></figure>
           <div className="card-body">
             <h2 className="card-title">{name}</h2>
             <p>Click the button to watch on Jetflix app.</p>
             <div className="card-actions justify-end">
               <button className="btn btn-primary">Watch</button>
             </div>
          </div>
          </div>
        </div>
    );
};

export default Product;