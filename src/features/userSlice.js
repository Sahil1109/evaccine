import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    token: "xyz",
    mobile: "998877665522",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user.mobile = "";
      state.user.token = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
