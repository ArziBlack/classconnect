import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IRootState } from "../../app/store";

const API_BASE_URL = "https://hep-coding.onrender.com/v1/student";

// Get All Approved Tutors
export const getApprovedTutors = createAsyncThunk(
    'student/fetchApprovedTutors',
    async (_, thunkAPI) => {
      try {
        const state = thunkAPI.getState() as IRootState;
        const token = state.auth.token;
        const response = await axios.get(`${API_BASE_URL}/approvedTutors?page=0`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        return response.data;
      } catch (err) {
        const error = err.response ? err.response.data : err.message;
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

// Get Student Tuition Fee
export const getMyTuitionFee = createAsyncThunk(
  'student/getMyTuitionFee',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as IRootState;
      const token = state.auth.token;

      const response = await axios.get(`${API_BASE_URL}/getMyTuitionFee`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      const error = err.response ? err.response.data : err.message;
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Initiate a Transaction (GET) request
export const initiateTrx = createAsyncThunk(
  'student/initiateTrx',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/initiateTransaction`);
      return response.data;
    } catch (err) {
      const error = err.response ? err.response.data : err.message;
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Get Transaction State (Successful | null | errror)
export const getTrxState = createAsyncThunk(
  'student/getTrxState',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/paystack/success`);
      return response.data;
    } catch (err) {
      const error = err.response ? err.response.data : err.message;
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Choose a Tutor
export const chooseTutor = createAsyncThunk(
  'student/chooseTutor',
  async ({ tutorId, studentId }: { tutorId: string, studentId: string }, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as IRootState;
      const token = state.auth.token;

      const response = await axios.post(
        `${API_BASE_URL}/chooseTutor/${tutorId}/${studentId}`, 
        {}, 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (err) {
      const error = err.response ? err.response.data : err.message;
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// get General Assessment
const getGeneralAssessment = async () => {
  const response = await axios.get(`${API_BASE_URL}/getGeneralAssessment`);
  return response.data;
};

// Get personnal Assessment
const getPersonalAssessment = async () => {
  const response = await axios.get(`${API_BASE_URL}/getPersonalAssessment`);
  return response.data;
};

// Accept Tutor Recommendation
const acceptRecommendation = async (tutorId: string, studentId: string) => {
  const token = localStorage.getItem("token");
  const params = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }
  const response = await axios.post(
    `${API_BASE_URL}/accept_recommendation/${tutorId}/${studentId}`, params
  );
  return response.data;
};

// Reject Tutor Recommendation
const rejectRecommendation = async (tutorId: string, studentId: string) => {
  const token = localStorage.getItem("token");
  const params = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }
  const response = await axios.post(
    `${API_BASE_URL}/reject_recommendation/${tutorId}/${studentId}`, params
  );
  return response.data;
};

// Get my own Tutors
const getMyTutors = async () => {
  const response = await axios.get(`${API_BASE_URL}/getMyTutors`);
  return response.data;
};

// Logout Student...
const LogoutStudent = async () => {
  await axios.get(`${API_BASE_URL}/logout`);
};

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
  LogoutStudent,
};

export default studentService;
