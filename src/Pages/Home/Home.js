import React from "react";
import AdvertisedItems from "./AdvertisedItems/AdvertisedItems";
import HomeBanner from "./HomeBanner/HomeBanner";
import Location from "./Location/Location";
import SecondHandProduct from "./SecondHandProduct/SecondHandProduct";
import UserReview from "./UserReview/UserReview";
import AboutUs from "./About/AboutUs";
import Galley from "./Gallery/Galley";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <SecondHandProduct />
      <AboutUs />
      <AdvertisedItems />
      <Location />
      <Galley />
      <Testimonial />
      <WhyChooseUs />
      <UserReview />
    </div>
  );
};

export default Home;
