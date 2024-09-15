import css from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({ name = '' }) => {
  const maxLength = 300;
  return (
    <h2 className={css.name}>
      {name.slice(0, maxLength)}
      {name.length > maxLength && '...'}
    </h2>
  );
};

Title.propTypes = {
  name: PropTypes.string,
};
