import "./MovieList.css";

import { Movie } from "../../types";
import MovieCard from "../movie-card/MovieCard";

// import { defaultMovies } from "../../data/movies";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;