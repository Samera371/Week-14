import { Movie, NewMovie } from "./types";

import MovieList from "./components/movie-list/MovieList";
import Navbar from "./components/nav/Navbar";
import { defaultMovies } from "./data/movies";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);

  const handleAddMovie = (movie: NewMovie) => {
    const newMovie = {
      ...movie,
      id: movies.length + 1,
    };
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id: number) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <div>
      <Navbar addMovie={handleAddMovie} />
      <MovieList movies={movies} deleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;