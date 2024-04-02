import { apiSlice } from "../apiSlice";

export const SizesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSize: builder.query({
      query: () => ({
        url: 'v1/size',
        method: 'GET',
      }),
     }),
    CreateSize: builder.mutation({
      query: data => ({
        url: 'v1/size',
        method: 'POST',
        body: data,
      }),
    }),
    removeSize: builder.mutation({
      query: (data) => ({
        url: `v1/size/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    updateSize: builder.mutation({
      query: (data) => ({
        url: `v1/size/${data?.id}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const { useGetSizeQuery, useCreateSizeMutation , useRemoveSizeMutation, useUpdateSizeMutation   } = SizesApi;
