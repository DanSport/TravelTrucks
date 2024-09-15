import { useDispatch, useSelector } from 'react-redux';
import { ALL, initialState, setFilters } from '../../redux/filters/slice';
import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';
import { FilterSelectCheckBox } from '../FilterSelectCheckBox/FilterSelectCheckBox';
import locationIcon from '../../assets/icons/location.png';
import aircondIcon from '../../assets/icons/filters/aircond.png';
import bathroomIcon from '../../assets/icons/filters/bathroom.png';
import kitchenIcon from '../../assets/icons/filters/kitchen.png';
import tvIcon from '../../assets/icons/filters/tv.png';
import automaticIcon from '../../assets/icons/filters/automatic.png';
import alcoveIcon from '../../assets/icons/type/alcove.png';
import vanIcon from '../../assets/icons/type/van.png';
import integratedIcon from '../../assets/icons/type/integrated.png';
import css from './FilterBar.module.css';
import { useEffect, useState } from 'react';
import { selectFilters } from '../../redux/filters/selectors';

const filterList = [
  { value: 'aircond', label: 'AC', icon: aircondIcon },
  { value: 'kitchen', label: 'Kitchen', icon: kitchenIcon },
  { value: 'bathroom', label: 'Bathroom', icon: bathroomIcon },
  { value: 'tv', label: 'TV', icon: tvIcon },
  { value: 'automatic', label: 'Automatic', icon: automaticIcon },
];

const autoType = [
  { value: 'alcove', label: 'Alcove', icon: alcoveIcon },
  { value: 'panelTruck', label: 'Van', icon: vanIcon },
  { value: 'fullyIntegrated', label: 'Fully Integrated', icon: integratedIcon },
];

export const FilterBar = () => {
  const appliedFilters = useSelector(selectFilters);
  const [localFilters, setLocalFilters] = useState(initialState);
  const [filtersChanged, setFiltersChanged] = useState(false);
  const dispatch = useDispatch();

  const handleLocationChange = e => {
    e.preventDefault();
    setLocalFilters({ ...localFilters, location: e.target.value });
  };

  const handleFormChange = e => {
    e.preventDefault();
    const formType = e.currentTarget.lastChild.name;
    setLocalFilters({ ...localFilters, form: formType !== localFilters.form ? formType : ALL });
  };

  const handleToggle = e => {
    e.preventDefault();
    const key = e.currentTarget.lastChild.name;
    setLocalFilters({ ...localFilters, [key]: !localFilters[key] });
  };

  const handleReset = () => {
    setLocalFilters(initialState);
    dispatch(setFilters(initialState));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(setFilters({ ...localFilters, page: 1 }));
  };

  useEffect(() => {
    const checkFiltersChanged = () => {
      return JSON.stringify(initialState) !== JSON.stringify(appliedFilters);
    };

    setLocalFilters(appliedFilters);
    setFiltersChanged(checkFiltersChanged());
  }, [appliedFilters]);

  return (
    <form className={css.filterBar}>
      <InputField
        name="location"
        placeholder="Kyiv, Ukraine"
        icon={locationIcon}
        label="Location"
        value={localFilters.location}
        onChange={handleLocationChange}
      />
      <h3 className={css.sectionTitle}>
        Filters &nbsp;{' '}
        {!!filtersChanged && (
          <button type="button" className={css.resetFilters} onClick={handleReset}>
            (Reset)
          </button>
        )}
      </h3>
      <div className={css.filterBlock}>
        <p>Vehicle equipment</p>
        <ul>
          {filterList.map(({ value, label, icon }) => (
            <li key={value}>
              <FilterSelectCheckBox
                onClick={handleToggle}
                icon={icon}
                label={label}
                name={value}
                checked={localFilters[value]}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={css.filterBlock}>
        <p>Vehicle type</p>
        <ul>
          {autoType.map(({ value, label, icon }) => (
            <li key={value}>
              <FilterSelectCheckBox
                onClick={handleFormChange}
                icon={icon}
                label={label}
                name={value}
                checked={value === localFilters.form}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button title="Search" className={css.button} onClick={handleFormSubmit} type="submit" variant="primary" />
    </form>
  );
};
