import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchSearchByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    const getSearchQuery = async () => {
      const data = await fetchSearchByQuery(query);

      const searchMovie = data.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(searchMovie);
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

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList movieList={filteredMovies} />
    </div>
  );
};

export default MoviesPage;
