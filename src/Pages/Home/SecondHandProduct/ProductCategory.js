import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({product}) => {
    console.log(product);
    const {img,name,category_id}=product
    return (
        <div>
            <div className="card card-compact shadow-xl">
  <figure><img src={product.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <Link to={`/product/${category_id}`}><button className='btn'>category</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCategory;