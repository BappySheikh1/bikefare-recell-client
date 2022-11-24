import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/login.png'
import { AuthContext } from '../../../contexts/AuthProvider';
import toast  from 'react-hot-toast';

const Login = () => {
const [error,setError]=useState('')
const [userEmail,setUserEmail]=useState('')
const {LoginUser,forgetUserPassword}=useContext(AuthContext)

const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";


const handleSubmitLogin=event=>{
    event.preventDefault();
    const form =event.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password);
    LoginUser(email,password)
    .then(result =>{
        const user =result.user
        console.log(user);
        navigate(from, { replace: true });
    })
}

const handleOnBlurEmail=event=>{
  setUserEmail(event.target.value)
}
const handleUserEmailForget=()=>{
  forgetUserPassword(userEmail)
    .then(()=>{
      return toast.success('forget Successfully Please check your email')
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
      <h1 className="text-4xl font-bold mx-auto mt-6 my-4">Login now!</h1>
      <form onSubmit={handleSubmitLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" onBlur={handleOnBlurEmail} name='email' placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="********" className="input input-bordered" />
          <label className="label">
            <Link onClick={handleUserEmailForget}  className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-700 hover:bg-blue-600 border-none rounded">Login</button>
        </div>
      </form>
      <div>
        <p className='text-red-700 my-2'>{error}</p>
      </div>
     <p className='text-center mb-7'>New to Please <Link className='text-red-300' to='/register'> Register</Link></p>   
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;