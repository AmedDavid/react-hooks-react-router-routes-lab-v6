import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
// This code defines a React component for the home page of a movie application.
// It fetches a list of movies from a local server and displays them using the MovieCard component.
// The NavBar component is included for navigation, and the movies are displayed in a list format.
// The useEffect hook is used to fetch the movies when the component mounts.
// The movies are stored in the component's state using the useState hook.
// The component returns a header with the NavBar and a main section that displays the movies.