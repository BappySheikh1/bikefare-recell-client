import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/login.png'
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken/useToken';

const Register = () => {
    const [error,setError]=useState('') 
    const {createUser,updateUserProfile,socialLoginUser}=useContext(AuthContext)
    // const imageHostKey=process.env.REACT_APP_imgbb_key
    const [createUserEmail,setCreateUserEmail]=useState('')
    const [token]=useToken(createUserEmail)
    const navigate =useNavigate();

    if(token){
      navigate('/')
    }

    const handleSubmitRegister=event=>{
        event.preventDefault();
        const form =event.target
        const name=form.name.value
        const photo=form.photo.value
        const select=form.select.value
        const email=form.email.value
        const password=form.password.value
        // console.log(select);
      //   const formData=new FormData()
      //   formData.append('image',photo)
      //   const uri =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
      //   fetch(uri,{
      //     method:"POST",
      //     body: formData
      //  })
      //  .then((res)=>res.json())
      //  .then(data =>{
      //   console.log(data.data.url);
      //  })

        createUser(email,password)
        .then(result =>{
            const user =result.user
            console.log(user);
            handleUpdateProfile(name,photo)
            form.reset();
           
             const userInfo={
              name:name,
              email: email,
              select:select
            }
            fetch('http://localhost:4000/users',{
              method: "POST",
              headers:{
                "Content-type":"application/json"
              },
              body: JSON.stringify(userInfo)
            })
            .then(res =>res.json())
            .then(data=>{
              // console.log(data);
              if(data){
                setCreateUserEmail(email)
              }
            })


        }) 
        .catch(err=>{
          setError(err.message)
        })
    }
    const handleUpdateProfile=(name,photoURL)=>{
       const provider={
        displayName: name,
        photoURL:photoURL
       }
       updateUserProfile(provider)
       .then(()=>{

       })
       .catch(err =>{
        console.log(err);
       })
    }

    const handleGoogleLogIn=()=>{
      socialLoginUser()
      .then(result =>{
        const user =result.user
        console.log(user);
      })
      .catch(err =>{
        console.log(err);
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
          <input type="text" name='photo' placeholder="photoURL" className="input input-bordered" />
        </div>

        <select name='select' className="select mt-3 w-full max-w-xs input input-bordered">
           <option defaultValue='Select your position' disabled >Select your position</option>
           <option defaultValue='none' >None</option>
           <option defaultValue='Buyer' >Buyer</option>
           <option defaultValue='seller'>Seller</option>
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
        <p className='text-red-700 my-2'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-700 hover:bg-blue-600 border-none rounded">Login</button>
        </div>
      </form>
      <div className='text-center'>
        <button onClick={handleGoogleLogIn} className='btn btn-outline rounded-lg'>Google Login</button>
      </div>
     <p className='text-center mb-7'>Already have an account <Link className='text-red-300' to='/login'> Login</Link></p>   
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;