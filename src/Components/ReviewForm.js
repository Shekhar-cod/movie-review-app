import React, { useState } from 'react';
// This Component is the form for adding a new review.//
const ReviewForm = ({ addReview }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
