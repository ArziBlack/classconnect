/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import otherService from "./otherService.ts";
import {
  IFees,
  IHomeResponse,
  ISignupPage,
  OtherState,
} from "../../typings/home.ts";

const API_BASE_URL = `https://hep-coding.onrender.com/v1`;

const initialState: OtherState = {
  home: null,
  fees: null,
  tnc: "",
  URL: null,
  error: null,
  message: "",
  isLoading: false,
  isSuccess: false,
  userType: "student",
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

// get Student Sign-up URL
export const getSignupPage = createAsyncThunk(
  "other/signup-url",
  async (_, thunkAPI) => {
    try {
      return await otherService.getSignupPage();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// get the Tutor Sign-up URL
export const getTutorSignupURL = createAsyncThunk(
  "other/tutor-url",
  async (_, { rejectWithValue }) => {
    try {
      return await otherService.getTutorSignupURL();
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get the Tutor Login URL
export const getTutorLoginURL = createAsyncThunk(
  "other/tutor-login-url",
  async (_, { rejectWithValue }) => {
    try {
      return await otherService.getTutorLoginURL();
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get forgot password URL for Tutor
export const getTutorForgotPasswordURL = createAsyncThunk(
  "other/tutor-forgot-password",
  async (_, { rejectWithValue }) => {
    try {
      return await otherService.getTutorForgotPasswordURL();
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Logout Tutor
export const logoutTutor = createAsyncThunk(
  "other/logout-tutor",
  async (_, { rejectWithValue }) => {
    try {
      return await otherService.LogoutTutor();
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
      state.userType = null;
    },
    setUserType: (state, action: PayloadAction<string>) => {
      state.userType = action.payload;
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
      })
      .addCase(getSignupPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getSignupPage.fulfilled,
        (state, action: PayloadAction<ISignupPage>) => {
          state.isLoading = false;
          state.URL = action.payload.signupFormURL;
        }
      )
      .addCase(getSignupPage.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(getTutorForgotPasswordURL.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(getTutorForgotPasswordURL.fulfilled, (state, action) => {
        state.isLoading = false;
        state.URL = action.payload;
      })
      .addCase(getTutorForgotPasswordURL.rejected, (state) => {
        state.isLoading = false;
        state.message = "Something went wrong. Please try again later";
      })
      .addCase(logoutTutor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutTutor.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutTutor.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { reset, setUserType } = otherSlice.actions;
export default otherSlice.reducer;
