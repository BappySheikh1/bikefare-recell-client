import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import HomeBanner from './HomeBanner/HomeBanner';
import Location from './Location/Location';
import SecondHandProduct from './SecondHandProduct/SecondHandProduct';
import UserReview from './UserReview/UserReview'

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <SecondHandProduct />
            <Location />
            <AdvertisedItems />
            <UserReview />
        </div>
    );
};

export default Home;