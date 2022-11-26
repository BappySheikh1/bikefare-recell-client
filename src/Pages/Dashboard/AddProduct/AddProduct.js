import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider'

const AddProduct = () => {
  const {user}=useContext(AuthContext)
  const navigate =useNavigate()
    const imageHostKey=process.env.REACT_APP_imgbb_key
    const handleAddService=event=>{
        event.preventDefault();
        const form =event.target
        const title =form.title.value;
        const condition =form.condition.value;
        const location =form.location.value;
        const purchasePrice =form.purchasePrice.value;
        const phone =form.phone.value;
        const salesPrice =form.salesPrice.value;
        const SellerName =form.SellerName.value;
        const category_id =form.category_id.value;
        const image =form.image.files[0]
        if(isNaN(salesPrice) || isNaN(phone) || isNaN(purchasePrice) || isNaN(category_id)){
          return toast.error('please provide a number in salesPrice or purchasePrice or phone field',{autoClose: 800})
        }
        const message =form.message.value;
        const date =new Date()
      //  console.log(title,condition,location,purchasePrice,phone,salesPrice,message,image,category_id);
       const formData=new FormData()
         formData.append('image',image)
         const uri =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
         fetch(uri,{
           method:"POST",
           body: formData
        })
        .then((res)=>res.json())
        .then(data =>{
        //  console.log(data.data.url);
         if(data?.success){

          const userInfo={
            category_id: category_id,
            img: data?.data?.url,
            name: title,
            original_price: purchasePrice,
            location: location,
            resell_price : salesPrice,
            used: 3,
            time: date.toLocaleString(),
            description: message,
            condition: condition,
            sellerName:SellerName,
          } 

          fetch('http://localhost:4000/addProduct_Category',{
            method:"POST",
            headers:{
              "content-type" : "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data =>{
          // console.log(data);
            form.reset();
            if(data.acknowledged){
               toast.success('Product added successfully',{autoClose: 500})
               navigate('/dashboard/myProducts')
              }
        })

         }
        }) 
    }
    return (
        <div> 
          <h2 className="text-4xl text-center my-2 text-bold">Add A Product</h2>
            <div className='my-5 lg:px-20'>
       
       <form onSubmit={handleAddService}>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Product Title</label>
       <input type="text" name='title' placeholder="Service title" className="input input-bordered w-full " />
       </div>
       
       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Purchase  Price</label>
       <input type="text" name='purchasePrice' placeholder="Purchase Price Product" className="input input-bordered w-full " />
       </div>

       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Condition</label>
       <input type="text" name='condition' placeholder="Product Condition" className="input input-bordered w-full " />
       </div>
       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Phone Number</label>
       <input type="text" name='phone' placeholder="your Phone Number" className="input input-bordered w-full " />
       </div>
       
       <div>
        <label htmlFor="" className='text-lg  font-bold ml-2 '>Location</label>
       <input type="text" name='location' placeholder="Your Location" className="input input-bordered w-full " required/>
       </div>
       
       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Sales Price</label>
       <input type="text" name='salesPrice' placeholder="Sales price"  className="input input-bordered w-full "  />
       </div>

       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Category Id</label>
       <input type="text" name='category_id' placeholder="Category Id for product 1 or 2 or 3"  className="input input-bordered w-full "  />
       </div>

       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Seller Name</label>
       <input type="text" name='SellerName' placeholder="Category Id for product 1 or 2 or 3" defaultValue={user?.displayName}   className="input input-bordered w-full "  />
       </div>

       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Product Image</label>
       <input type="file" name='image' placeholder="Sales price"  className="input mt-2 w-full "  />
       </div>

       </div>

       <div className='my-7'>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Your message</label>
       <textarea className="textarea textarea-bordered h-24 w-full " name='message' placeholder="Your Description" required></textarea>
       </div>

       <input type="submit" className='btn w-full text-white bg-blue-600 border-none hover:bg-blue-700 rounded-lg' value='Please Added Product'  />
       </form>
        </div>
        </div>
    );
};

export default AddProduct;