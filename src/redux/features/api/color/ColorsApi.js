import { apiSlice } from "../apiSlice";

export const ColorsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getColor: builder.query({
      query: () => ({
        url: 'v1/color',
        method: 'GET',
      }),
     }),
    CreateColor: builder.mutation({
      query: data => ({
        url: 'v1/color',
        method: 'POST',
        body: data,
      }),
    }),
    removeColor: builder.mutation({
      query: (data) => ({
        url: `v1/color/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    updateColor: builder.mutation({
      query: (data) => ({
        url: `v1/color/${data?.id}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const { useGetColorQuery, useCreateColorMutation , useRemoveColorMutation, useUpdateColorMutation   } = ColorsApi;
