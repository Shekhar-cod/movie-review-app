import React from 'react';
// this component allows us to rate movie from 1 to 5 stars//
const Stars = ({ rating, onRate }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            className={index <= rating ? 'on' : 'off'}
            onClick={() => onRate(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
