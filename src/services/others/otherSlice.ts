/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import otherService from "./otherService.ts";
import {
  IFees,
  IHomeResponse,
  ISignupPage,
  IVideo,
  OtherState,
} from "../../typings/home.ts";

const API_BASE_URL = `https://hep-coding.onrender.com/v1`;

const home: IHomeResponse | null = JSON.parse(
  sessionStorage.getItem("home") || "null"
);

const fees: IFees | null = JSON.parse(
  sessionStorage.getItem("tution-fees") || "null"
);

const URL: string | null = JSON.parse(
  sessionStorage.getItem("signupFormURL-student") || "null"
);

interface INewsletter {
  userName: string;
  email: string;
}

const initialState: OtherState = {
  home: home,
  fees: fees,
  videos: null,
  curriculum: null,
  tnc: "",
  URL: URL,
  error: null,
  message: "",
  isLoading: false,
  isCurriculumLoading: false,
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

export const getLandingVideos = createAsyncThunk(
  "other/landingVideos",
  async (_, { rejectWithValue }) => {
    try {
      return await otherService.getLandingVideos();
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
      return response.data.videos;
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

// get Curriculum
export const getCurriculum = createAsyncThunk(
  "other/curriculum",
  async (id: string, thunkAPI) => {
    try {
      return await otherService.getCurriculum(id);
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

export interface INewsLetterError {
  statusCode: number;
  message?: string;
  error?: string;
}
export interface IVideoRes {
  message: number;
  videos?: IVideo[];
  error?: string;
}

// Newsletter
export const newsLetter = createAsyncThunk(
  "other/send-newsletter",
  async ({ userName, email }: INewsletter, { rejectWithValue }) => {
    try {
      return await otherService.newsLetterRequest({ userName, email });
    } catch (error) {
      const typedError: INewsLetterError = error.response
        .data as INewsLetterError;
      return rejectWithValue(typedError);
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
    RESET_CURRICULUM: (state) => {
      state.curriculum = null;
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
      .addCase(getLandingVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getLandingVideos.fulfilled,
        (state, action: PayloadAction<IVideoRes>) => {
          state.isLoading = false;
          state.videos = action.payload.videos;
        }
      )
      .addCase(
        getLandingVideos.rejected,
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
      .addCase(newsLetter.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(newsLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(newsLetter.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          const error = action.payload as INewsLetterError;
          state.error = error.message;
        } else {
          state.error = "An unknown error occurred.";
        }
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
      })
      .addCase(getCurriculum.pending, (state) => {
        state.isCurriculumLoading = true;
      })
      .addCase(getCurriculum.fulfilled, (state, action) => {
        state.isCurriculumLoading = false;
        state.curriculum = action.payload;
      })
      .addCase(getCurriculum.rejected, (state, action: PayloadAction<any>) => {
        state.isCurriculumLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { reset, setUserType, RESET_CURRICULUM } = otherSlice.actions;
export default otherSlice.reducer;
