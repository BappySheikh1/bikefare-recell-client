import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({bookedItem}) => {
    const [cardError,setCartError]=useState('')
    const [clientSecret,setClientSecret]=useState('')
    const [success,setSuccess]=useState('')
    const [transactionId,setTransactionId]=useState('')
    const [processing ,setProcessing]=useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const {price,email,name,_id}=bookedItem
    // console.log(bookedItem);
    useEffect(()=>{
        fetch("https://assignment12-server-er299s0ta-bappysheikh1.vercel.app/create-payment-intent",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        }).then(res => res.json()).then(data =>{
         setClientSecret(data.clientSecret)
        })
    },[price])

  const handleSubmit =async (event)=>{
    event.preventDefault();
   
    if(!stripe || !elements){
      return
    }

    const card =elements.getElement(CardElement)

    if (card == null) {
        return;
      }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        // console.log(error);
        setCartError(error.message)
      }else{
        setCartError('')
      } 
      setSuccess('')
      setProcessing(true)
      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email: email
            },
          },
        },
      );
      if(confirmError){
        setCartError(confirmError.message)
        return
      }
      if(paymentIntent.status === "succeeded"){
        
        const payment ={
           price: price,
           transactionId :  paymentIntent.id,
           email: email,
           bookedItemId: _id
        }
        // store payment info
       fetch('https://assignment12-server-er299s0ta-bappysheikh1.vercel.app/payments',{
        method:"POST",
        headers:{
          "Content-type":"application/json",
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
       }).then(res => res.json()).then(data =>{
        // console.log(data);
        if(data.insertedId){
          setSuccess('Congrats! your payment completed');
          setTransactionId(paymentIntent.id);
          
        }
       })        
      }
      setProcessing(false)
  }

    return (
       <>
        <div>
              <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button 
      className='btn btn-xs mt-4 rounded-lg bg-blue-600 border-none hover:bg-blue-700'
       type="submit" 
       disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
        </div>
        <div>
            <p className='text-red-600'>{cardError}</p>
            {
              success && <div>
                <p className="text-green-500">{success}</p>
                <p>Your TransactionId: <span className='text-red-500'>{transactionId}</span></p>
              </div>
            }
        </div>
       </>
    );
};

export default CheckOutForm;