import { useEffect, useRef, useState } from "react";
import { fetchMovieById } from "../../services/api";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import s from "./MovieDetailPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  const goBack = useRef(location.state ?? "/movies");
  console.log(location);
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    const getMovieDetail = async () => {
      const data = await fetchMovieById(movieId);
      setMovieDetail(data);
    };
    getMovieDetail();
  }, [movieId]);

  if (!movieDetail) return <h2>Loading...</h2>;

  return (
    <div className={s.wrapper}>
      <div className={s.goBack}>
        <Link to={goBack.current}>Go back</Link>
      </div>
      <div className={s.detailContainer}>
        <div>
          <img
            className={s.detailImg}
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt=""
          />
        </div>
        <div>
          <h1 className={s.movieName}>{movieDetail.title}</h1>
          <p className={s.score}>Users score: {movieDetail.popularity}</p>
          <h2 className={s.overview}>Overview</h2>
          <p className={s.overviewText}>{movieDetail.overview}</p>
          <h3 className={s.genres}>Genres</h3>
          <p className={s.genresText}>
            {movieDetail.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <div className={s.navWrapper}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
