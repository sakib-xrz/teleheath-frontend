import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdmin: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: [tagTypes.user, tagTypes.admin],
    }),
    getAdmin: build.query({
      query: (query) => ({
        url: "/admins",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useCreateAdminMutation, useGetAdminQuery } = adminApi;
