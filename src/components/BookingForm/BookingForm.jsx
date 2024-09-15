import { useState } from 'react';
import css from './BookingForm.module.css';
import { InputField } from '../InputField/InputField';
import { Button } from '../Button/Button';
import { DatePickerStyled } from '../DatePickerStyled/DatePickerStyled';

export const BookingForm = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [formData, setFormData] = useState({ name: '', email: '', date: dateValue, comment: '' });

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value, date: dateValue }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ formData, dateValue });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.description}>Stay connected! We are always ready to help you.</p>
      <InputField
        className={css.inputMargin}
        name="name"
        type="text"
        placeholder="Name*"
        value={formData.name}
        onChange={handleFormChange}
        required
      />
      <InputField
        className={css.inputMargin}
        name="email"
        type="email"
        placeholder={'Email*'}
        onChange={handleFormChange}
        value={formData.email}
        required
      />
      <DatePickerStyled selected={dateValue} onChange={setDateValue} label="Booking date*" />
      <InputField
        className={css.inputMargin}
        name="comment"
        type="text"
        placeholder={'Comment'}
        onChange={handleFormChange}
        value={formData.comment}
      />
      <Button className={css.buttonMargin} title={'Send'} type="submit" />
    </form>
  );
};

BookingForm.propTypes = {};
