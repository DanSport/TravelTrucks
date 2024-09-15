import PropTypes from 'prop-types';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DatePickerStyled.module.css';

export const DatePickerStyled = ({ onChange, label }) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <label className={css.inputField}>
      <DatePicker selected={startDate} onChange={handleChange} className={css.input} />
      <span className={css.label}>{label}</span>
    </label>
  );
};

DatePickerStyled.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
};
