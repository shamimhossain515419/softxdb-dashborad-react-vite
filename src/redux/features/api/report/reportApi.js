import { apiSlice } from '../apiSlice';

export const ReportApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getReport: builder.query({
      query: () => ({
        url: 'v1/stock/report',
        method: 'GET',
      }),
    }),

    removeReport: builder.mutation({
      query: data => ({
        url: `v1/stock/report/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
});

export const { useGetReportQuery, useRemoveReportMutation } = ReportApi;
