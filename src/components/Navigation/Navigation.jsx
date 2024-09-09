import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

export const Navigation = () => {
  return (
    <ul className={css.navigation}>
      <li>
        <NavLink className={({ isActive }) => clsx(css.navlink, isActive && css.active)} to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => clsx(css.navlink, isActive && css.active)} to='/campers'>
          Catalog
        </NavLink>
      </li>
    </ul>
  );
};
