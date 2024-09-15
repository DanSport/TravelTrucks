import css from './FavoritesButton.module.css';
import heartOnIcon from '../../assets/icons/heart-on.png';
import heartOffIcon from '../../assets/icons/heart-off.png';
import PropTypes from 'prop-types';

export const FavoritesButton = ({ isFavorite, onClick }) => {
  return (
    <button type="button" className={css.favoriteButton} onClick={onClick}>
      <img src={isFavorite ? heartOnIcon : heartOffIcon} alt="add to favourites" className={css.favoriteIcon} />
    </button>
  );
};

FavoritesButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};
