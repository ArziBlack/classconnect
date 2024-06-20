/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getApprovedTutors } from "./studentThunks";
import {
  IAssessmentResponse,
  IMyTutorsResponse,
  IRecommendationResponse,
  IStudentTrxAPIResponse,
  ITutorApiResponse,
} from "../../typings/student";

interface IState {
  approvedTutors: ITutorApiResponse;
  myTutors: IMyTutorsResponse;
  generalAssessment: IAssessmentResponse;
  personnalAssessment: IAssessmentResponse;
  recommendResponse: IRecommendationResponse;
  trxResponse: IStudentTrxAPIResponse;
  isLoading: boolean;
  error: string;
  isSuccess: boolean;
  isError: boolean;
}
const initialState = {
  approvedTutors: null,
  myTutors: null,
  generalAssessment:null,
  personnalAssessment: null,
  recommendResponse: null,
  trxResponse: null,
  isLoading: null,
  error: null,
  isSuccess: null,
  isError: null,
} satisfies IState;

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetStudent: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.error = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getApprovedTutors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApprovedTutors.fulfilled, (state, action: PayloadAction<ITutorApiResponse>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.approvedTutors = action.payload;
      })
      .addCase(getApprovedTutors.rejected, (state, action: PayloadAction<any>)=> {
        state.isLoading = false;
        state.error = action.payload.error;
      })
  },
});

export const { resetStudent } = studentSlice.actions;
export default studentSlice.reducer;
