import { initialState } from "./slice";

export const selectFilters = state => state.filters;

export const selectFiltersChanged = state => {
  for (const key in state.filters) {
    if (state.filters[key] !== initialState[key]) {
      return true;
    }
  }

  return false;
}
