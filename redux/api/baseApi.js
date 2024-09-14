import axiosBaseQuery from "@/helpers/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
