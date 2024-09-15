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
  page: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (_, { payload }) => payload,
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { setFilters, setPage } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
