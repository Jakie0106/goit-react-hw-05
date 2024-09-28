import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useMemo, useState } from "react";
import { fetchSearchByQuery } from "../../services/api";
import TrendMovieList from "../../components/TrendMovieList/TrendMovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [movieSearchQuery, setMovieSearchQuery] = useState([]);
  useEffect(() => {
    const getSearchQuery = async () => {
      const data = await fetchSearchByQuery(query);
      setMovieSearchQuery(data);
    };
    getSearchQuery();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }

    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const searchMovie = useMemo(
    () =>
      movieSearchQuery?.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, movieSearchQuery]
  );

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <TrendMovieList movieList={searchMovie} />
    </div>
  );
};

export default MoviesPage;
