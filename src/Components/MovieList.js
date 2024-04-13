import React from 'react';
import Movie from './Movie';

//This Component is Container for all 'Movie' components.//
const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
