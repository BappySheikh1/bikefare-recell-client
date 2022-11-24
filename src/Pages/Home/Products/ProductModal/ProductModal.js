import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from "../../../../contexts/AuthProvider"

const ProductModal = ({product}) => {
    const {user}=useContext(AuthContext)
    const handleSubmit=(event)=>{
     event.preventDefault();
     const form=event.target
     const name=form.name.value
     const email=form.email.value
     const productName=form.productName.value
     const price=form.price.value
     const phone=form.phone.value
     const location=form.location.value
     const bookedItem={
        name: name,
        email:email,
        productName: productName,
        price: price,
        phone: phone,
        location:location,
     }
    //  console.log(bookedItem);
    fetch('http://localhost:4000/bookedItem',{
        method:"POST",
        headers:{
          "Content-type": "application/json"
        },
        body:JSON.stringify(bookedItem)
    })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.acknowledged){
          toast.success('That the item is booked')
        }
     })

    }
    return (
        <div>
          

<div className="modal" id="my-modal-2">
  <div className="modal-box">
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="User Name" name='name' disabled defaultValue={user?.displayName} className="input input-bordered w-full my-2 rounded text-center" />

    <input type="text" placeholder="User Email" name='email' defaultValue={user?.email} disabled className="input input-bordered w-full mb-2 rounded text-center" />

    <input type="text" placeholder="Items name" name='productName' defaultValue={product.name} disabled className="input input-bordered w-full mb-2 rounded text-center" />

    <input type="text" placeholder="price" name='price' disabled defaultValue={product.resell_price} className="input input-bordered w-full mb-2 rounded text-center" />

    <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered text-center w-full mb-2 rounded" />

    <input type="text" placeholder="Meet Location" name='location' className="input text-center input-bordered w-full mb-2 rounded" />

    <input type="submit" className='btn border-none bg-blue-700 rounded-lg w-full' value='Submit' />
    </form>

    <div className="modal-action">
     <a href="#" className="btn">Yay!</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductModal;