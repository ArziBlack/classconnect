import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { AxiosError } from "axios";
import authService from "./authService";

const initialState = {
  user: [] || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  Loaded: false,
  message: "",
  token: [],
};

// Register User
export const register = createAsyncThunk(
    "auth/signup",
    async (user, thunkAPI) => {
        try {
            return await authService.register(user);
        } catch (error) {
            // const error = err as AxiosError;
            const message =
        (error?.response && error.response.data) ||
        error?.message ||
        error?.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// User Login
export const login = createAsyncThunk("auth/signin", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    // const error = err as AxiosError;
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isLoading = false),
        (state.isSuccess = false),
        (state.isError = false),
        (state.message = "");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.Loaded = false;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Loaded = true;
        state.message = action.payload.message;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.Loaded = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
