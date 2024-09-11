import { createSlice } from '@reduxjs/toolkit';

export const ALL = 'all';

export const initialState = {
  aircond: false,
  automatic: false,
  kitchen: false,
  tv: false,
  bathroom: false,
  form: ALL,
  location: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    resetFilters: () => initialState,
    toggleFilter: (state, { payload }) => {
      state[payload] = !state[payload];
    },
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
    setForm: (state, { payload }) => {
      state.form = state.form !== payload ? payload : ALL;
    },
  },
});

export const { toggleFilter, setLocation, setForm, resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
