import PropTypes from 'prop-types';
import { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { uk } from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DatePickerStyled.module.css';

export const DatePickerStyled = ({ onChange, label }) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setStartDate(date);
    onChange(date);
  };

  setDefaultLocale('uk');
  registerLocale('uk', uk);

  return (
    <div className={css.inputField}>
      <DatePicker selected={startDate} onChange={handleChange} className={css.input} locale={'uk'} />
      <span className={css.label}>{label}</span>
    </div>
  );
};

DatePickerStyled.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
};
