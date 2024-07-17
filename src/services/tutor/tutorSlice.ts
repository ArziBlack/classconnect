import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAssessmentResponse, IMyStudentsResponse, ITutor } from "../../typings/tutor";
import { createGeneralAssessments, createPersonnalAssessment, getMyStudents } from "./tutorThunk";

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
    },
})

export const { resetTutor } = tutorSlice.actions;
export default tutorSlice.reducer;