import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TSignInRequest,
  TSignInResponse,
  TUserResponse,
} from "../Types/Types";

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
    SignUp: builder.mutation({
      query: (newUser) => ({
        url: "signup",
        method: "POST",
        body: newUser,
      }),
    }),
    getAllUsers: builder.query<TUserResponse, void>({
      query: () => "users",
    }),
    userRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { role },
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetAllUsersQuery,
  useUserRoleMutation,
} = authApi;
