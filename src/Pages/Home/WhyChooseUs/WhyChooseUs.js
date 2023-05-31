import React from "react";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

const WhyChooseUs = () => {
  const whyChoose = [
    {
      id: 1,
      name: "Extensive Selection",
      avatar:
        "https://images.squarespace-cdn.com/content/v1/5e831d00b13b87280a18820a/1607743558711-1I9DKVK2OZT985KXBL39/image-asset.octet-stream?format=500w",
      description:
        "Discover a diverse and curated collection of vintage bikes, ranging from classic road bikes to stylish cruisers. We offer an extensive selection to cater to every vintage bike enthusiast.",
    },
    {
      id: 2,
      name: "Trusted Sellers",
      avatar:
        "https://images.squarespace-cdn.com/content/v1/5e831d00b13b87280a18820a/1607742242612-OQ57PEI0K0HD5LT578SA/IMG_20200610_0003s.jpg",
      description:
        "Rest assured knowing that our platform is home to trusted sellers who have been carefully vetted. Our community consists of passionate bike enthusiasts who take pride in offering quality bikes.",
    },
    {
      id: 3,
      name: "Secure Transactions",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Fg2OzM1YToyixydoDEDV1L0wWwYYtrxMNgnLyH4GM0cMICkuRyLHdiYH1mddTkYCIWM&usqp=CAU",
      description:
        " Your safety is our top priority. We provide a secure payment system and verify the identities of all users, ensuring secure transactions and peace of mind throughout the buying and selling process.",
    },
    {
      id: 4,
      name: "Expert Advice",
      avatar:
        "https://i.pinimg.com/236x/fa/1c/6f/fa1c6f99f14102d25a10e5799f726e80.jpg",
      description:
        "Benefit from the knowledge and expertise of our seasoned bike enthusiasts. Our platform fosters a supportive community where you can seek advice, learn about bike history, and make informed purchasing decisions.",
    },
    {
      id: 5,
      name: "User-Friendly Experience",
      avatar:
        "https://i.pinimg.com/236x/4d/23/5a/4d235adec7895e8cb5733d4854480946.jpg",
      description:
        "Enjoy a seamless and user-friendly experience on our website. Our intuitive interface and streamlined navigation make it easy to browse, search, and connect with sellers, ensuring a smooth buying experience.",
    },
  ];

  return (
    <div>
      <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
        Because We are ultra creative agency
      </p>
      <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
        WHY CHOOSE US
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {whyChoose?.map((choose) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={choose.id}
            className=""
          >
            <figure className="px-10 ">
              <MdOutlinePrecisionManufacturing className="text-3xl mx-auto rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{choose.name}</h2>
              <p className="text-justify">{choose.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
