import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampers = createAsyncThunk('fetchCampers', async (_, { rejectWithValue }) => {
  try {
    return (await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers')).data.items;
  } catch {
    return rejectWithValue('Unable to load campers');
  }
});

export const fetchCampersThunk = {
  pending: state => {
    state.isLoading = true;
    state.error = null;
  },
  fulfilled: (state, { payload }) => {
    state.isLoading = false;
    state.items = payload;
  },
  rejected: state => {
    state.isLoading = false;
    state.error = true;
  },
};
