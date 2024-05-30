/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import otherService from "./otherService";

interface OtherState {
  data: Array<string>;
  error: string;
  message: string;
  isLoading: boolean;
  isSuccess: boolean;
}

const initialState: OtherState = {
  data:[],
  error: "",
  message: "",
  isLoading: false,
  isSuccess: false,
};

export const getHomePage = createAsyncThunk("other/welcome", async () => {
  return await otherService.getHomePage().catch((error) => console.log(error));
});

export const getTnC_Policy = createAsyncThunk("other/policy", async () => {
  return await otherService
    .getTnC_Policy()
    .catch((error) => console.log(error));
});

export const getTutionFees = createAsyncThunk("other/fees", async () => {
  return await otherService
    .getTutionFees()
    .catch((error) => console.log(error));
});


const otherSlice = createSlice({
  name:"other",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(getHomePage.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getHomePage.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.message = action.payload; // Assuming action.payload is a message
        })
        .addCase(getHomePage.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload.message;
        })
        .addCase(getTutionFees.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getTutionFees.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(getTutionFees.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload.message;
        })
        .addCase(getTnC_Policy.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getTnC_Policy.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(getTnC_Policy.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload.message;
        });
  }
});

export default otherSlice.reducer;
