import PropTypes from 'prop-types';
import { CamperCard } from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

export const PER_PAGE = 4;

export const CampersList = ({ campers, children }) => {
  return (
    <ul className={css.campersList}>
      {campers.map(camper => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
      {children}
    </ul>
  );
};

CampersList.propTypes = {
  campers: PropTypes.array,
  children: PropTypes.node,
};
