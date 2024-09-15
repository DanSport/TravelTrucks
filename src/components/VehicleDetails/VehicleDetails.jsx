import PropTypes from 'prop-types';
import css from './VehicleDetails.module.css';

const featuresList = ['form', 'length', 'width', 'height', 'tank', 'consumption'];

const VehicleDetails = ({ camper }) => {
  return (
    <div className={css.details}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        {featuresList.map(feature => (
          <li key={feature} className={css.listItem}>
            <p className={css.featureName}>{feature}</p>
            <p className={css.featureValue}>{camper[feature]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

VehicleDetails.propTypes = {
  camper: PropTypes.object,
};

export default VehicleDetails;
