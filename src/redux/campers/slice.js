import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCampersThunk } from './campersThunk';
import { fetchDetails, fetchDetailsThunk } from './detailsThunk';

export const initialCampersState = {
  items: [],
  updatedItem: [],
  isLoading: false,
  error: null,
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState: initialCampersState,
  extraReducers: builder =>
    builder
      .addCase(fetchCampers.pending, fetchCampersThunk.pending)
      .addCase(fetchCampers.fulfilled, fetchCampersThunk.fulfilled)
      .addCase(fetchCampers.rejected, fetchCampersThunk.rejected)
      .addCase(fetchDetails.pending, fetchDetailsThunk.pending)
      .addCase(fetchDetails.fulfilled, fetchDetailsThunk.fulfilled)
      .addCase(fetchDetails.rejected, fetchDetailsThunk.rejected),
});

export const campersReducer = campersSlice.reducer;
