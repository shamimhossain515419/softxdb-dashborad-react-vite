import { apiSlice } from '../apiSlice';

export const BranchApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBranch: builder.query({
      query: () => ({
        url: 'v1/branch',
        method: 'GET',
      }),
      providesTags: ['BranchApi'],
      transformResponse: data => {
        return data;
      },
    }),
    CreateBranch: builder.mutation({
      query: data => ({
        url: 'v1/branch',
        method: 'POST',
        body: data,
      }),
    }),
    removeBranch: builder.mutation({
      query: (data) => ({
        url: `v1/branch/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
    updateBranch: builder.mutation({
      query: (data) => ({
        url: `v1/branch/${data?.id}`,
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const { useGetBranchQuery, useCreateBranchMutation , useRemoveBranchMutation, useUpdateBranchMutation   } = BranchApi;
