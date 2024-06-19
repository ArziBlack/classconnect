/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import otherService from "./otherService.ts";
import axios from "axios";
import { IFees, IHomeResponse, OtherState } from "../../typings/home.ts";

const API_BASE_URL = `https://hep-coding.onrender.com/v1`;

const initialState: OtherState = {
  home: null,
  fees: null,
  tnc: "",
  error: null,
  message: "",
  isLoading: false,
  isSuccess: false,
};

export const getHomeResponse = createAsyncThunk(
  "other/welcome",
  async (_, { rejectWithValue }) => {
    try {
      return await otherService.getHomeResponse();
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTnC_Policy = createAsyncThunk(
  "other/policy",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/agreement`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTuitionFees = createAsyncThunk(
  "other/fees",
  async (_, { rejectWithValue }) => {
    try {
      return await otherService.getTuitionFees();
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isLoading = false),
        (state.isSuccess = false),
        (state.error = ""),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomeResponse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getHomeResponse.fulfilled,
        (state, action: PayloadAction<IHomeResponse>) => {
          state.isLoading = false;
          state.home = action.payload;
        }
      )
      .addCase(
        getHomeResponse.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload.message;
        }
      )
      .addCase(getTuitionFees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTuitionFees.fulfilled,
        (state, action: PayloadAction<IFees>) => {
          state.isLoading = false;
          state.fees = action.payload;
        }
      )
      .addCase(getTuitionFees.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(getTnC_Policy.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTnC_Policy.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.tnc = action.payload;
        }
      )
      .addCase(getTnC_Policy.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { reset } = otherSlice.actions;
export default otherSlice.reducer;
