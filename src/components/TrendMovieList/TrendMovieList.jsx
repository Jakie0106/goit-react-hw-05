import { useEffect } from "react";
import { useState } from "react";
import { fetchTrendMovies } from "../../services/api";
import { Link, useLocation } from "react-router-dom";
import s from "./TrendMovieList.module.css";

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
    <div className={s.wrapper}>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.list}>
        {movieList.map((movie) => (
          <li key={movie.id} className={s.listItem}>
            <Link to={`movies/${movie.id.toString()}`} state={location}>
              <p className={s.listItemText}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendMovieList;
