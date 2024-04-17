import { apiSlice } from '../apiSlice';

export const Supplier = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSupplierData: builder.query({
      query: data => ({
        url: `v1/supplier?keyword=${data?.keyword}&per_page=${data?.limit}&page=${data?.page}`,
        method: 'GET',
      }),
    }),
    CreateSupplier: builder.mutation({
      query: data => ({
        url: 'v1/supplier',
        method: 'POST',
        body: JSON.stringify(data),
      }),
    }),
    removeSupplier: builder.mutation({
      query: data => ({
        url: `v1/supplier/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
});
export const { useGetSupplierDataQuery, useRemoveSupplierMutation } = Supplier;
