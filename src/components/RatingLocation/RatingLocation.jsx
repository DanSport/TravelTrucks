import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import starOnIcon from '../../assets/icons/star-on.png';
import locationIcon from '../../assets/icons/location.png';
import css from './RatingLocation.module.css';

export const RatingLocation = ({ id, rating = 0, reviewsCount = 0, location = null }) => {
  return (
    <div className={css.subtitleRow}>
      {!!rating && (
        <div className={css.rating}>
          {/* Додаємо посилання на сторінку з активованими відгуками */}
          <NavLink to={`/catalog/${id}/reviews`} className={css.ratingLink}>
            <img src={starOnIcon} alt="rating" className={css.ratingIcon} width="16" />
            <span>{rating.toFixed(1)}</span> {/* Рейтинг з однією цифрою після коми */}
            {!!reviewsCount && <span className={css.reviews}>({reviewsCount} Reviews)</span>}{' '}
            {/* Кількість відгуків у дужках */}
          </NavLink>
        </div>
      )}
      {!!location && (
        <div className={css.location}>
          <img src={locationIcon} alt="location" className={css.locationIcon} width="16" /> {location}
        </div>
      )}
    </div>
  );
};

RatingLocation.propTypes = {
  id: PropTypes.string.isRequired, // id для побудови правильного посилання
  rating: PropTypes.number,
  reviewsCount: PropTypes.number,
  location: PropTypes.string,
};
