import "./MovieCard.css"; // Import the CSS for styling

import { Movie } from "../../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  // Calculate average rating
  const averageRating =
    movie.ratings.reduce((acc: number, rating: number) => acc + rating, 0) /
    movie.ratings.length;

  return (
    <div className="movie-card">
      <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-year">({movie.year})</p>
        <p className="movie-card-genre">{movie.genre.join(", ")}</p>
        <p className="movie-card-description">
          {movie.description.length > 100
            ? movie.description.substring(0, 100) + "..."
            : movie.description}
        </p>
        <p className="movie-card-rating">
          Average Rating: {averageRating.toFixed(1)}
        </p>
        <a
          href={movie.trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="movie-card-trailer-link"
        >
          Watch Trailer
        </a>
      </div>
    </div>
  );
};

export default MovieCard;