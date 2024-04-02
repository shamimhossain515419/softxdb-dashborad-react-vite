import { apiSlice } from "../apiSlice";

export const ProductApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProduct: builder.query({
      query: () => ({
        url: 'v1/product',
        method: 'GET',
      }),
     }),
    CreateProduct: builder.mutation({
      query: data => ({
        url: 'v1/product',
        method: 'POST',
        body: data,
      }),
    }),
    removeProduct: builder.mutation({
      query: (data) => ({
        url: `v1/product/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `v1/product/${data?.id}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const { useGetProductQuery, useCreateProductMutation , useRemoveProductMutation, useUpdateProductMutation   } = ProductApi;
