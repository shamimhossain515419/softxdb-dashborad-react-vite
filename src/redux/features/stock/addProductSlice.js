import { createSlice } from "@reduxjs/toolkit";
import arraysEqual from "../../../utility/arraysEqual/arraysEqual";

const initialState = {
  products: [],
  total: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existing = state.products.find(
        (product) =>
          product.product_id === action.payload.product_id &&
          arraysEqual(product.variants, action.payload.variants)
      );
      if (existing) {
        existing.quantity =
          parseFloat(existing.quantity) + parseFloat(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
        });
      }
      state.total = state.total + action.payload.price;
    },

    deleteProduct: (state, action) => {
      const filteredProducts = state.products.filter(
        (product, index) => index !== action.payload
      );

      // Assign the filtered products array back to state.products
      state.products = filteredProducts;
    },

    deleteAllProducts: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, deleteAllProducts, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;

//
