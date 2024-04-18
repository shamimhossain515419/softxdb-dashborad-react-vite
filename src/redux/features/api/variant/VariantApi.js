import { apiSlice } from "../apiSlice";

export const VariantApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVariant: builder.query({
      query: () => ({
        url: "v1/variant",
        method: "GET",
      }),
    }),
    CreateVariant: builder.mutation({
      query: (data) => ({
        url: "v1/variant",
        method: "POST",
        body: data,
      }),
    }),
    removeVariant: builder.mutation({
      query: (data) => ({
        url: `v1/variant/${data}`,
        method: "DELETE",
        body: data,
      }),
    }),
    updateVariant: builder.mutation({
      query: (data) => ({
        url: `v1/variant/${data?.id}`,
        method: "put",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateVariantMutation,
  useGetVariantQuery,
  useRemoveVariantMutation,
  useUpdateVariantMutation,
} = VariantApi;
