import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: null,
    userId: null,
    token: null,
    email: null,
}

// // Function to save state to localStorage
// const saveStateToLocalStorage = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         if(typeof window !==undefined)
//         localStorage.setItem('authState', serializedState);
//     } catch (error) {
//         console.error("Error saving state to localStorage:", error);
//     }
// };

// // Function to load state from localStorage
// const loadStateFromLocalStorage = () => {
//     try {
//         if(typeof window !==undefined){

//             const serializedState = localStorage.getItem('authState');
//             return serializedState ? JSON.parse(serializedState) : undefined;
//         }else return undefined
//     } catch (error) {
//         console.error("Error loading state from localStorage:", error);
//         return undefined;
//     }
// };

const authSlice = createSlice({
    name: 'Auth',
    initialState:  initialState,
    reducers: {
        login: (state, { payload }) => {
            console.log(payload);
            state.userType = payload.userType;
            state.userId = payload.userId;
            state.token = payload.token;
            state.email = payload.email;
            // saveStateToLocalStorage(state);
        },
        logout: (state) => {
            state.userType = null;
            state.userId = null;
            state.token = null;
            state.email = null;
            // saveStateToLocalStorage(state);
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
