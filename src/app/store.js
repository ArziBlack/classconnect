import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../services/auth/authSlice';
import otherReducer from '../services/others/otherSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        other: otherReducer
    }
})