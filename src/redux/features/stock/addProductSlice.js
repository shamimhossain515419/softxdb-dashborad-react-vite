import { createSlice } from "@reduxjs/toolkit";

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
          product.color_id === action.payload.color_id &&
          product.size_id === action.payload.size_id
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
