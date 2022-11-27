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
            name:"Steve Herry",
            location:"California",
            description: "This page is very good man's product sale, I have benefited from this product, you can also take it" ,
        },
        {
            id:2,
            img:people2,
            name:"Neymar Jr",
            location:"Brazil",
            description: "This page is very good man's product sale, I have benefited from this product, you can also take it" ,
        },
        {
            id:3,
            img:people3,
            name:"Alison Baker",
            location:"California",
            description: "This page is very good man's product sale, I have benefited from this product, you can also take it" ,
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