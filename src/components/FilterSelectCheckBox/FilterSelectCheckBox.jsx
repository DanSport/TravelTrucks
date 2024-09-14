import { PropTypes } from 'prop-types';
import css from './FilterSelectCheckBox.module.css';

export const FilterSelectCheckBox = ({ icon, label, name, checked, onClick }) => {
  // const handleToggle = e => {
  //   e.preventDefault();
  //   e.currentTarget.lastChild.checked = !e.currentTarget.lastChild.checked;
  //   onCheck({ name, state: e.currentTarget.lastChild.checked });
  // };

  return (
    <label className={css.filterSelectCheckBox} onClick={onClick}>
      <img src={icon} alt={label} />
      <span className={css.label}>{label}</span>
      <input type="checkbox" name={name} checked={checked} readOnly />
    </label>
  );
};

FilterSelectCheckBox.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
};
