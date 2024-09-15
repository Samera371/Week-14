import "./MovieList.css"; // Import the CSS for styling

import { Movie } from "../../types"; // Import the Movie type from the types file
import MovieCard from "../movie-card/MovieCard"; // Import the MovieCard component

// import { defaultMovies } from "../../data/movies"; // Example import for default movies (commented out)

// Define the props for the MovieList component
interface MovieListProps {
  movies: Movie[]; // Array of movie objects
  deleteMovie: (id: number) => void; // Function to delete a movie by its ID
}

// MovieList component definition
const MovieList = ({ movies, deleteMovie }: MovieListProps) => {
  return (
    <div className="movie-list">
      {/* Map through the movies array and render a MovieCard for each movie */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
};

export default MovieList; // Export the MovieList component as the default export
