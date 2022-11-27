import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {  Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);
// console.log(stripePromise);
const Payment = () => {
    const bookedItem =useLoaderData()
    // console.log(bookedItem);
    return (
        <div>
            <h3 className="text-3xl">Payment for: {bookedItem.productName}</h3>
             <p className='font-bold mt-5'>Please Pay: {bookedItem.price}</p>
             <div className='w-96 my-12'>
             <Elements stripe={stripePromise}>
                <CheckOutForm 
                bookedItem={bookedItem}
                />
             </Elements>
             </div>
        </div>
    );
};

export default Payment;