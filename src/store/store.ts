import { configureStore } from '@reduxjs/toolkit';
import pcbuilderReducer from './slices/pcbuilder/pcbuilderSlice';

export const store = configureStore({
  reducer: {
    pcbuilder: pcbuilderReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
