import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth";

const authReducer = authSlice.reducer;

const reducer = {
    auth: authReducer,
}

const store = configureStore({
    reducer
});

export default store;
