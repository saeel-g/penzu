import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    // token: null,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            // Mutating state is OK inside of createSlice
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        logout(state, action) {
            state.isLoggedIn = false,
            state.user = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice;
