/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import authService from "./authService";

export interface IResponse {
  statusCode: number;
  status?: string;
  message: string;
}

interface AuthState {
  data: IResponse | null;
  response: string;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  Loaded: boolean;
  message: string;
  token: string;
}

const initialState: AuthState = {
  data: null,
  response: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  Loaded: false,
  message: "",
  token: "",
};

// Register User
export const register = createAsyncThunk(
  "auth/signup",
  async (user: object, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (err) {
      const error = err as AxiosError;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// User Login
export const login = createAsyncThunk(
  "auth/signin",
  async (user: object, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (err) {
      const error = err as AxiosError;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
        state.response = action.payload.message;
        state.message = action.payload.message;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Registration failed";
        state.data = null;
      })
      .addCase(login.pending, (state) => {
        state.Loaded = false;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Loaded = true;
        state.data = action.payload;
        state.response = action.payload.message;
        state.message = action.payload.message;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.Loaded = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Login failed";
        state.data = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
