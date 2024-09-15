import PropTypes from 'prop-types';
import css from './InputField.module.css';
import clsx from 'clsx';

export const InputField = ({
  name,
  type = 'text',
  label = null,
  icon = null,
  placeholder,
  onChange,
  className,
  value,
  ...props
}) => {
  return (
    <label className={clsx(css.inputField, className)}>
      {!!label && <span className={css.label}>{label}</span>}
      <input
        name={name}
        type={type}
        onChange={onChange}
        placeholder="&nbsp;"
        value={value}
        className={clsx(css.input, icon && css.withIcon)}
        {...props}
      />
      {!!placeholder && <span className={label ? css.placeholderWLabel : css.placeholderNoLabel}>{placeholder}</span>}
      {!!icon && <img src={icon} alt="" className={css.icon} />}
    </label>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
