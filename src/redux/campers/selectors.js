import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';
import { ALL } from '../filters/slice';

export const selectCampers = state => (state.campers.isLoading ? [] : state.campers.items?.items);
export const selectTotalCount = state => (state.campers.isLoading ? 0 : state.campers.items?.total);
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const selectFavoriteItems = state => state.campers.favoriteItems;
export const selectIsFavorite = (state, id) => state.campers.favoriteItems.includes(id);

export const selectFilteredCampers = createSelector([selectCampers, selectFilters], (items, filters) => {
  return items
    ? items
        .filter(({ location = '' }) => {
          const filterLocation = filters.location.trim();
          return filterLocation.length > 0 ? location.toLowerCase().includes(filterLocation.toLowerCase()) : true;
        })
        .filter(({ transmission, AC, bathroom, kitchen, TV, radio }) => {
          if (filters.aircond && !AC) return false;
          if (filters.bathroom && !bathroom) return false;
          if (filters.kitchen && !kitchen) return false;
          if (filters.tv && !TV) return false;
          if (filters.radio && !radio) return false;
          if (filters.automatic && transmission !== 'automatic') return false;
          return true;
        })
        .filter(({ form = '' }) => {
          if (filters.form === ALL) return true;
          if (filters.form === form) return true;
          return false;
        })
    : [];
});

export const selectCampersLoaded = state => state.campers.items?.length > 0;
