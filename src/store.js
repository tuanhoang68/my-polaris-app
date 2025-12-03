import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './pages/product/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
