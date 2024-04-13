import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import './App.css';


const App = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Inception",
      image: "https://m.media-amazon.com/images/I/919mVr6ikcL._AC_UF1000,1000_QL80_.jpg",
      synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      rating: 4,
      reviews: [{ text: "Mind-blowing!" }]
    },
    {
      id: 2,
      title: "Interstellar",
      image: "https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg", 
      synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival...",
      rating: 5,
      reviews: [{ text: "Truly an epic sci-fi adventure." }]
    },
    {
      id: 3,
      title: "The Dark Knight",
      image: "https://ew.com/thmb/B0w9qzmQqCZ1tumxv8cBx0aPTrQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mcddakn_ec005-2000-a3d30c1958fb442486fb1e10ba92dd17.jpg",
      synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 5,
      reviews: [{ text: "Best Batman movie ever!" }]
  },
  {
    id: 4,
    title: "Avatar",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
    synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    rating: 4,
    reviews: [{ text: "Visually stunning and groundbreaking!" }]
 },
  ]);

  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
