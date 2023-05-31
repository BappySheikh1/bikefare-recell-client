import React from 'react';


//  OUR SERVICE Component vul kore kore felchi
const Testimonial = () => {
    return (
      <div>
        <h2 className="text-start text-4xl font-bold leading-none lg:pl-5 sm:text-5xl mb-8">
          OUR SERVICES
        </h2>
        <section className=" dark:text-gray-100 my-5 mb-20 lg:px-5">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5  dark:text-gray-900"
            >
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="text-lg font-bold leading-snug">
                    Bike Restoration
                  </p>
                  <p className="leading-snug">
                    Restore the beauty and functionality of vintage bikes
                    through meticulous cleaning, repairs, and preservation of
                    their original character.
                  </p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="text-lg font-bold leading-snug">
                    Bike Customization
                  </p>
                  <p className="leading-snug">
                    Personalize your vintage bike with custom paintwork,
                    accessories, and unique modifications tailored to your
                    style.
                  </p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="text-lg font-bold leading-snug">
                    Bike Sourcing and Consultation
                  </p>
                  <p className="leading-snug">
                    We'll assist you in finding the perfect vintage bike,
                    offering expert guidance and access to a wide inventory
                    based on your preferences and budget.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos-duration="1500"
              data-aos="zoom-in-right"
              className="lg:w-1/3 xl:w-3/4 "
            >
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                  src="https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Testimonial;