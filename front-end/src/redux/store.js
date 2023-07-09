import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import { flaskCoreAPI } from './services/flaskCOre';

export const store = configureStore({
  reducer: {
    [flaskCoreAPI.reducerPath]: flaskCoreAPI.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flaskCoreAPI.middleware),
});
