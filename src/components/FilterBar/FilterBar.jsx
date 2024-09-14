import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, selectFiltersChanged } from '../../redux/filters/selectors';
import { resetFilters, setForm, setLocation, toggleFilter } from '../../redux/filters/slice';
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
  const filters = useSelector(selectFilters);
  const filtersChanged = useSelector(selectFiltersChanged);
  const { form } = filters;
  const dispatch = useDispatch();

  const handleLocationChange = e => {
    e.preventDefault();
    dispatch(setLocation(e.currentTarget.value));
  };

  const handleToggle = e => {
    e.preventDefault();
    dispatch(toggleFilter(e.currentTarget.lastChild.name));
  };

  const handleFormChange = e => {
    e.preventDefault();
    dispatch(setForm(e.currentTarget.lastChild.name));
  };

  return (
    <div className={css.filterBar}>
      <InputField
        name="location"
        placeholder="Kyiv, Ukraine"
        icon={locationIcon}
        label="Location"
        value={filters.location}
        onChange={handleLocationChange}
      />
      <h3 className={css.sectionTitle}>
        Filters &nbsp;{' '}
        {!!filtersChanged && (
          <button
            type="button"
            className={css.resetFilters}
            onClick={() => dispatch(resetFilters())}
          >
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
                checked={filters[value]}
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
                checked={value === form}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button
        title="Search"
        className={css.button}
        onClick={() => {}}
        type="button"
        variant="primary"
      />
    </div>
  );
};
