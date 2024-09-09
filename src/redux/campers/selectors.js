import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectCampers = state => state.campers.items;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;

export const selectFilteredCampers = createSelector([selectCampers, selectFilters], ({ items: campers }, filters) => {
  console.log({ campers, filters });

  return campers.items
    .filter(({ location }) => {
      const filterLocation = filters.location.trim();
      if (filterLocation.length > 0) {
        if (location.toLocaleLowerCase().contains(filterLocation.toLocaleLowerCase())) return true;
        return false;
      } else {
        return true;
      }
    })
    .filter(({ transmission, AC, bathroom, kitchen, TV }) => {
      if (filters.aircond && !AC) return false;
      if (filters.bathroom && !bathroom) return false;
      if (filters.kitchen && !kitchen) return false;
      if (filters.tv && !TV) return false;
      if (filters.automatic && transmission !== 'automatic') return false;
      return true;
    })
    .filter(({ form }) => {
      if (filters.form === 'all') return true;
      if (filters.form === form) return true;
      return false;
    });
});
