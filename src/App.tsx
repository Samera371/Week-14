import "./App.css";

import MovieList from "./components/movie-list/MovieList";
import Navbar from "./components/nav/Navbar";
import { defaultMovies } from "./data/movies";

function App() {
  return (
    <div>
      <Navbar />
      <MovieList movies={defaultMovies} />
    </div>
  );
}

export default App;