import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAuth, TuserData } from "../Types/Types";

const initialState: TAuth = {
  token: localStorage.getItem("Authorization") || null,
  userData: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData") as string)
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ token: string; userData: TuserData }>
    ) => {
      state.token = action.payload.token;
      state.userData = action.payload.userData;
      localStorage.setItem('Authorization', `Bearer ${action.payload.token}`);
      localStorage.setItem('userData', JSON.stringify(action.payload.userData));
    },
    clearUser: (state) => {
      state.token = null;
      state.userData = null;
      localStorage.removeItem('Authorization');
      localStorage.removeItem('userData');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
