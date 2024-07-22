import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { IRootState } from "../../app/store";
import {
  IAcceptnRejectResponse,
  IAssessmentResponse,
  ICoursesResponse,
  IMyTutorsResponse,
  IRecommendationResponse,
  IStudentTrxAPIResponse,
  ITuitionFee,
  ITutorApiResponse,
  IUpdateStudentData,
} from "../../typings/student";
import axiosInstance from "../../app/axios";
import { logger } from "../../utils/logger";
import { IResponse } from "../auth/authSlice";

const API_BASE_URL = "https://hep-coding.onrender.com/v1/student";

export const getApprovedTutors = createAsyncThunk<
  ITutorApiResponse,
  void,
  { rejectValue: string }
>("student/fetchApprovedTutors", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/student/approvedTutors?page=1`);

    if (response.data) {
      logger("Approved Tutors", response?.data?.data, "Tutors");
    }
    return response.data;
  } catch (err) {
    console.error("Error fetching approved tutors:", err);
    const error = err.response?.data?.message || "An unknown error occurred";
    return thunkAPI.rejectWithValue(error);
  }
});

// Get Student Tuition Fee
export const getMyTuitionFee = createAsyncThunk<
  ITuitionFee,
  void,
  { rejectValue: string }
>("student/getMyTuitionFee", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token")?.trim()?.toString();

    const response = await axios.get(`${API_BASE_URL}/getMyTuitionFee`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Initiate a Transaction (GET) request
export const initiateTrx = createAsyncThunk<
  IStudentTrxAPIResponse,
  void,
  { rejectValue: string }
>("student/initiateTrx", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/student/initiateTransaction`);
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// unknown response from Postman
// Get Transaction State (Successful | null | errror)
export const getTrxState = createAsyncThunk<
  IStudentTrxAPIResponse,
  void,
  { rejectValue: string }
>("student/getTrxState", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("/student/paystack/success");
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Choose a Tutor
export const chooseTutor = createAsyncThunk<
  IRecommendationResponse,
  { url: string },
  { rejectValue: string }
>("student/chooseTutor", async ({ url }, thunkAPI) => {
  try {
    const response = await axios.post(
      `${url}`,
      {},
    );

    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// get General Assessment
export const getGeneralAssessment = createAsyncThunk<
  IAssessmentResponse,
  void,
  { rejectValue: string }
>("student/assessment", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/student/getGeneralAssessment`);
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Get Personal Assessment
export const getPersonalAssessment = createAsyncThunk<
  IAssessmentResponse,
  void,
  { rejectValue: string }
>("student/personalAssessment", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/student/getPersonalAssessment`);
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Accept Tutor Recommendation
export const requestRecommendation = createAsyncThunk<
  IRecommendationResponse,
  void,
  { rejectValue: string }
>("student/requestRecommendation", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${API_BASE_URL}/getTutorRecommendation/`,
      {},
      params
    );
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Accept Tutor Recommendation
export const acceptRecommendation = createAsyncThunk<
  IAcceptnRejectResponse,
  { tutorId: string; studentId: string },
  { rejectValue: string }
>("student/acceptRecommendation", async ({ tutorId, studentId }, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${API_BASE_URL}/accept_recommendation/${tutorId}/${studentId}`,
      {},
      params
    );
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Reject Tutor Recommendation
export const rejectRecommendation = createAsyncThunk<
  IAcceptnRejectResponse,
  { tutorId: string; studentId: string },
  { rejectValue: string }
>("student/rejectRecommendation", async ({ tutorId, studentId }, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${API_BASE_URL}/reject_recommendation/${tutorId}/${studentId}`,
      {},
      params
    );
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Get my own Tutors
export const getMyTutors = createAsyncThunk<
  IMyTutorsResponse,
  void,
  { rejectValue: string }
>("student/getMyTutors", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/getMyTutors`);
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Get my Courses
export const getMyCourses = createAsyncThunk<
  ICoursesResponse,
  void,
  { rejectValue: string }
>("student/getMyCourses", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/getMyCourses`);
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Get my Courses
export const getAllCourses = createAsyncThunk<
  ICoursesResponse,
  void,
  { rejectValue: string }
>("student/getAllCourses", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token")?.trim()?.toString();

    const response = await axios.get(`${API_BASE_URL}/getAllCourses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data) {
      logger("Get All Courses", response?.data?.message, "Courses");
    }
    return response.data;
  } catch (err) {
    console.error("Error fetching approved tutors:", err);
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Update the Student Profile Data
export const UpdateStudentProfile = createAsyncThunk<IResponse, { update: IUpdateStudentData }, { rejectValue: string }>("student/update-profile", async (update, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/student/updateStudentProfile', update);
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

// Register For A New Course
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RegisterForACourse = createAsyncThunk<any, { newCourse: string }, { rejectValue: string }>("student/register-course", async ({ newCourse }, thunkAPI) => {
  try {
    const response = await axiosInstance.post("/student/registerNewCourse", { newCourse });
    return response.data;
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
})

// Logout Student...
export const LogoutStudent = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("student/logout", async (_, thunkAPI) => {
  try {
    await axios.get(`${API_BASE_URL}/student/logout`);
  } catch (err) {
    const error = err.response ? err.response.data : err.message;
    return thunkAPI.rejectWithValue(error);
  }
});

const studentService = {
  getApprovedTutors,
  getMyTuitionFee,
  initiateTrx,
  getTrxState,
  chooseTutor,
  getGeneralAssessment,
  getPersonalAssessment,
  acceptRecommendation,
  rejectRecommendation,
  getMyTutors,
  getMyCourses,
  LogoutStudent,
};

export default studentService;
