import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../app/axios";
import { IAssessmentData, IAssessmentResponse, IClassData, IClassSchedule, ICurriculumResponse, IMyStudentsResponse, INoticeResponse, IReportResponse, IUpdateTutorData } from "../../typings/tutor";
import { IResponse } from "../auth/authSlice";

// Get all My students
export const getMyStudents = createAsyncThunk<IMyStudentsResponse, void, { rejectValue: string }>("tutor/myStudents", async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get<IMyStudentsResponse>("/tutor/myStudents");
        return response.data;
    } catch (err) {
        const error = err.response?.data?.message || "An unknown error occurred";
        return thunkAPI.rejectWithValue(error);
    }
});

// Post a General Assessment
export const createGeneralAssessments = createAsyncThunk<IAssessmentResponse, { assessment: IAssessmentData }, { rejectValue: string }>("tutor/generalAssessments", async ({ assessment }, thunkAPI) => {
    try {
        const response = await axiosInstance.post<IAssessmentResponse>("/tutor/createGeneralAssessment", assessment);
        return response.data;
    } catch (err) {
        const error = err.response?.data?.message || "An unknown error occurred";
        return thunkAPI.rejectWithValue(error);
    }
});

// Post a Personnal Assessment
export const createPersonnalAssessment = createAsyncThunk<IAssessmentResponse, { assessment: IAssessmentData, id: string }, { rejectValue: string }>("tutor/personnal-assessment", async ({ assessment, id }, thunkAPI) => {
    try {
        const response = await axiosInstance.post<IAssessmentResponse>(`/tutor/createPersonalassessment/${id}`, assessment);
        return response.data;
    } catch (err) {
        const error = err.response?.data?.message || "An unknown error occurred";
        return thunkAPI.rejectWithValue(error);
    }
});

// Create General Report
export const createGeneralReport = createAsyncThunk<IAssessmentResponse, { report: IAssessmentData }, { rejectValue: string }>("tutor/general-report", async (report, thunkAPI) => {
    try {
        const response = await axiosInstance.post<IAssessmentResponse>("/tutor/generalReport", report);
        return response.data;
    } catch (err) {
        const error = err.response?.data?.message || "An unknown error occurred";
        return thunkAPI.rejectWithValue(error);
    }
});

// create a student report
export const createStudentReport = createAsyncThunk<IReportResponse, { report: IClassData, id: string }, { rejectValue: string }>("tutor/student-report", async ({ report, id }, thunkAPI) => {
    try {
        const response = await axiosInstance.post<IReportResponse>(`/tutor/sessionReport/${id}`,
            report);
        return response.data;
    } catch (err) {
        const error = err.response?.data?.message || "An unknown error occurred";
        return thunkAPI.rejectWithValue(error);
    }
});

// Send Class Notice
export const sendClassNotice = createAsyncThunk<INoticeResponse, { notice: IClassSchedule }, { rejectValue: string }>("tutor/send-class-notice", async (notice, thunkAPI) => {
    try {
        const response = await axiosInstance.post<INoticeResponse>("/tutor/sendClassNotice", notice);
        return response.data;
    } catch (err) {
        const error = err.response?.data?.message || "An unknown error occurred";
        return thunkAPI.rejectWithValue(error);
    }
});

// Get My Curriculum
export const getMyCurriculum = createAsyncThunk<ICurriculumResponse, void, { rejectValue: string }>("tutor/my-curriculum", async (_, thunkAPI
) => {
    try {
        const response = await axiosInstance.get<ICurriculumResponse>(`/tutor/getMyCourseCurriculum`);
        return response.data;
    } catch (err) {
        const error = err.response?.data?.message || "An unknown error occurred";
        return thunkAPI.rejectWithValue(error);
    }
});

// Update Tutor Profile Details
export const UpdateTutorProfile = createAsyncThunk<IResponse, { update: IUpdateTutorData }, { rejectValue: string }>("tutor/update-tutor", async (update, thunkAPI) => {
    try {
        const response = await axiosInstance.post<IResponse>("/tutor/updateTutorProfile", update);
        return response.data;
    } catch (err) {
        const error = err.response?.data?.message || "An unknown error occurred";
        return thunkAPI.rejectWithValue(error);
    }
})