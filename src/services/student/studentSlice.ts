/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  LogoutStudent,
  acceptRecommendation,
  chooseTutor,
  getAllCourses,
  getApprovedTutors,
  getGeneralAssessment,
  getMyCourses,
  getMyTuitionFee,
  getMyTutors,
  getPersonalAssessment,
  getTrxState,
  initiateTrx,
  rejectRecommendation,
} from "./studentThunks";
import {
  IAcceptnRejectResponse,
  IAssessmentResponse,
  ICoursesResponse,
  IMyTutorsResponse,
  IRecommendationResponse,
  IStudentTrxAPIResponse,
  ITuitionFee,
  ITutorApiResponse,
} from "../../typings/student";

interface IState {
  approvedTutors: ITutorApiResponse | null;
  myTutors: IMyTutorsResponse | null;
  generalAssessment: IAssessmentResponse | null;
  personalAssessment: IAssessmentResponse | null;
  recommendResponse: IRecommendationResponse | null;
  trxResponse: IStudentTrxAPIResponse | null;
  tuitionFeeResponse: null;
  allCoursesResponse: ICoursesResponse;
  myCoursesRes: ICoursesResponse;
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean | null;
  isError: boolean;
}

const initialState = {
  approvedTutors: null,
  myTutors: null,
  generalAssessment: null,
  personalAssessment: null,
  recommendResponse: null,
  trxResponse: null,
  tuitionFeeResponse: null,
  allCoursesResponse: null,
  myCoursesRes: null,
  isLoading: null,
  error: null,
  isSuccess: false || null,
  isError: null,
} satisfies IState;

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetStudent: (state) => {
      state.approvedTutors = null;
      state.myTutors = null;
      state.generalAssessment = null;
      state.personalAssessment = null;
      state.recommendResponse = null;
      state.trxResponse = null;
      state.isLoading = false;
      state.error = null;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApprovedTutors.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        getApprovedTutors.fulfilled,
        (state, action: PayloadAction<ITutorApiResponse>) => {
          state.isLoading = false;
          state.approvedTutors = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(
        getApprovedTutors.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(getMyTuitionFee.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        getMyTuitionFee.fulfilled,
        (state, action: PayloadAction<ITuitionFee>) => {
          state.isLoading = false;
          state.tuitionFeeResponse = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(
        getMyTuitionFee.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(initiateTrx.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        initiateTrx.fulfilled,
        (state, action: PayloadAction<IStudentTrxAPIResponse>) => {
          state.isLoading = false;
          state.trxResponse = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(initiateTrx.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getTrxState.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        getTrxState.fulfilled,
        (state, action: PayloadAction<IStudentTrxAPIResponse>) => {
          state.isLoading = false;
          state.trxResponse = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(getTrxState.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(chooseTutor.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        chooseTutor.fulfilled,
        (state, action: PayloadAction<IRecommendationResponse>) => {
          state.isLoading = false;
          state.recommendResponse = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(chooseTutor.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getGeneralAssessment.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        getGeneralAssessment.fulfilled,
        (state, action: PayloadAction<IAssessmentResponse>) => {
          state.isLoading = false;
          state.generalAssessment = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(
        getGeneralAssessment.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(getPersonalAssessment.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        getPersonalAssessment.fulfilled,
        (state, action: PayloadAction<IAssessmentResponse>) => {
          state.isLoading = false;
          state.personalAssessment = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(
        getPersonalAssessment.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(acceptRecommendation.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        acceptRecommendation.fulfilled,
        (state, action: PayloadAction<IAcceptnRejectResponse>) => {
          state.isLoading = false;
          state.recommendResponse = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(
        acceptRecommendation.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(rejectRecommendation.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        rejectRecommendation.fulfilled,
        (state, action: PayloadAction<IAcceptnRejectResponse>) => {
          state.isLoading = false;
          state.recommendResponse = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(
        rejectRecommendation.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(getMyTutors.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        getMyTutors.fulfilled,
        (state, action: PayloadAction<IMyTutorsResponse>) => {
          state.isLoading = false;
          state.myTutors = action.payload;
          state.isSuccess = true;
        }
      )
      .addCase(getMyTutors.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAllCourses.fulfilled,
        (state, action: PayloadAction<ICoursesResponse>) => {
          state.isLoading = false;
          state.allCoursesResponse = action.payload;
        }
      )
      .addCase(
        getAllCourses.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(getMyCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getMyCourses.fulfilled,
        (state, action: PayloadAction<ICoursesResponse>) => {
          state.isLoading = false;
          state.myCoursesRes = action.payload;
        }
      )
      .addCase(
        getMyCourses.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(LogoutStudent.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(LogoutStudent.fulfilled, (state) => {
        state.isLoading = false;
        state.approvedTutors = null;
        state.myTutors = null;
        state.generalAssessment = null;
        state.personalAssessment = null;
        state.recommendResponse = null;
        state.trxResponse = null;
        state.isSuccess = true;
      })
      .addCase(
        LogoutStudent.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      );
  },
});

export const { resetStudent } = studentSlice.actions;
export default studentSlice.reducer;
