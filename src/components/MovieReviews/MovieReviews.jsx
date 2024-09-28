import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewsById(movieId);
      setMovieReview(data);
    };
    getData();
  }, [movieId]);

  if (!movieReview.length) {
    return <h2>We don`t have any reviews for this movie!</h2>;
  }

  return (
    <div>
      <ul>
        {movieReview.map((review) => (
          <li key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
