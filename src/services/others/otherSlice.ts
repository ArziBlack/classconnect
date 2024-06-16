/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import otherService from "./otherService.ts";
import axios from "axios";

const API_BASE_URL = `https://hep-coding.onrender.com/v1`;

export interface IFees {
  statusCode: number;
  tuition_fees: {
    class_of_1: {
      monthly_payment: string;
      quarterly_payment: string;
      half_yearly_payment: string;
      yearly_payment: string;
    };
    class_of_5: {
      monthly_payment: string;
      quarterly_payment: string;
      half_yearly_payment: string;
      yearly_payment: string;
    };
    class_of_10: {
      monthly_payment: string;
      quarterly_payment: string;
      half_yearly_payment: string;
      yearly_payment: string;
    };
  };
}

interface IWelcomeMsg {
  statusCode: number;
  message: string;
}

interface OtherState {
  home: IWelcomeMsg | null;
  fees: IFees | null;
  tnc: string;
  error: string | null;
  message: string;
  isLoading: boolean;
  isSuccess: boolean;
}

const initialState: OtherState = {
  home: null,
  fees: null,
  tnc: "",
  error: null,
  message: "",
  isLoading: false,
  isSuccess: false,
};

export const getHomePage = createAsyncThunk(
  "other/welcome",
  async (_, { rejectWithValue }) => {
    try {
      return await otherService.getHomePage();
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
      .addCase(getHomePage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getHomePage.fulfilled,
        (state, action: PayloadAction<IWelcomeMsg>) => {
          state.isLoading = false;
          state.home = action.payload;
        }
      )
      .addCase(getHomePage.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
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
