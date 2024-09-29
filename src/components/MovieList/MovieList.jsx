import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import { Suspense } from "react";

const TrendMovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <div className={s.wrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className={s.list}>
          {movieList.map((movie) => (
            <li key={movie.id} className={s.listItem}>
              <Link to={`/movies/${movie.id.toString()}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default TrendMovieList;
