import { apiSlice } from '../apiSlice';

export const StockApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getStock: builder.query({
      query: () => ({
        url: 'v1/stock',
        method: 'GET',
      }),
    }),
    CreateStock: builder.mutation({
      query: data => ({
        url: 'v1/stock',
        method: 'POST',
        body: JSON.stringify(data),
      }),
    }),
    removeStock: builder.mutation({
      query: data => ({
        url: `v1/stock/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    updateStock: builder.mutation({
      query: data => ({
        url: `v1/stock/${data?.id}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetStockQuery,
  useCreateStockMutation,
  useRemoveStockMutation,
  useUpdateStockMutation,
} = StockApi;
