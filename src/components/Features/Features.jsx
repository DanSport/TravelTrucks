import automaticIcon from '../../assets/icons/filters/automatic.png';
import engineIcon from '../../assets/icons/engine.png';
import aircondIcon from '../../assets/icons/filters/aircond.png';
import bathroomIcon from '../../assets/icons/filters/bathroom.png';
import kitchenIcon from '../../assets/icons/filters/kitchen.png';
import tvIcon from '../../assets/icons/filters/tv.png';
import css from './Features.module.css';
import PropTypes from 'prop-types';

const iconList = {
  AC: aircondIcon,
  bathroom: bathroomIcon,
  kitchen: kitchenIcon,
  TV: tvIcon,
};

export const Features = ({ camper }) => {
  const { transmission, engine } = camper;

  return (
    !!camper && (
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
    )
  );
};

Features.propTypes = {
  camper: PropTypes.object,
};
