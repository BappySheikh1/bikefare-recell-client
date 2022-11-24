import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import Location from './Location/Location';
import SecondHandProduct from './SecondHandProduct/SecondHandProduct';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <SecondHandProduct />
            <Location />
        </div>
    );
};

export default Home;