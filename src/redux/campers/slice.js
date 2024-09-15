import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCampersThunk } from './campersThunk';

export const initialCampersState = {
  items: [],
  updatedItem: [],
  favoriteItems: [],
  isLoading: false,
  error: false,
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState: initialCampersState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      if (state.favoriteItems.includes(payload)) {
        state.favoriteItems = state.favoriteItems.filter(item => item !== payload);
      } else {
        state.favoriteItems.push(payload);
      }
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCampers.pending, fetchCampersThunk.pending)
      .addCase(fetchCampers.fulfilled, fetchCampersThunk.fulfilled)
      .addCase(fetchCampers.rejected, fetchCampersThunk.rejected),
});

export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
