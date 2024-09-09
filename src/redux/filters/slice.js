import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aircond: false,
  automatic: false,
  kitchen: false,
  tv: false,
  bathroom: false,
  form: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    resetFilters: () => initialState,
    toggleFilter: (state, { payload }) => {
      state[payload] = !state.filters.type[payload];
    },
  },
});

export const { toggleFilter, resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
