import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../Redux/features/AdminSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});
