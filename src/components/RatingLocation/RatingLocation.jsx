import PropTypes from 'prop-types';
import starOnIcon from '../../assets/icons/star-on.png';
import locationIcon from '../../assets/icons/location.png';
import css from './RatingLocation.module.css';

export const RatingLocation = ({ rating = 0, reviewsCount = 0, location = null }) => {
  return (
    <div className={css.subtitleRow}>
      {!!rating && (
        <div className={css.rating}>
          <img src={starOnIcon} alt="rating" className={css.ratingIcon} width="16" /> {rating.toFixed(1)}
          {!!reviewsCount && <span>{reviewsCount} Reviews</span>}
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
  rating: PropTypes.number,
  reviewsCount: PropTypes.number,
  location: PropTypes.string,
};
