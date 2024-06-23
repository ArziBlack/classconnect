import { configureStore } from "@reduxjs/toolkit";
// Reducer Imports
import authReducer from "../services/auth/authSlice";
import otherReducer from "../services/others/otherSlice";
import imageReducer from "../services/others/imageSlice";
import studentReducer from "../services/student/studentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    other: otherReducer,
    image: imageReducer,
    student: studentReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;