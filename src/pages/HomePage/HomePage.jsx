import { useEffect, useState } from "react";
import TrendMovieList from "../../components/TrendMovieList/TrendMovieList";
import { fetchTrendMovies } from "../../services/api";

const HomePage = () => {
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
      <h2 className="mainTitle">Trending today</h2>
      <TrendMovieList movieList={movieList} />
    </div>
  );
};

export default HomePage;
