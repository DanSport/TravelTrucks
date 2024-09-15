import css from './Price.module.css';
import PropTypes from 'prop-types';

export const Price = ({ price = 0, children = null }) => {
  return (
    <p className={css.price}>
      €{price.toFixed(2)}
      {children}
    </p>
  );
};

Price.propTypes = {
  price: PropTypes.number,
  children: PropTypes.node,
};
