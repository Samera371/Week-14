import "./MovieCard.css"; // Import the CSS for styling

import { Movie } from "../../types"; // Import the Movie type from the types file

// Define the props for the MovieCard component
interface MovieCardProps {
  movie: Movie; // The movie object containing details about the movie
  deleteMovie: (id: number) => void; // Function to delete a movie by its ID
}

// MovieCard component definition
const MovieCard = ({ movie, deleteMovie }: MovieCardProps) => {
  // Calculate the average rating of the movie
  const averageRating =
    movie.ratings.reduce((acc: number, rating: number) => acc + rating, 0) /
    movie.ratings.length;

  return (
    <div className="movie-card">
      {/* Display the movie's image */}
      <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />
      <div className="movie-card-content">
        {/* Display the movie's title */}
        <h3 className="movie-card-title">{movie.title}</h3>
        {/* Display the movie's release year */}
        <p className="movie-card-year">({movie.year})</p>
        {/* Display the movie's genres */}
        <p className="movie-card-genre">{movie.genre.join(", ")}</p>
        {/* Display a truncated description if it's too long */}
        <p className="movie-card-description">
          {movie.description.length > 100
            ? movie.description.substring(0, 100) + "..."
            : movie.description}
        </p>
        {/* Display the average rating of the movie */}
        <p className="movie-card-rating">
          Average Rating: {averageRating.toFixed(1)}
        </p>
        {/* Link to watch the movie's trailer */}
        <a
          href={movie.trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="movie-card-trailer-link"
        >
          Watch Trailer
        </a>
        {/* Button to delete the movie */}
        <div
          onClick={() => deleteMovie(movie.id)}
          className="movie-card-trailer-delete"
        >
          Delete Movie
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
