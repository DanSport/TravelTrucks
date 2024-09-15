import PropTypes from 'prop-types';
import starOnIcon from '../../assets/icons/star-on.png';
import starOffIcon from '../../assets/icons/star-off.png';
import css from './Stars.module.css';

export const Stars = ({ rating }) => {
  return (
    <div className={css.stars}>
      {new Array(5)
        .fill(0)
        .map((_, index) =>
          index < Math.round(rating) ? (
            <img key={index} src={starOnIcon} alt="" className={css.starImg} />
          ) : (
            <img key={index} src={starOffIcon} alt="" className={css.starImg} />
          )
        )}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number,
};
