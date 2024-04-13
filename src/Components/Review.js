import React from 'react';

//This component Displays an individual review//
const Review = ({ review }) => {
  return (
    <div className="review">
      <p>{review.text}</p>
    </div>
  );
};

export default Review;
