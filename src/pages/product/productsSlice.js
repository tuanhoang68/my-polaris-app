import { createSlice } from '@reduxjs/toolkit';
import productsData from './fakeProducts.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: productsData,
  },
  reducers: {}
});

export default productsSlice.reducer;
