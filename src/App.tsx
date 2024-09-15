import { Movie, NewMovie } from "./types"; // Import the Movie and NewMovie types

import MovieList from "./components/movie-list/MovieList"; // Import the MovieList component
import Navbar from "./components/nav/Navbar"; // Import the Navbar component
import { defaultMovies } from "./data/movies"; // Import the defaultMovies data
import { useState } from "react"; // Import the useState hook from React

function App() {
  // State to manage the list of movies
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);

  // Function to handle adding a new movie
  const handleAddMovie = (movie: NewMovie) => {
    const newMovie = {
      ...movie, // Spread the properties of the new movie
      id: movies.length + 1, // Assign a new unique ID based on the current length of the movies array
    };
    setMovies([...movies, newMovie]); // Update the state with the new movie added to the list
  };

  // Function to handle deleting a movie by its ID
  const handleDeleteMovie = (id: number) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id); // Filter out the movie with the given ID
    setMovies(updatedMovies); // Update the state with the filtered list of movies
  };

  return (
    <div>
      {/* Render the Navbar component and pass the handleAddMovie function as a prop */}
      <Navbar addMovie={handleAddMovie} />
      {/* Render the MovieList component and pass the movies array and handleDeleteMovie function as props */}
      <MovieList movies={movies} deleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App; // Export the App component as the default export
