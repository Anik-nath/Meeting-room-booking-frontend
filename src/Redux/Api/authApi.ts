import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TSignInRequest, TSignInResponse } from "../Types/Types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/auth",
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<TSignInResponse, TSignInRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
