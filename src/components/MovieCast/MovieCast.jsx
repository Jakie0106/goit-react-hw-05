import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCreditsById } from "../../services/api";

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
    <div>
      <ul>
        {movieCast.map((cast) => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt=""
            />
            <h2>{cast.name}</h2>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
