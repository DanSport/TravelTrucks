import PropTypes from 'prop-types';
import css from './CamperCard.module.css';
import { Button } from '../Button/Button';
import { RatingLocation } from '../RatingLocation/RatingLocation';
import { Title } from '../Title/Title';
import { Price } from '../Price/Price';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { Features } from '../Features/Features';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/campers/selectors';
import { toggleFavorite } from '../../redux/campers/slice';

export const CamperCard = ({ camper }) => {
  const { id, name, price, rating, location, description, reviews, gallery } = camper;
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectFavoriteItems).includes(id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt={name} width="292" className={css.thumbnail} />
      <div className={css.info}>
        <div className={css.header}>
          <div className={css.titleRow}>
            <Title name={name} />
            <Price price={price}>
              <FavoritesButton isFavorite={isFavorite} onClick={handleToggleFavorite} />
            </Price>
          </div>
          <RatingLocation location={location} rating={rating} reviewsCount={reviews.length} />
        </div>
        <p className={css.description}>{description}</p>
        <Features camper={camper} />
        <Button
          title="Show more"
          onClick={() => {
            window.open(`${window.location.origin}/catalog/${id}`, '_blank');
          }}
        />
      </div>
    </div>
  );
};

CamperCard.propTypes = {
  camper: PropTypes.object,
};
