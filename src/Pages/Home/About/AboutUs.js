import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
                 <div className="my-2 lg:px-5">
  <div className="lg:flex items-center justify-center lg:justify-around">
    <img src="https://i.ibb.co/SwCnhbK/variant-color-image-160682555276344.png" className="mx-auto rounded-md" alt='' />
    <div className='lg:px-5 px-2 py-2'>
      <h3 className="text-xl font-bold">ABOUT US</h3>
      <h1 className='text-4xl my-2 font-semibold uppercase'>Welcome to Vintage Bikes Marketplace</h1>
      <p className="py-2 text-xl">At Vintage Bikes Marketplace, we are passionate about connecting vintage bike enthusiasts with their dream rides. We understand the thrill and nostalgia that comes with owning a classic bike and believe that every bike has a story to tell. Our mission is to provide a platform where buyers and sellers can come together to discover, trade, and cherish these timeless treasures.</p>
      <h1 className='text-4xl my-2 font-semibold uppercase'> </h1>
      <p className="py-2 text-xl">Whether you're a seasoned collector, a casual rider, or someone looking to embark on your first vintage bike adventure, Vintage Bikes Marketplace welcomes you to join our community. Discover the joy of owning a piece of cycling history and explore our ever-growing selection of remarkable vintage bikes. Start your journey today and let the timeless allure of vintage bikes ignite your passion for the open road..</p>

      <button className="btn  my-2"><Link to="/contactUs">Contact Us</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;