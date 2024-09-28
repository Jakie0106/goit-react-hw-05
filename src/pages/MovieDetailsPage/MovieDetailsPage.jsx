import { useEffect, useRef, useState } from "react";
import { fetchMovieById } from "../../services/api";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

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
    <div>
      <Link to={goBack.current}>Go back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
        alt=""
      />
      <h1>{movieDetail.title}</h1>
      <p>Users score: {movieDetail.popularity}</p>
      <h2>Overview</h2>
      <p>{movieDetail.overview}</p>
      <h3>Genres</h3>
      <p>{movieDetail.genres.map((genre) => genre.name).join(", ")}</p>

      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
