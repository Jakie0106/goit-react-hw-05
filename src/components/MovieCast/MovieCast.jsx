import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCreditsById } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchCreditsById(movieId);
      setMovieCast(data);
    };
    getData();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      <ul className={s.castList}>
        {movieCast.map((cast) => (
          <li key={cast.id} className={s.castListItem}>
            <img
              className={s.castItemImg}
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt=""
            />
            <div className={s.castInfoCont}>
              <h2 className={s.castName}>{cast.name}</h2>
              <p className={s.castInfo}>{cast.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
