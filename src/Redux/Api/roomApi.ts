import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TRoom } from "../Types/Types";

export const roomApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('Authorization');
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRooms: builder.query<TRoom[], void>({
      query: () => "rooms",
    }),
  }),
});

export const { useGetRoomsQuery } = roomApi;
