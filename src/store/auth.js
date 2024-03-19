import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: null,
  userId: null,
  token: null,
  email: null,
};

let storage;
if (typeof window !== "undefined") {
  storage = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;
}

const authSlice = createSlice({
  name: "Auth",
  initialState: storage || initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log(payload);
      state.userType = payload.userType;
      state.userId = payload.userId;
      state.token = payload.token;
      state.email = payload.email;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.userType = null;
      state.userId = null;
      state.token = null;
      state.email = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
