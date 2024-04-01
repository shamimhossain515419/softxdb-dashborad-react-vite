import { apiSlice } from '../apiSlice';
export const BrandApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBrand: builder.query({
      query: () => ({
        url: 'v1/brand',
        method: 'GET',
      }),
     }),
    CreateBrand: builder.mutation({
      query: data => ({
        url: 'v1/brand',
        method: 'POST',
        body: data,
      }),
    }),
    removeBrand: builder.mutation({
      query: (data) => ({
        url: `v1/brand/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    updateBrand: builder.mutation({
      query: (data) => ({
        url: `v1/brand/${data?.id}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const { useGetBrandQuery, useCreateBrandMutation , useRemoveBrandMutation, useUpdateBrandMutation   } = BrandApi;
