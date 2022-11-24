import React from 'react';
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
            <UserReview />
        </div>
    );
};

export default Home;