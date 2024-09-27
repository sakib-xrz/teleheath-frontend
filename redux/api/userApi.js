import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useGetMeQuery, useChangePasswordMutation } = userApi;
