import { apiSlice } from "../apiSlice";

export const UnitApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUnit: builder.query({
      query: () => ({
        url: 'v1/unit',
        method: 'GET',
      }),
     }),
    CreateUnit: builder.mutation({
      query: data => ({
        url: 'v1/unit',
        method: 'POST',
        body: data,
      }),
    }),
    removeUnit: builder.mutation({
      query: (data) => ({
        url: `v1/unit/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    updateUnit: builder.mutation({
      query: (data) => ({
        url: `v1/unit/${data?.id}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const { useGetUnitQuery, useCreateUnitMutation , useRemoveUnitMutation, useUpdateUnitMutation   } = UnitApi;
