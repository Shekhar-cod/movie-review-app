import React from 'react';
import Review from './Review';

//This ReviewList Componenent is container for 'Review' components.//
const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
