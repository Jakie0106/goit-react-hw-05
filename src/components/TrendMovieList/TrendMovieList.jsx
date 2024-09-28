import { useEffect } from "react";
import { useState } from "react";
import { fetchTrendMovies } from "../../services/api";
import { Link, useLocation } from "react-router-dom";

const TrendMovieList = () => {
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const getTrendMovie = async () => {
      const data = await fetchTrendMovies();
      setMovieList(data);
    };
    getTrendMovie();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id.toString()}`} state={location}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendMovieList;
