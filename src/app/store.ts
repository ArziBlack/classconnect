import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../services/auth/authSlice';
import otherReducer from '../services/others/otherSlice';
import imageReducer from '../services/others/imageSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        other: otherReducer,
        image: imageReducer
    },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
