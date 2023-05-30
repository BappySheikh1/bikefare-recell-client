import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { ImLocation } from 'react-icons/im';

const ContactUs = () => {
    return (
         <div className='lg:px-10 bg-black'>
            <div className=''>
                <img src='https://i.ibb.co/SwCnhbK/variant-color-image-160682555276344.png' alt="" className='w-full rounded-md h-[500px] '/>
            </div>
            
           <div className='lg:flex justify-between mx-auto px-3 lg:pb-16'>
            {/* section -1 */}
            <div className='md:w-1/3 mx-auto mb-4'>
                 <h1 className='text-white text-2xl font-semibold mb-5'>Contact Info :</h1>
                 <div className=' flex items-center'>
                    <FaPhone className='bg-orange-400 text-gray-200 font-bold w-10 h-10 p-1 rounded-md'/>
                    <span className='px-4 text-gray-400 font-bold'>
                        +8801 223 22323 <br />
                        +8801 223 22322
                    </span>
                 </div>

                 <div className='my-6 flex items-center'>
                    <CgMail className='bg-orange-400 text-gray-200 font-bold w-10 h-10 p-1 rounded-md'/>
                    <span className='px-4 text-gray-200 font-bold'>
                        Address@mailbox.com <br />
                        domain@mailbox.com
                    </span>
                 </div>

                 <div className=' flex items-center'>
                    <ImLocation className='bg-orange-400 text-gray-200 font-bold w-10 h-10 p-1 rounded-md'/>
                    <span className='px-4 text-gray-400 font-bold'>
                        
10 Stert , Jonathon Road, <br />
                       New York, USA
                    </span>
                 </div>
            </div>
            {/* section 2 */}
            <div className='w-full'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

           <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />
           
           <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
           
           <input type="text" name='rating' placeholder="Subject Of Massage" className="input input-bordered w-full " required/>
           
           <input type="text" name='email' placeholder="Your email" className="input input-bordered w-full "  />
           </div>

           <div className='my-7'>
           <label htmlFor="" className='text-lg text-white font-bold ml-2 '>Your message</label>
           <textarea className="textarea textarea-bordered h-24 w-full " name='message' placeholder="Your message" required></textarea>
           </div>

           <input type="submit" className='btn  text-white bg-[#eb9d37] border-none hover:bg-[#eb9d37]' value='Send Now'  />
           </div>
           </div>
        </div>
    );
};

export default ContactUs;