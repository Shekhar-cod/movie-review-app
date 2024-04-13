import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

// This Component represents a single movie with its data, reviews and review form.//
const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);
  const [rating, setRating] = useState(movie.rating);

  const addReview = (text) => {
    const newReview = { text };
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={rating} onRate={setRating} />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Movie;
