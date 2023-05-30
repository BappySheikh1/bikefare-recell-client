import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import HomeBanner from './HomeBanner/HomeBanner';
import Location from './Location/Location';
import SecondHandProduct from './SecondHandProduct/SecondHandProduct';
import UserReview from './UserReview/UserReview'
import AboutUs from './About/AboutUs';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <SecondHandProduct />
            <Location />
            <AdvertisedItems />
            <AboutUs />
            <UserReview />
        </div>
    );
};

export default Home;