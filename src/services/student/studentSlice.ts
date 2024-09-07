/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  LogoutStudent,
  RegisterForACourse,
  UpdateStudentProfile,
  acceptRecommendation,
  chooseTutor,
  getAllCourses,
  getApprovedTutors,
  getClassSchedule,
  getCurriculum,
  getGeneralAssessment,
  getMyCourses,
  getMyTuitionFee,
  getMyTutors,
  getNotifications,
  getPersonalAssessment,
  getTrxState,
  initiateTrx,
  rejectRecommendation,
  requestRecommendation,
  updateProfileImage,
} from "./studentThunks";
import {
  IAcceptnRejectResponse,
  IAssessmentResponse,
  IChooseResponse,
  ICourseError,
  ICourseResponse,
  ICoursesResponse,
  ICurriculumResponse,
  IMyTutorsResponse,
  INotification,
  IRecommendationResponse,
  IScheduleResponse,
  IStudentTrxAPIResponse,
  ITuitionFee,
  ITutorApiResponse,
} from "../../typings/student";

const approvedTutors: ITutorApiResponse | null = JSON.parse(sessionStorage.getItem("approvedTutors") || "null");

interface IState {
  approvedTutors: ITutorApiResponse | null;
  myTutors: IMyTutorsResponse | null;
  generalAssessment: IAssessmentResponse | null;
  personalAssessment: IAssessmentResponse | null;
  recommendResponse: IRecommendationResponse | null;
  chooseResponse: IChooseResponse;
  trxResponse: IStudentTrxAPIResponse | null;
  tuitionFeeResponse: ITuitionFee | null;
  allCoursesResponse: ICourseResponse;
  myCoursesRes: ICoursesResponse;
  mySchedule: IScheduleResponse;
  curriculum: ICurriculumResponse;
  notifications: INotification;
  isLoading: boolean;
  recommendLoading: boolean;
  error: string | null;
  isSuccess: boolean | null;
  isError: boolean;
  message: string;
}

const initialState = {
  approvedTutors: approvedTutors ? { ...approvedTutors } : null,
  myTutors: null,
  generalAssessment: null,
  personalAssessment: null,
  recommendResponse: null,
  chooseResponse: null,
  trxResponse: null,
  tuitionFeeResponse: null,
  allCoursesResponse: null,
  myCoursesRes: null,
  mySchedule: null,
  curriculum: null,
  notifications: null,
  isLoading: null,
  recommendLoading: null,
  error: null,
  isSuccess: false || null,
  isError: null,
  message: ""
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
        state.message = "";
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
        state.message = "";
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
        state.message = "";
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
        state.message = "";
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
        state.error = "";
        state.message = "";
      })
      .addCase(
        chooseTutor.fulfilled,
        (state, action: PayloadAction<IRecommendationResponse>) => {
          state.isLoading = false;
          state.chooseResponse = action.payload;
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
        state.message = "";
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
        state.message = "";
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
      .addCase(requestRecommendation.pending, (state) => {
        state.recommendLoading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(requestRecommendation.fulfilled, (state, action: PayloadAction<IRecommendationResponse>) => {
        state.recommendLoading = false;
        state.recommendResponse = action.payload;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(requestRecommendation.rejected, (state, action: PayloadAction<string>) => {
        state.recommendLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(acceptRecommendation.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
        state.message = "";
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
        state.message = "";
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
        state.message = "";
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
        state.message = "";
      })
      .addCase(
        getAllCourses.fulfilled,
        (state, action: PayloadAction<ICourseResponse>) => {
          state.isLoading = false;
          state.allCoursesResponse = action.payload;
        }
      )
      .addCase(
        getAllCourses.rejected,
        (state, action: PayloadAction<ICourseError>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      )
      .addCase(getMyCourses.pending, (state) => {
        state.isLoading = true;
        state.message = "";
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
      .addCase(UpdateStudentProfile.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(UpdateStudentProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(UpdateStudentProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(RegisterForACourse.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(RegisterForACourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(RegisterForACourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getClassSchedule.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(getClassSchedule.fulfilled, (state, action: PayloadAction<IScheduleResponse>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.mySchedule = action.payload;
      })
      .addCase(getClassSchedule.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getCurriculum.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(getCurriculum.fulfilled, (state, action: PayloadAction<ICurriculumResponse>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.curriculum = action.payload;
      })
      .addCase(getCurriculum.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(updateProfileImage.pending, (state) => {
        state.isLoading = true;
        state.message = "";
        state.isError = false;
      })
      .addCase(updateProfileImage.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Profile Successfully updated";
      })
      .addCase(updateProfileImage.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Error Updating profile Image!!"
      })
      .addCase(getNotifications.pending, (state) => {
        state.isLoading = true;
        state.message = "";
        state.isError = false;
      })
      .addCase(getNotifications.fulfilled, (state, action: PayloadAction<INotification>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = action.payload;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(LogoutStudent.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
        state.message = "";
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