import { initialState } from './slice';

export const selectFilters = state => state.filters;

export const selectPage = state => state.filters.page;

export const selectFiltersChanged = state => {
  for (const key in state.filters) {
    if (state.filters[key] !== initialState[key] && key !== 'page') {
      return true;
    }
  }

  return false;
};
