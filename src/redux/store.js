import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filters/slice';
import { campersReducer } from './campers/slice';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedCampersReducer = persistReducer(
  {
    key: 'campers',
    storage: storage,
    whitelist: ['favoriteItems'],
  },
  campersReducer
);

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    campers: persistedCampersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
