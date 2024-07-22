import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAssessmentResponse, ICurriculumResponse, IMyStudentsResponse, INoticeResponse, IReportResponse, ITutor } from "../../typings/tutor";
import { createGeneralAssessments, createGeneralReport, createPersonnalAssessment, createStudentReport, getMyCurriculum, getMyStudents, sendClassNotice, UpdateTutorProfile } from "./tutorThunk";

const initialState = {
    myStudents: null,
    generalAssessment: null,
    personnalAssessment: null,
    reportResponse: null,
    classSchedule: null,
    noticeResponse: null,
    curriculumResponse: null,
    isLoading: false || null,
    isError: false || null,
    isSuccess: false || null,
    error: "",
    message: ""
} satisfies ITutor;

const tutorSlice = createSlice({
    name: "tutor",
    initialState,
    reducers: {
        resetTutor: (state) => {
            state.myStudents = null;
            state.generalAssessment = null;
            state.reportResponse = null;
            state.classSchedule = null;
            state.noticeResponse = null;
            state.curriculumResponse = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.error = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMyStudents.pending, (state) => {
            state.isLoading = true;
            state.error = "";
            state.isSuccess = false;
        })
            .addCase(getMyStudents.fulfilled, (state, action: PayloadAction<IMyStudentsResponse>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.myStudents = action.payload;
            })
            .addCase(getMyStudents.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(createGeneralAssessments.pending, (state) => {
                state.isLoading = true;
                state.error = "";
                state.isSuccess = false;
            })
            .addCase(createGeneralAssessments.fulfilled, (state, action: PayloadAction<IAssessmentResponse>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.generalAssessment = action.payload;
            })
            .addCase(createGeneralAssessments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(createPersonnalAssessment.pending, (state) => {
                state.isLoading = true;
                state.error = "";
                state.isSuccess = false;
            })
            .addCase(createPersonnalAssessment.fulfilled, (state, action: PayloadAction<IAssessmentResponse>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.personnalAssessment = action.payload;
            })
            .addCase(createPersonnalAssessment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(createGeneralReport.pending, (state) => {
                state.isLoading = true;
                state.error = "";
                state.isSuccess = false;
            })
            .addCase(createGeneralReport.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.reportResponse = action.payload;
            })
            .addCase(createGeneralReport.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(createStudentReport.pending, (state) => {
                state.isLoading = true;
                state.error = "";
                state.isSuccess = false;
            })
            .addCase(createStudentReport.fulfilled, (state, action: PayloadAction<IReportResponse>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.reportResponse = action.payload;
            })
            .addCase(createStudentReport.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(sendClassNotice.pending, (state) => {
                state.isLoading = true;
                state.error = "";
                state.isSuccess = false;
            })
            .addCase(sendClassNotice.fulfilled, (state, action: PayloadAction<INoticeResponse>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.noticeResponse = action.payload;
            })
            .addCase(sendClassNotice.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(getMyCurriculum.pending, (state) => {
                state.isLoading = true;
                state.error = "";
                state.isSuccess = false;
            })
            .addCase(getMyCurriculum.fulfilled, (state, action: PayloadAction<ICurriculumResponse>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.curriculumResponse = action.payload;
            })
            .addCase(getMyCurriculum.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(UpdateTutorProfile.pending, (state)=> {
                state.isLoading = true;
                state.error = "";
                state.isSuccess = false;
            })
            .addCase(UpdateTutorProfile.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(UpdateTutorProfile.rejected, (state, action)=> {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || "Something went wrong";
            })
    },
})

export const { resetTutor } = tutorSlice.actions;
export default tutorSlice.reducer;