import axios from "axios";

// const userKEY = "43a760f897ca3f8a89faa88f636504b3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2E3NjBmODk3Y2EzZjhhODlmYWE4OGY2MzY1MDRiMyIsIm5iZiI6MTcyNzQyMDQwNS45NTMyMTUsInN1YiI6IjY2ZjY1NjY0YWE3ZTVmYTIwMjk2NWIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFFOksvCJCw08LOsk4yznCJqHwdu9Rc4JrlS4Gm2d7o",
  },
};
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    "trending/movie/day?language=en-US",
    options
  );

  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`, options);
  return data;
};

export const fetchCreditsById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, options);
  return data.cast;
};

export const fetchReviewsById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, options);
  return data.results;
};

export const fetchSearchByQuery = async (query) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&page=1`,
    options
  );
  return data.results;
};
