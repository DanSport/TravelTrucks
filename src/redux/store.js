import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filters/slice';
import { campersReducer } from './campers/slice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    campers: campersReducer,
  },
});
