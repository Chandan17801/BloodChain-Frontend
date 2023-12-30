import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: null,
    userId: null,
    token: null,
    email: null,
}

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, {payload}) => {
            console.log(payload);
            state.userType = payload.userType;
            state.userId = payload.userId;
            state.token = payload.token;
            state.email = payload.email;
        },
        logout: (state) => {
            state.userType = null;
            state.userId = null;
            state.token = null;
            state.email = null;
        }
    }
})

export const { login, logout} = authSlice.actions;

export default authSlice.reducer;
