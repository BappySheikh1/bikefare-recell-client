import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    const error =useRouteError()
    return (
        <div className='ErrorPage flex flex-col justify-center items-center'>
           <h1 className='text-black text-4xl'>Ops! An Error Ocurred!</h1>
           {
            error && (
                <div>
                    <p className='text-red-600 text-2xl'>{error?.statusText || error?.message}</p>
                    <p className='text-red-600 text-2xl'>{error?.status}</p>
                    <Link to='/'><button className='btn btn-primary bg-blue-500 border-none rounded-xl'>Go Home page</button></Link>
                </div>
            )
           }
        </div>
    );
};

export default ErrorPage;