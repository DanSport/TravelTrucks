import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampers = createAsyncThunk('fetchCampers', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCampersThunk = {
  pending: state => {
    state.isLoading = true;
    state.error = null;
  },
  fulfilled: (state, { payload }) => {
    console.log({ state, payload });
    state.isLoading = false;
    state.items = payload;
  },
  rejected: (state, { payload }) => {
    console.log({ payload });
    state.isLoading = false;
    state.error = payload;
  },
};
