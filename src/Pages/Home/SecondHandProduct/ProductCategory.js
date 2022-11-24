import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({product}) => {
    // console.log(product);
    const {img,name,category_id}=product
    return (
        <div>
            <div className="card card-compact shadow-2xl">
             <div className='h-72'>
             <figure><img src={img} alt="Shoes" /></figure>
             </div>
              <div className="card-body mt-3">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                  <Link to={`/product/${category_id}`}><button className='btn rounded-lg text-slate-300 hover:bg-slate-500 bg-slate-400 border-none'>Go Now</button></Link>
                </div>
              </div>
              </div>
        </div>
    );
};

export default ProductCategory;