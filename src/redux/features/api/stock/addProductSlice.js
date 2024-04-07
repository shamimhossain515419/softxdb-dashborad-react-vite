// / productsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const addProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        product => product.product_id === action.payload.product_id
      );
      if (existingProductIndex !== -1) {
        // If product with the same product_id already exists, update its properties
        state.products[existingProductIndex] = action.payload;
      } else {
        // If product doesn't exist, add it to the state
        state.products.push(action.payload);
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.product_id !== action.payload
      );
    },

    deleteAllProducts: state => {
      state.products = [];
    },
  },
});

export const { addProduct, deleteAllProducts, deleteProduct } =
  addProductSlice.actions;
export default addProductSlice.reducer;
