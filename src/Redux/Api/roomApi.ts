import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TBookingResponse, TResponse, TResponseByID } from "../Types/Types";

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
    getRooms: builder.query<TResponse, void>({
      query: () => "rooms",
    }),
    getRoomById: builder.query<TResponseByID, string>({
      query: (id) => `rooms/${id}`,
    }),
    getMyBooking:builder.query<TBookingResponse, string>({
      query: (email) => `my-bookings?${email}`
    })
  }),
});

export const { useGetRoomsQuery,useGetRoomByIdQuery, useGetMyBookingQuery  } = roomApi;
