import { apiSlice } from '../apiSlice';

export const CustomerApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCustomerData: builder.query({
      query: data => ({
        url: `v1/customer?keyword=${data?.keyword}&per_page=${data?.limit}&page=${data?.page}`,
        method: 'GET',
      }),
    }),
    CreateCustomer: builder.mutation({
      query: data => ({
        url: 'v1/customer',
        method: 'POST',
        body: JSON.stringify(data),
      }),
    }),
    removeCustomer: builder.mutation({
      query: data => ({
        url: `v1/customer/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
});

export const { useGetCustomerDataQuery, useRemoveCustomerMutation } =
  CustomerApi;
