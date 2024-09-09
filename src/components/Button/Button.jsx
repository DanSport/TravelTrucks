import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({ title, type = 'button', variant = 'primary', onClick = () => {}, className = null }) => {
  return (
    <button type={type} className={clsx(css.button, css[variant], className)} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
