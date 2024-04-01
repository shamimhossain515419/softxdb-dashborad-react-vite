import { apiSlice } from "../apiSlice";

export const CategoryApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategory: builder.query({
      query: () => ({
        url: 'v1/category',
        method: 'GET',
      }),
     }),
    CreateCategory: builder.mutation({
      query: data => ({
        url: 'v1/category',
        method: 'POST',
        body: data,
      }),
    }),
    removeCategory: builder.mutation({
      query: (data) => ({
        url: `v1/category/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    updateCategory: builder.mutation({
      query: (data) => ({
        url: `v1/category/${data?.id}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const { useGetCategoryQuery, useCreateCategoryMutation , useRemoveCategoryMutation, useUpdateCategoryMutation   } = CategoryApi;
