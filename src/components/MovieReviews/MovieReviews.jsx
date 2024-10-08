import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";
import s from "./MovieReviews.module.css";

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
    <div className={s.wrapper}>
      <ul className={s.reviewsList}>
        {movieReview.map((review) => (
          <li key={review.id} className={s.reviewsItem}>
            <h2 className={s.reviewsTitle}>{review.author}</h2>
            <p className={s.reviewsText}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
