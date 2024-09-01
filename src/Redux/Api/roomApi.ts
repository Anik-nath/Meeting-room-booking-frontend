import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TAvailableSlotsParams,
  TAvailableSlotsResponse,
  TBookingResponse,
  TResponse,
  TResponseByID,
  TSlotResponse,
} from "../Types/Types";

export const roomApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("Authorization");
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // get data
    getRooms: builder.query<TResponse, void>({
      query: () => "rooms",
    }),
    getslots: builder.query<TSlotResponse, void>({
      query: () => "slots",
    }),
    getAvailAbleslots: builder.query<
      TAvailableSlotsResponse,
      TAvailableSlotsParams
    >({
      query: ({ date, roomId }) =>
        `slots/availability?date=${date}&roomId=${roomId}`,
    }),
    getAllbookings: builder.query<TBookingResponse, void>({
      query: () => "bookings",
    }),
    getRoomById: builder.query<TResponseByID, string>({
      query: (id) => `rooms/${id}`,
    }),
    getMyBooking: builder.query<TBookingResponse, string>({
      query: (email) => `my-bookings?${email}`,
    }),
    // post data
    createRoom: builder.mutation({
      query: (newRoom) => ({
        url: "rooms",
        method: "POST",
        body: newRoom,
      }),
    }),
    createSlots: builder.mutation({
      query: (newSlot) => ({
        url: "slots",
        method: "POST",
        body: newSlot,
      }),
    }),
    createBooking: builder.mutation({
      query: (newBooking) => ({
        url: "bookings",
        method: "POST",
        body: newBooking,
      }),
    }),
    // update
    bookingStatus: builder.mutation({
      query: ({ id, isConfirmed }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: { isConfirmed },
      }),
    }),
    // update
    bookingDelete: builder.mutation({
      query: ({ id, isDeleted }) => ({
        url: `/bookings/${id}`,
        method: "Delete",
        body: { isDeleted },
      }),
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetRoomByIdQuery,
  useGetMyBookingQuery,
  useGetslotsQuery,
  useGetAllbookingsQuery,
  useCreateSlotsMutation,
  useCreateRoomMutation,
  useGetAvailAbleslotsQuery,
  useCreateBookingMutation,
  useBookingStatusMutation
} = roomApi;
