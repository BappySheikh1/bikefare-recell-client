import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/login.png'
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const [error,setError]=useState('') 
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const imageHostKey=process.env.REACT_APP_imgbb_key

    const handleSubmitRegister=event=>{
        event.preventDefault();
        const form =event.target
        const name=form.name.value
        const photo=form.photo.files[0]
        const email=form.email.value
        const password=form.password.value
        console.log(email,password,name,photo);
        const formData=new FormData()
        formData.append('image',photo)
        const uri =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(uri,{
          method:"POST",
          body: formData
       })
       .then((res)=>res.json())
       .then(data =>{
        console.log(data.data.url);
       })

        createUser(email,password)
        .then(result =>{
            const user =result.user
            console.log(user);
        }) 
    }

    return (
        <div>
        <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <img src={logo} alt="" />
    </div>
    <div className="rounded card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-4xl font-bold mx-auto mt-6 my-4">Register now!</h1>
      <form onSubmit={handleSubmitRegister} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" name='photo' placeholder="image"  />
        </div>

        <select className="select select-accent w-full max-w-xs">
           <option disabled selected>Dark mode or light mode?</option>
           <option>Dark mode</option>
           <option>Light mode</option>
        </select>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="********" className="input input-bordered" />
          <label className="label">
            <Link className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-700 hover:bg-blue-600 border-none rounded">Login</button>
        </div>
      </form>
      <div>
        <p className='text-red-700 my-2'>{error}</p>
      </div>
     <p className='text-center mb-7'>Already have an account <Link className='text-red-300' to='/login'> Login</Link></p>   
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;