import React from 'react';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Testimonial and User review Component 

const UserReview = () => {
    
    return (
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="lg:h-[700px] w-full text-white p-10 "
      >
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          TESTIMONIALS
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          CLIENTS FEEDBACKS
        </h2>

        <Swiper
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              id="item1"
              className="flex flex-col w-full p-10 lg:p-20 text-center"
            >
              <p className="text-white text-center font-semibold mt-4">
                Vintage Bikes Marketplace is a vintage bike enthusiast's dream!
                The selection is incredible, the interface is user-friendly, and
                the attention to detail is commendable. Safety measures provide
                peace of mind. Highly recommended for anyone seeking their
                perfect vintage ride!
              </p>

              <div className=" mt-16">
                <img
                  src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/avatar/t-avatar-1.jpg"
                  className="rounded-xl mx-auto"
                  alt=""
                />
                <div className="ml-3 text-gray-300">
                  <h5 className="text-xl font-semibold">Olivia Martin</h5>
                  <p className="font-semibold">Guest review</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}
          <SwiperSlide>
            <div
              id="item1"
              className="flex flex-col w-full p-10 lg:p-20 text-center"
            >
              <p className="text-gray-300 text-center font-semibold mt-4">
                Vintage Bikes Marketplace is a vintage bike lover's paradise!
                The selection is fantastic, and the user-friendly interface
                makes browsing a breeze. The platform's safety measures inspire
                confidence, and I highly recommend it to anyone in search of
                their dream vintage bike.
              </p>

              <div className=" mt-16">
                <img
                  src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/avatar/t-avatar-2.jpg"
                  className="rounded-xl mx-auto"
                  alt=""
                />
                <div className="ml-3 text-gray-300">
                  <h5 className="text-xl font-semibold">Olivia Martin</h5>
                  <p className="font-semibold">Guest review</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}
          <SwiperSlide>
            <div
              id="item1"
              className="flex flex-col w-full p-10 lg:p-20 text-center"
            >
              <p className="text-gray-300 text-center font-semibold mt-4">
                Vintage Bikes Marketplace is a vintage bike lover's paradise!
                The selection is fantastic, and the user-friendly interface
                makes browsing a breeze. The platform's safety measures inspire
                confidence, and I highly recommend it to anyone in search of
                their dream vintage bike.
              </p>

              <div className=" mt-16">
                <img
                  src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/avatar/t-avatar-3.jpg"
                  className="rounded-xl mx-auto"
                  alt=""
                />
                <div className="ml-3 text-gray-300">
                  <h5 className="text-xl font-semibold">Olivia Martin</h5>
                  <p className="font-semibold">Guest review</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default UserReview;