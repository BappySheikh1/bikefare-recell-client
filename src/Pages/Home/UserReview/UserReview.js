import React from 'react';
import people1 from '../../../assets/Avatar/icon1 (1).jpg'
import people2 from '../../../assets/Avatar/icon1 (2).jpg'
import people3 from '../../../assets/Avatar/icon1 (3).jpg'
import Review from './Review';

const UserReview = () => {
    const Reviews=[
        {
            id:1,
            img:people1,
            name:"Winson Herry",
            location:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" ,
        },
        {
            id:2,
            img:people2,
            name:"Winson Herry",
            location:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" ,
        },
        {
            id:3,
            img:people3,
            name:"Winson Herry",
            location:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" ,
        },
    ]
    return (
        <div className='my-20 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                Reviews.map(review => <Review key={review.id} review={review}/>)
            }
        </div>
    );
};

export default UserReview;