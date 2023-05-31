import React from 'react';

const Galley = () => {
    return (
      <div>
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb- text-4xl font-bold leading-none text-center sm:text-5xl">
          OUR GALLERY
        </h2>
        <section data-aos-duration="1500" data-aos="zoom-out" className="py-6 ">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    );
};

export default Galley;