import PropTypes from 'prop-types';
import starOnIcon from '../../assets/icons/star-on.png';
import heartOnIcon from '../../assets/icons/heart-on.png';
import heartOffIcon from '../../assets/icons/heart-off.png';
import locationIcon from '../../assets/icons/location.png';
import aircondIcon from '../../assets/icons/filters/aircond.png';
import bathroomIcon from '../../assets/icons/filters/bathroom.png';
import kitchenIcon from '../../assets/icons/filters/kitchen.png';
import tvIcon from '../../assets/icons/filters/tv.png';
import automaticIcon from '../../assets/icons/filters/automatic.png';
import engineIcon from '../../assets/icons/engine.png';
import css from './CamperCard.module.css';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router';

const iconList = {
  AC: aircondIcon,
  bathroom: bathroomIcon,
  kitchen: kitchenIcon,
  TV: tvIcon,
};

export const CamperCard = ({ camper }) => {
  const navigate = useNavigate();
  const { id, name, price, rating, location, description, reviews, gallery, transmission, engine } =
    camper;

  const toggleFavorite = () => {
    console.log('add to favorites', id);
  };

  const isFavorite = false;

  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt={name} width="292" className={css.thumbnail} />
      <div className={css.info}>
        <div className={css.header}>
          <div className={css.titleRow}>
            <h2 className={css.name}>{name}</h2>
            <p className={css.price}>
              €{price.toFixed(2)}
              <button type="button" className={css.favoriteButton} onClick={toggleFavorite}>
                <img
                  src={isFavorite ? heartOnIcon : heartOffIcon}
                  alt="add to favourites"
                  className={css.favoriteIcon}
                />
              </button>
            </p>
          </div>
          <div className={css.subtitleRow}>
            <p className={css.rating}>
              <img src={starOnIcon} alt="rating" className={css.ratingIcon} width="16" />{' '}
              {rating.toFixed(1)}({reviews.length} Reviews)
            </p>
            <p className={css.location}>
              <img src={locationIcon} alt="location" className={css.locationIcon} width="16" />
              {location}
            </p>
          </div>
        </div>
        <p className={css.description}>{description.slice(0, 65)}...</p>
        <ul className={css.features}>
          {'automatic' === transmission && (
            <li className={css.feature}>
              <img src={automaticIcon} alt="engine" className={css.featureIcon} />
              {transmission}
            </li>
          )}
          {!!engine && (
            <li className={css.feature}>
              <img src={engineIcon} alt="engine" className={css.featureIcon} />
              {engine}
            </li>
          )}
          {Object.keys(iconList).map(
            feature =>
              !!camper[feature] && (
                <li key={feature} className={css.feature}>
                  <img src={iconList[feature]} alt={feature} className={css.featureIcon} />
                  {feature}
                </li>
              )
          )}
        </ul>
        <Button
          title="Show more"
          className={css.moreButton}
          onClick={() => {
            navigate(`/catalog/${id}`);
          }}
        />
      </div>
    </div>
  );
};

CamperCard.propTypes = {
  camper: PropTypes.object,
};
