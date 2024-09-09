import { PropTypes } from 'prop-types';
import css from './FilterSelectCheckBox.module.css';

export const FilterSelectCheckBox = ({ icon: Icon, label, name, value = '', checked = false, onCheck }) => {
  return (
    <label className={css.filterSelectCheckBox}>
      <Icon />
      <p className={css.label}>{label}</p>
      <input type='checkbox' name={name} value={value} checked={checked} onSelect={onCheck} />
    </label>
  );
};

FilterSelectCheckBox.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
};
