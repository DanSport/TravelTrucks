import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './BookingForm.module.css';
import { InputField } from '../InputField/InputField';
import { Button } from '../Button/Button';
import { DatePickerStyled } from '../DatePickerStyled/DatePickerStyled';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';

export const BookingForm = ({ camper = {} }) => {
  const id = useParams().id || camper.id;
  const [dateValue, setDateValue] = useState(new Date());
  const [formData, setFormData] = useState({ id, name: '', email: '', date: dateValue, comment: '' });

  const formatDate = date =>
    `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value, date: formatDate(dateValue) }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Processing booking request with the following form data:', formData);
    toast.success(
      `Hello, ${formData.name}. Processing your request to book a campervan "${camper.name}" on ${formData.date}. Confirmation will be sent to ${formData.email} (not really)`,
      { autoClose: 8000 }
    );
    setTimeout(() => {
      toast.success('Your booking has been successfully created!');
    }, 3000);
    setFormData({ id, name: '', email: '', date: dateValue, comment: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="hidden" name="camperId" value={id} />
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

BookingForm.propTypes = {
  camper: PropTypes.object,
};
