import { createSlice } from "@reduxjs/toolkit";
import { getApprovedTutors } from "./studentThunks";

const initialState = {
    approvedTutors: [],
    myTutors:[],
    generalAssessment:[],
    personnalAssessment:[],
    recommendations: [],
    isLoading: false,
    error: null,
    isSuccess: false,
    isError: false
};

const studentSlice = createSlice({
    name: 'student',
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
      .addCase(getApprovedTutors.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.isSuccess = true;
        state.approvedTutors = action.payload;
      })
    },
})

export const { resetStudent } = studentSlice.actions;
export default studentSlice.reducer;