import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <div>
      <h2>Melhores avaliados:</h2>
      {topMovies.length > 0 &&
        topMovies.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <Link to={`/movie/${movie.id}`}>Detalhes</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
