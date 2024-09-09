import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetails = createAsyncThunk(
  'fetchDetails',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  },
  { condition: (id, { getState }) => getState().updatedItem.includes(id) },
);

export const fetchDetailsThunk = {
  pending: state => {
    state.isLoading = true;
    state.error = null;
  },
  fulfilled: (state, { payload }) => {
    console.log({ state, payload });
    state.isLoading = false;
    state.items = state.items.map(item => (item.id === payload.id ? { ...item, ...payload } : item));
    state.updatedItem.push(payload.id);
  },
  rejected: (state, { payload }) => {
    console.log({ payload });
    state.isLoading = false;
    state.error = payload;
  },
};
