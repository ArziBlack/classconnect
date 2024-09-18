/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import authService, { ILoginParams } from "./authService";
import { IRegister, IReset, IResetVerify, IVerify } from "../../typings/signup";

export interface IResponse {
  statusCode: number;
  status?: string;
  email: string;
  first_name: string;
  last_name: string;
  note: string;
  paymentPlan: string;
  profileImage: string;
  phoneNum: string;
  classType: string;
  class_type?: string;
  country?: string;
  state?: string;
  sex?: string;
  dateOfBirth?: string;
  message: string;
  greeting?: string;
  student_count?: number;
  classNoticeUrl?: string;
  error?: string;
  token?: string;
}

const data: IResponse | null = JSON.parse(
  sessionStorage.getItem("user") || sessionStorage.getItem("tutor") || "null"
);
const jwt: string | null = sessionStorage.getItem("token")?.trim().toString();

if (data) {
  console.log(data);
}
if (jwt) {
  console.log(jwt);
}

interface AuthState {
  data: IResponse | null;
  update: IResponse | null;
  response: string;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  Loaded: boolean;
  isStudentLogged: boolean;
  message: string;
  token: string | null;
}

const initialState: AuthState = {
  data: data,
  update: data,
  response: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  Loaded: false,
  isStudentLogged: false,
  message: "",
  token: jwt,
};

// Student Sign-up
export const register = createAsyncThunk(
  "auth/signup",
  async ({ URI, data }: IRegister, thunkAPI) => {
    try {
      return await authService.register({ URI, data });
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

// Tutor Signup Function
export const registerTutor = createAsyncThunk(
  "auth/tutorSignup",
  async (data: IRegister, thunkAPI) => {
    try {
      return await authService.registerTutor(data);
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

// Student Login Function
export const login = createAsyncThunk(
  "auth/signin",
  async (user: ILoginParams, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (err) {
      const error = err as AxiosError;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log(message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Tutor Login Function
export const loginTutor = createAsyncThunk(
  "auth/tutorLogin",
  async (user: ILoginParams, thunkAPI) => {
    try {
      return await authService.loginTutor(user);
    } catch (err) {
      const error = err as AxiosError;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Send Reset Password for Student Forgot Password
export const resetPassword = createAsyncThunk(
  "auth/reset",
  async (email: IReset, thunkAPI) => {
    try {
      return await authService.resetPassword(email);
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

// Send Reset Password for Tutor Forgot Password
export const resetTutorPassword = createAsyncThunk(
  "auth/tutorReset",
  async (email: IReset, thunkAPI) => {
    try {
      return await authService.resetTutorPassword(email);
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

// Verify a Signed up Student or Guardian before login
export const emailVerify = createAsyncThunk(
  "auth/verify",
  async ({ studentId, uniqueString }: IVerify, thunkAPI) => {
    try {
      return await authService.verify({ studentId, uniqueString });
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

// verify Tutor Account before login
export const tutorEmailVerify = createAsyncThunk(
  "auth/tutorVerify",
  async ({ tutorId, uniqueString }: IVerify, thunkAPI) => {
    try {
      return await authService.verifyTutor({ tutorId, uniqueString });
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

export const studentResetVerify = createAsyncThunk("auth/student-password-verify", async ({ resetToken, email }: IResetVerify, thunkAPI) => {
  try {
    return await authService.verifyStudentResetPassword({ resetToken, email });
  } catch (err) {
    const error = err as AxiosError;
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const tutorResetVerify = createAsyncThunk("auth/tutor-password-verify", async ({ resetToken, email }: IResetVerify, thunkAPI) => {
  try {
    return await authService.verifyTutorResetPassword({ resetToken, email });
  } catch (err) {
    const error = err as AxiosError;
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const getToken = createAsyncThunk("auth/token", async () => {
  const token = localStorage.getItem("token");
  return token;
});

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
    logout(state) {
      state.data = null;
      state.response = "";
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.Loaded = false;
      state.isStudentLogged = false;
      state.message = "";
      state.token = "";
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
    },
    updateAuthData(state, action: PayloadAction<Partial<IResponse>>) {
      if (state.data) {
        state.data = { ...state.data, ...action.payload };
      }
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
      .addCase(registerTutor.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
        state.Loaded = false;
      })
      .addCase(registerTutor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
        state.message = action.payload.message;
        state.token = action.payload.token;
      })
      .addCase(registerTutor.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.error || "Registration failed";
      })
      .addCase(login.pending, (state) => {
        state.Loaded = false;
        state.isLoading = true;
        state.isStudentLogged = false;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isStudentLogged = true;
        state.Loaded = true;
        state.data = action.payload;
        state.response = action.payload.message;
        state.message = action.payload.message;
        state.token = action.payload.jwtToken;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.Loaded = false;
        state.isLoading = false;
        state.isError = true;
        state.isStudentLogged = false;
        state.message = action.payload.error;
        state.data = null;
      })
      .addCase(loginTutor.pending, (state) => {
        state.isLoading = true;
        state.Loaded = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(loginTutor.fulfilled, (state, action: PayloadAction<any>) => {
        state.Loaded = true;
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(loginTutor.rejected, (state, action: PayloadAction<any>) => {
        state.Loaded = false;
        state.message = action.payload.error;
        state.data = null;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(resetPassword.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "An Error Occurred!!";
      })
      .addCase(resetTutorPassword.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(resetTutorPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(
        resetTutorPassword.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload.message || "An Error Occurred!!";
        }
      )
      .addCase(getToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
        state.message = "";
      })
      .addCase(getToken.rejected, (state) => {
        state.isLoading = false;
        state.message = "Error Loading Token";
      })
      .addCase(emailVerify.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(emailVerify.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(emailVerify.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "An Error Occurred!!";
      })
      .addCase(tutorEmailVerify.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(tutorEmailVerify.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(tutorEmailVerify.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "An Error Occurred!!";
      })
      .addCase(studentResetVerify.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(studentResetVerify.fulfilled, (state, action) => {
        state.message = action.payload.message,
        state.isLoading = false,
        state.isSuccess = true;
      })
      .addCase(studentResetVerify.rejected, (state)=> {
        state.isLoading = false;
        state.isError = true;
        state.message = "An Error Occurred!!";
      })
      .addCase(tutorResetVerify.pending, (state)=> {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(tutorResetVerify.fulfilled, (state, action)=> {
        state.message = action.payload.message,
        state.isLoading = false,
        state.isSuccess = true;
      })
      .addCase(tutorResetVerify.rejected, (state)=> {
        state.isLoading = false;
        state.isError = true;
        state.message = "An Error Occurred!!";
      })
  },
});

export const { reset, logout, updateAuthData } = authSlice.actions;
export default authSlice.reducer;
