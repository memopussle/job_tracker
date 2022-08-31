import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Job"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => "/jobs",
      providesTags: ["Job"],
    }),
    addJobs: builder.mutation({
      query: (job) => ({
        url: "/jobs",
        method: "POST",
        body: job,
      }),
      invalidatesTags: ["Job"],
    }),
    updateJobs: builder.mutation({
      query: (job) => ({
        url: `/jobs/${job._id}`,
        method: "PATCH",
        body: job,
      }),
      invalidatesTags: ["Job"],
    }),
    deleteJobs: builder.mutation({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Job"],
    }),
  }),
});
export const { useGetJobsQuery, useAddJobsMutation, useUpdateJobsMutation, useDeleteJobsMutation} = apiSlice;