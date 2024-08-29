import { configureStore } from "@reduxjs/toolkit";
import { roomApi } from "./Api/roomApi";
import { authApi } from "./Api/authApi";
import userReducer from "../Redux/FeatureSlice/userSlice";

export const store = configureStore({
  reducer: {
    [roomApi.reducerPath]: roomApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(roomApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
