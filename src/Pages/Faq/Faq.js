import React from 'react';

const Faq = () => {
    return (
      <div>
        <div className="lg:px-10 bg-black">
          <img
            src="https://i.ibb.co/SwCnhbK/variant-color-image-160682555276344.png"
            alt=""
            className="w-full rounded-md h-[500px] "
          />
        </div>
        <section className=" bg-black text-white">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              How it works
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              <div>
                <h3 className="font-semibold">
                  How can I sell my old bike on your platform?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  Selling your old bike is easy! Simply create an account,
                  provide accurate details and images of your bike, set a
                  competitive price, and list it on our platform. Interested
                  buyers can then reach out to you directly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Are there any fees involved in selling a bike?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  Listing your bike on our platform is free of charge. However,
                  we charge a small commission fee on the final sale price when
                  your bike is successfully sold. Our fee structure is
                  transparent, and you will be informed of the exact amount
                  before confirming the sale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Can I negotiate the price with the seller?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  Yes, negotiating the price is a common practice. Our platform
                  allows open communication between buyers and sellers. Feel
                  free to discuss the price or any other details directly with
                  the seller to reach a mutually beneficial agreement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  {" "}
                  Do you provide shipping services for purchased bikes?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  We do not provide shipping services directly. However, we
                  assist buyers and sellers in arranging shipping options. You
                  can discuss shipping details with the seller and choose a
                  suitable shipping method, ensuring the safe delivery of your
                  purchased bike.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Faq;