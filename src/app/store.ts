import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../services/auth/authSlice.ts';
import otherReducer from '../services/others/otherSlice.ts';

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
    reducer: {
        auth: authReducer,
        other: otherReducer
    }
})