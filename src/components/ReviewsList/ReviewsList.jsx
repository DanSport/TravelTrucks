import PropTypes from 'prop-types';
import css from './ReviewsList.module.css';
import { Stars } from '../Stars/Stars';

export const ReviewsList = ({ reviews }) => {
  console.log({ reviews });
  return (
    reviews.length && (
      <ul className={css.list}>
        {reviews.map((review, idx) => (
          <li key={idx} className={css.listItem}>
            <div className={css.header}>
              <div className={css.avatar}>{review.reviewer_name[0]}</div>
              <div className={css.reviewer}>
                <p className={css.reviewAuthor}>{review.reviewer_name}</p>
                <p className={css.reviewRating}>
                  <Stars rating={review.reviewer_rating} />
                </p>
              </div>
            </div>
            <p className={css.reviewText}>{review.comment}</p>
          </li>
        ))}
      </ul>
    )
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};
